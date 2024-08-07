// /src/auth/validations.js
import validator from 'validator';

// Function to validate email
export const validateEmail = (email:any) => {
  if (!validator.isEmail(email)) {
    throw new Error('Invalid email format');
  }
};

// Function to validate password
export const validatePassword = (password:any) => {
  if (password.length < 6) {
    throw new Error('Password must be at least 6 characters long');
  }
};

// Function to validate user registration
export const validateRegistration = (user:any) => {
  validateEmail(user.email);
  validatePassword(user.password);
  // Add other validation rules as needed
};




//usage  

// // /src/pages/api/register.js
// import { hashPassword } from '../../auth/auth';
// import { validateRegistration } from '../../auth/validations';
// import User from '../../models/User';

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method not allowed' });
//   }

//   const { email, password } = req.body;

//   try {
//     validateRegistration({ email, password });
//     const hashedPassword = await hashPassword(password);
//     const user = new User({ email, password: hashedPassword });
//     await user.save();
//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// }
