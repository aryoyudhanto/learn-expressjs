import express from 'express';
import UserRouter from './src/routes/users.routing.js'
import LoginRouter from './src/routes/auth.routing.js'

const port = 4032
const app = express()

app.use(express.json());

app.use(UserRouter)
app.use(LoginRouter)

app.listen(port, () => {
    console.log(`express API running on port ${port}`)
})
