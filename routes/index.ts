import express from 'express'
import videoRouter from './video'
import authRouter from './auth'

const router = express.Router()

router.use('/video', videoRouter)
router.use('/auth', authRouter)

export default router