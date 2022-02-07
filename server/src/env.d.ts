
declare namespace NodeJS{
    export interface ProcessEnv{
        ATLAS_CONNETCION:string;
        SECRET:string ;
        REDIS_TLS_URL:string| undefined;
        REDIS_URL:string |undefined;
        ALLOWED_ORIGIN:string;
        SMTP_USER:string;
        SMTP_PASS:string;
        SMTP_HOST:string;
        TICKETMASTER_KEY:string;
        REDIS_DOMAIN_NAME:string;
        REDIS_PORT:number;
        
    }
}

