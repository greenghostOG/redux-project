import express from "express";
import cors from 'cors';
import { env } from "./src/config/env.config.js";
import { connectDB } from "./src/db/db.js";
import router from './src/routes/api.routes.js'

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    return res.status(200).json({
        message: `Redux project is ready`
    })
})

app.use("/api/v1/user", router)

const startServer = async () => {
    try {
        
        await connectDB();

        const conn = app.listen(env.port, () => {
            console.log(`Server Started...`)
        })

    } catch (error) {
        console.error(`Server Didn't started : ${error.message}`)
    }
}


startServer();

