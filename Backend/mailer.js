const nodemailer = require('nodemailer')
const { subscribe } = require('./routes/user')

async function sendEmail(to,subject,body,callback){
    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user:'deepbachanikar3801@gmail.com',
            pass:'gclc cslc sdvh wogc '
        }
    })

    const result = await  transport.sendMail({
        from: 'deepbachanikar3801@gmail.com',
        to,
        subject,
        html:body,
    })

    callback()
}

module.exports = {
    sendEmail
}





