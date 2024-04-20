const express = require('express')
const cors = require("cors");
const jwt = require("jsonwebtoken");
const config = require("./config");
const utils = require("./utils");
const app = express();
app.use(cors());
app.use(express.json());


//add the routes
const userRouter=require('./routes/user')
const categoryRouter = require("./routes/category");
app.use('/user',userRouter)
app.use("/category", categoryRouter);
app.listen(4000, '0.0.0.0', () => {
    console.log('server to start ho gya on port 4000')
})