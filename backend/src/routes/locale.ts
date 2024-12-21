import { getLocale } from '../controller/locale'

import express from 'express'
const route = express.Router()

route.get('/locale/:id', getLocale)

export default route