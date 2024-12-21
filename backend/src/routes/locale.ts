import { getLocale } from '../controller/Locale'

import express from 'express'
const route = express.Router()

route.get('/locale/:id', getLocale)

export default route