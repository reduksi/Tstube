import { Request, Response } from 'express';
import axios from 'axios';

export const getVideos = async (req : Request, res : Response, next : Function) => {
    try {
        const { data } = await axios.request({
            method: 'GET',
            url: 'https://api.jikan.moe/v4/anime',
          })
        res.status(200).json({data})
    } catch (error) {
        next(error)
    }
}