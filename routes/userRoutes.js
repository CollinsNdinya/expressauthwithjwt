import express from 'express'
import authenticateToken from "../middleware/authenticateToken.js"
import {getUser, renderHTML, } from '../controllers/userControllers.js'



const route = express.Router()


//routes
route.get("/renderHTML", renderHTML)
route.get("/getUser", authenticateToken,  getUser)


export default route