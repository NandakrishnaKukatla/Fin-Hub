import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import ApiError from '../utils/ApiError.js';
import generateToken from '../utils/generateToken.js';

/**
 * Service to register a new user locally.
 * 
 * @param {string} name - User's name
 * @param {string} email - User's email
 * @param {string} password - User's plain text password
 * @returns {Promise<Object>} The registered user document
 */
export const registerUser = async (name, email, password) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new ApiError(400, 'User already exists');
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({
    name,
    email,
    password: hashedPassword,
  });

  await user.save();
  return user;
};

/**
 * Service to authenticate a user locally.
 * 
 * @param {string} email - User's email
 * @param {string} password - User's plain text password
 * @returns {Promise<Object>} Contains token and user details
 */
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

/**
 * Service to login or register a user using a Google OAuth access token.
 * 
 * @param {string} googleToken - The Google access token
 * @returns {Promise<Object>} Contains backend token and user details
 */
export const loginWithGoogle = async (googleToken) => {
  // Call Google userinfo endpoint using native fetch API
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

  // If user doesn't exist, create a new one without a password field
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
