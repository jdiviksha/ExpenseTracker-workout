import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import jwt from 'jsonwebtoken'
import cookieparser from 'cookie-parser'

const app = express()

app.listen(3001, () => {
    console.log("server is Running")
})