import express from 'express';
import UserRouter from './src/routes/users.routing.js'

const port = 4032
const app = express()

app.use(express.json());

app.use(UserRouter)

app.listen(port, () => {
    console.log(`express API running on port ${port}`)
})
