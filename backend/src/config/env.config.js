import "dotenv/config";


export const env = {
    port : Number(process.env.PORT) || 5000,
    db: process.env.MONGO_URI,

}

if (!env.port || !env.db) {
    throw new Error("Check your environment variables");

}
