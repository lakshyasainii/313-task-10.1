const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = 3001;

const corseOptions = {
    origin: 'http://localhost:3000',
};
app.use(cors(corseOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Created a nodemailer transporter using a free SMTP server (Gmail in this case)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'lakshya4806.be22@chitkara.edu.in',  
        pass: 'uylpixvjjdwfsfjp',     
    },
});

app.post('/', async (req, res) => {
    const email = req.body.email;

    const mailOptions = {
        from: 'lakshya4806.be22@chitkara.edu.in', 
        to: email,
        subject: 'Welcome to Our Newsletter!',
        text: 'Dear subscriber,\n\nThank you for signing up for our newsletter. We are excited to have you on board!\n\nBest regards,\nThe Newsletter Team',
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email');
    }
});

app.listen(PORT, () => {
    console.log(`The Server is running at port ${PORT}!`);
});