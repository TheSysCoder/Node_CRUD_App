// all user routers here
import express from "express";
import {
    createUser,
} from '../controllers/User.controller.js'


const router = express.Router()

// create user
router.post("/", createUser)

export default router;