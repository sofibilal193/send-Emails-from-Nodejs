var nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port:587,
    secure:false,
    requireTLS:true,
    auth:{
        user:'sofibilal193@gmail.com',
        pass:"Bas@3313"
    }
});

var mailOptions = {
    from:"sofibilal193@gmail.com",
    to:"sofibilal193@gmail.com",
    subject:"youtubetutorial",
    text:"Hello from youtube"
}
transporter.sendMail(mailOptions, function(err,info){
    if(err) {
        console.log('error')
    }
    else {
        console.log('Email Has Been Sent',info.respond);
    }
});




