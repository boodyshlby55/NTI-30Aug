declare namespace NodeJS {
  interface ProcessEnv {
    readonly PORT: number;
    readonly DB: string;
    readonly NODE_ENV: 'development' | 'product'
    readonly BASE_URL: string;
    readonly JWT_KEY: string;
    readonly JWT_Expire: string;
    readonly JWT_RESET_EXPIRE: string;
  }
}