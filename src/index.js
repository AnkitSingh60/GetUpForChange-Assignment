const express = require("express");
const dotenv = require('dotenv');
const cors = require("cors");
const connect = require("./configs/db")

const app = express();

//middlewares
dotenv.config();
app.use(express.json())

const PORT = process.env.PORT || 5000;
app.use(cors());

app.listen(PORT, async () => {
    try {
        await connect()
    } catch (error) {
        console.log('error:', error)
        
    }
     console.log(`Listening on port ${PORT}...`);
 })