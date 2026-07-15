import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import ApiError from '../utils/ApiError.js';
import generateToken from '../utils/generateToken.js';


export const registerUser = async (name, email, password) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new ApiError(400, 'User already exists');
  }

  const hashedPassword = await bcrypt.hash(password, 5);

  const user = new User({
    name,
    email,
    password: hashedPassword,
  });

  await user.save();
  return user;
};


export const loginUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new ApiError(400, 'User not found');
  }

  if (!user.password) {
    throw new ApiError(400, 'Use Google login');
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new ApiError(400, 'Invalid credentials');
  }

  const token = generateToken(user._id, user.email);

  return {
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      picture: user.picture,
    },
  };
};
export const loginWithGoogle = async (googleToken) => {
  const googleRes = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
    headers: {
      Authorization: `Bearer ${googleToken}`,
    },
  });

  const data = await googleRes.json();

  if (data.error) {
    throw new ApiError(401, 'Invalid Google Token');
  }

  let user = await User.findOne({ email: data.email });

  if (!user) {
    user = new User({
      name: data.name,
      email: data.email,
      picture: data.picture,
    });
    await user.save();
  }

  const backendToken = generateToken(user._id, user.email);

  return {
    token: backendToken,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      picture: user.picture,
    },
  };
};
