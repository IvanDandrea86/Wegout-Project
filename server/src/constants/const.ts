import dotenv from 'dotenv';
dotenv.config()

export const PORT  = process.env.PORT || 4000;
export const __prod__ = process.env.NODE_ENV === 'production'
export const __staging__ =process.env.NODE_ENV === 'staging';
export const SECRET = process.env.SECRET;
export const REDIS_TLS_URL = process.env.REDIS_TLS_URL;
export const REDIS_URL=process.env.REDIS_URL;
export const OneDay= 1000* 60*60*24;
export const COOKIENAME = 'qid';
export const ALLOW_ORIGIN= process.env.ALLOWED_ORIGIN;
export const SMTP_USER=process.env.SMTP_USER
export const SMTP_PASS=process.env.SMTP_PASS
export const SMTP_HOST=process.env.SMTP_HOST
export const TICKETMASTER_KEY=process.env.TICKETMASTER_KEY
export const user = process.env.REDIS_PASSWORD ? `default:${process.env.REDIS_PASSWORD}` : ''
export const host = process.env.REDIS_HOST || 'localhost'
export const port = process.env.REDIS_PORT || 6379

