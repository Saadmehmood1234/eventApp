import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/User'; 

const SECRET_KEY = process.env.SECRET_KEY || 'your-secret-key';

// Function to hash passwords
export const hashPassword = async (password:any) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

// Function to compare passwords
export const comparePassword = async (password:any, hashedPassword:any) => {
  return await bcrypt.compare(password, hashedPassword);
};

// Function to generate a JWT token
export const generateToken = (user:any) => {
  return jwt.sign({ id: user.id, role: user.role }, SECRET_KEY, { expiresIn: '1h' });
};

// Function to verify a JWT token
export const verifyToken = (token:any) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    throw new Error('Invalid or expired token');
  }
};

// Function to authenticate a user
export const authenticateUser = async (email:any, password:any) => {
  const user = await User.findOne({ email });
  if (!user || !(await comparePassword(password, user.password))) {
    throw new Error('Invalid email or password');
  }
  return user;
};
