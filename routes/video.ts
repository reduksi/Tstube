import express from 'express'
const router = express.Router()
import { getVideos } from '../controllers/video'
 
router.get('/', getVideos)

export default router