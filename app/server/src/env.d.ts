
declare namespace NodeJS{
    export interface ProcessEnv{
        ATLAS_CONNETCION:string;
        SECRET:string ;
        REDIS_URL:string| undefined;
        ALLOWED_ORIGIN:string;
        
    }
}

