const express = require('express')
const cors= require('cors')
const jwt = require('jsonwebtoken')
const utils= require('./utils')
const config = require('./config')
const app = express()
app.use(cors())
app.use(express.json())



app.use((request,response,next)=>{
     if(request.url==='/user/login'||
     request.url==='/user/register'){
        next()
     }else{
        const token = request.headers['token']
        if(!token || token.length ===0){
            response.send(utils.createErrorResult('missing token'))
        }else{
            try{
                const payload = jwt.verify(token,config.secret)

                request.userID = payload['id']
                next()
            }catch(ex){
               response.send(utils.createErrorResult('invalid token')) 
            }
        }
     }
})



const userRouter = require('./routes/user')
app.use('/user',userRouter)
app.listen(4007,'0.0.0.0',()=>{
    console.log('server started on port 4007')
})