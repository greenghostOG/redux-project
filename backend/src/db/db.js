import mongoose, { mongo } from "mongoose";
import { env } from "../config/env.config.js";


export const connectDB = async () => {
    try {
        
        const server = await mongoose.connect(env.db);
        console.log(`Database Connected Successfully`);


    } catch (error) {
        console.error(`Database Connection Failed : ${error.message}`)
    }
}

