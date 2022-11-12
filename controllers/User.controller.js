// User controller here

import users from '../modules/User.modules.js'
import mongoose from 'mongoose'
import { json } from 'express'


// create user
export const createUser = async (req, res, next) => {
    const { userName, userEmail } = req.body;
    try {
        const user = await users.create({
            userName,
            userEmail
        });
        res.status(201).json({
            message: "User is created successfully",
            user: user
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}