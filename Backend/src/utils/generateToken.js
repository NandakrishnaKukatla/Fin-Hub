import jwt from 'jsonwebtoken';

/**
 * Generate a JWT token containing user id and email.
 * 
 * @param {string} userId - The user's database ID
 * @param {string} email - The user's email address
 * @returns {string} Signed JWT token
 */
const generateToken = (userId, email) => {
  return jwt.sign(
    { id: userId, email },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  );
};

export default generateToken;
