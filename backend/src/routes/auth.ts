import express from "express"
import { register, checkExistence } from "../controller/auth"

const router = express.Router()
router.post('/auth/register', register)
router.get('/auth/check-existence',checkExistence)

export default router;