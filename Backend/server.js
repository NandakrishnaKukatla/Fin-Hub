const express = require('express');
const cors = require('cors');
const { OAuth2Client } = require('google-auth-library');

const app = express();
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

const CLIENT_ID = '976802788054-aib5ai70hs4lfgrhqmf6hngtopbmblbt.apps.googleusercontent.com';

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

        res.status(200).json({
            success: true,
            user: {
                name: payload.name,
                email: payload.email,
                picture: payload.picture
            }
        });
    } catch (error) {
        console.error("Token verification failed:", error);
        res.status(401).json({ success: false, message: "Invalid token" });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Backend server running on http://localhost:${PORT}`);
});