import express from 'express'
import {login, logOut, token} from '../controllers/authController.js'

const route = express.Router()

route.post("/login", login)
route.post("/token", token)
route.delete("/logOut", logOut)

export default route