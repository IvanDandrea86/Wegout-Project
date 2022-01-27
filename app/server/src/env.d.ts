
declare namespace NodeJS{
    export interface ProcessEnv{
        ATLAS_CONNETCION:string;
        SECRET:string ;
        REDIS_URL:string| undefined;
        ALLOWED_ORIGIN:string;
        SMTP_USER:string;
        SMTP_PASS:string;
        SMTP_HOST:string;
    }
}

