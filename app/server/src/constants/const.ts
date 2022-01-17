import dotenv from 'dotenv';
dotenv.config()
export const PORT= process.env.PORT || 4000
export const __prod__ = process.env.NODE_ENV === 'production';

export const ALLOW_ORIGIN= process.env.ALLOWED_ORIGIN;



