import nodemailer from 'nodemailer';

const transpotter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,

    }
})

const mailOption = {
    from : 
}


// export default transpotter;