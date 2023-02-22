var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'navuk95@gmail.com',
        pass:''//password
    }

});

var mailOptions = {
    from:'navuk95@gmail.com',
    to:'balkarrandhawa13@gmail.com',
    subject:'Sending for testing nodejs',
    text:'Hi balkar paji how are you doing?'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    }
    else{
        console.log('email sent: '+info.response);
    }
});