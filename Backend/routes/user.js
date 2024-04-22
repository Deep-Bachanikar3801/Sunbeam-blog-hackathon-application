const express = require("express")
const db = require("../db")
const utils = require("../utils")
const crypto = require("crypto-js")
const jwt = require("jsonwebtoken")
const mailer = require('../mailer')
const config = require('../config')
const router = express.Router();

router.post("/register", (request, response) => {
    if(!request.body){
        response.send('error')
    }else{
  const { fullName, email, password, phoneNo } = request.body;
  const encryptPass = String(crypto.SHA256(password))
  const statement = `insert into user(fullName,email,password,phoneNo) values(?,?,?,?);`;
  db.pool.execute(
    statement,
    [fullName, email, encryptPass, phoneNo],
    (error, result) => {
      if (error) {
        response.send(utils.createErrorResult(error));
      } else {
        mailer.sendEmail(
            email,
            'Welcome to Sunbeam Blogs',
            `<h3>hi ${fullName},</h3>
            Thank you for your intrest <br/>
            now you can post your written blogs and also can read the intresting blogs written by pepole all over the world
            Thank you ,
            <br/>
            <h4>team SUNBEAM..</h4>`,
            response.send(utils.createSuccessResult('succesfully registered'))
        )
        
      }
    }
  )
}})

router.post('/login',(request,response)=>{
          const {email,password}=request.body
          const encryptPass = String(crypto.SHA256(password))
          const statement = `select fullName from user where email=? and password= ?`

          db.pool.execute(statement,[email,encryptPass],(error,users)=>{
            if(error){
              response.send(utils.createErrorResult(error))
            }else{
              if(users.length==0){
                response.send(utils.createErrorResult('user not found'))
              }else{
                const user = users[0]
                const payload ={
                  id:user.id
                }
                const token = jwt.sign(payload,config.secret)
                const userdata = {
                  token ,
                  name : user['fullName']
                }
                response.send(utils.createSuccessResult(userdata))
              }
            }
          })
})
module.exports = router;
