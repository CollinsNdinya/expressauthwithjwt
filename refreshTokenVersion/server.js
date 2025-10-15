import express, { json } from 'express'
import path from 'path'
import { fileURLToPath } from 'url';
import dotenv from 'dotenv'
dotenv.config();
import userRoutes from './routes/userRoutes.js'
import authRoutes from './routes/authRoutes.js'

const port = 8000

const app = express()



app.use(express.json())

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../.env") });

app.use("/api/user", userRoutes)
app.use("/api/user", authRoutes)




app.listen(port, ()=> console.log(`Server running on port ${port}`))

