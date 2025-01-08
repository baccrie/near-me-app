import express from "express"
import { register, checkEmailExistence, checkUsernameExistence, login } from "../controller/auth"

const router = express.Router()
router.post('/auth/register', register)
router.post('/auth/login', login)
router.get('/auth/check-email-existence',checkEmailExistence)
router.get('/auth/check-username-existence',checkUsernameExistence)


export default router;