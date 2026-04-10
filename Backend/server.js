const express = require('express');
const cors = require('cors');
const { OAuth2Client } = require('google-auth-library');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/finhub')
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Could not connect to MongoDB", err));

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String },
    picture: { type: String },
});

const User = mongoose.model('User', userSchema);

const CLIENT_ID = '976802788054-aib5ai70hs4lfgrhqmf6hngtopbmblbt.apps.googleusercontent.com';

app.post('/api/auth/register', async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) return res.status(400).json({ success: false, message: "Missing fields" });
    
    try {
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ success: false, message: "User already exists" });

        const hashedPassword = await bcrypt.hash(password, 10);
        user = new User({ name, email, password: hashedPassword });
        await user.save();

        res.status(201).json({ success: true, message: "User registered successfully" });
    } catch (error) {
        console.error("Registration error:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
});

app.post('/api/auth/login', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ success: false, message: "Missing fields" });
    
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ success: false, message: "User not found" });
        if (!user.password) return res.status(400).json({ success: false, message: "Please login with Google" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ success: false, message: "Invalid credentials" });

        const backendToken = jwt.sign(
            { id: user._id, email: user.email }, 
            "secretKey",
            { expiresIn: '1d' }
        );

        res.status(200).json({
            success: true,
            token: backendToken,
            user: { id: user._id, name: user.name, email: user.email, picture: user.picture }
        });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
});

app.post('/api/auth/google', async (req, res) => {
    const { token } = req.body;

    if (!token) {
        return res.status(400).json({ success: false, message: "Token is required" });
    }

    try {
        const googleResponse = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if (!googleResponse.ok) {
            throw new Error("Failed to fetch user info from Google");
        }

        const payload = await googleResponse.json();

        console.log("Verified User:", payload.email);

        let user = await User.findOne({ email: payload.email });

        if (!user) {
            console.log("Registering new user:", payload.email);
            user = new User({
                name: payload.name,
                email: payload.email,
                picture: payload.picture
            });
            await user.save();
        } else {
            console.log("Logged in existing user:", payload.email);
        }

        const backendToken = jwt.sign(
            { id: user._id, email: user.email }, 
            "secretKey",
            { expiresIn: '1d' }
        );

        res.status(200).json({
            success: true,
            token: backendToken,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                picture: user.picture
            }
        });
    } catch (error) {
        console.error("Token verification or DB failing:", error);
        res.status(401).json({ success: false, message: "Invalid token or DB error" });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Backend server running on http://localhost:${PORT}`);
});