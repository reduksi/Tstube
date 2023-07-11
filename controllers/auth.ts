import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const login = async (req : Request, res : Response, next : Function) => {
    try {
        const { body } = req

        const authentedUser = process.env.ADMINUSER
        const authentedPass = process.env.ADMINPASS

        let err = ''
        if(body.username === authentedUser){
            if(body.password === authentedPass){
                const accessToken = jwt.sign({ email: body.username }, `${process.env.JWT_KEY}`, {
                    expiresIn: process.env.JWT_EXPIRY,
                })
                res.status(201).json({ user: body.username, accessToken })
            }else{
                err = 'Wrong Password!'
            }
        }else{
            err = 'Wrong Username!'
        }
        throw new Error(err)
    } catch (error) {
        next(error)
    }
}