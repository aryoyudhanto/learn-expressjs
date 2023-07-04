import express, { json } from 'express';
import UserRouter from './src/routes/users.routing.js'
// const newSeq  = require('./src/connection.js')
// const Users = require('./src/users/users.model.js')
// const Details = require('./src/user_details/user_details.model.js

const port = 4032
const app = express()

app.use(json());
app.use(UserRouter)

app.listen(port, () => {
    console.log(`express API running on port ${port}`)
})
