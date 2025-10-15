import express from 'express'
import authenticateToken from "../middleware/authenticateToken.js"
import { getUser, renderHTML } from '../Controllers/userControllers.js'



const route = express.Router()



route.get("/renderHTML", renderHTML)

route.get("/getUser", authenticateToken,  getUser)


export default route