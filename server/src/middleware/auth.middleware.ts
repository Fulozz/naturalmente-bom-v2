import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

module.exports = (req: Request, res: Response, next: NextFunction) => {
  // Get the token from the Authorization header (Bearer <token>)
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Extract token if exists
  const secretKey = process.env.JWT_SECRET_KEY || 'your_secret_key';

  if (!token) {
    return res.status(401).send({
      message: 'Access denied. No token provided.',
    });
  }

  try {
    // Verify and decode the token
    const decodedToken: any = jwt.verify(token, secretKey);
    
    // Check if the token has expired (compare `exp` field to the current time)
    const currentTimestamp = Math.floor(Date.now() / 1000); // Convert to seconds
    if (decodedToken.exp < currentTimestamp) {
      return res.status(401).send({
        message: 'Token expired - Auth.js',
      });
    }

    // If the token is valid and not expired, allow the request to proceed
    return res.status(200).send({
      message: 'Token is valid',
    });
    
  } catch (err) {
    // Handle token verification errors
    return res.status(500).send({
      message: 'Invalid token or error verifying the token',
    });
  }
};