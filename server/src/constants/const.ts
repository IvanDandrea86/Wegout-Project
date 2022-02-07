import dotenv from 'dotenv';
dotenv.config()
export const PORT  = process.env.PORT || 4000;
export const __prod__ = process.env.NODE_ENV === 'production'||'staging';
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
export const REDIS_DOMAIN_NAME= process.env.REDIS_DOMAIN_NAME
export const REDIS_PORT=process.env.REDIS_PORT

