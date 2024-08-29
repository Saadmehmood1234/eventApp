// import jwt from 'jsonwebtoken';
// import { NextResponse } from 'next/server';

// const generateTokenAndCookie = (userId: any) => {
//   const secret = process.env.JWT_SECRET;
  
//   if (!secret) {
//     throw new Error('JWT_SECRET is not defined');
//   }

//   const token = jwt.sign({ userId }, secret, {
//     expiresIn: '15d',
//   });

//   const response = NextResponse.next();
//   response.cookies.set('jwt', token, {
//     httpOnly: true,
//     path: '/',
//     maxAge: 15 * 24 * 60 * 60,
//   });

//   return response;
// };

// export default generateTokenAndCookie;


import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

const generateTokenAndCookie = (userId: any) => {
  const secret = process.env.JWT_SECRET;
  
  if (!secret) {
    throw new Error('JWT_SECRET is not defined');
  }

  const token = jwt.sign({ userId }, secret, {
    expiresIn: '15d',
  });

  const response = NextResponse.next();
  response.cookies.set('jwt', token, {
    httpOnly: true,
    path: '/',
    maxAge: 15 * 24 * 60 * 60,
  });
console.log(response)
  return response;
};

export default generateTokenAndCookie;
