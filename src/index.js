const express = require("express");
const dotenv = require('dotenv');
const cors = require("cors");
const connect = require("./configs/db")
const {login, register} = require("./controller/user.controller")

const app = express();

//middlewares
dotenv.config();
app.use(express.json())

const PORT = process.env.PORT || 5000;
app.use(cors());

app.post("/register",register)
app.post("/login",login)

app.listen(PORT, async () => {
    try {
        await connect()
    } catch (error) {
        console.log('error:', error)
        
    }
     console.log(`Listening on port ${PORT}...`);
 })