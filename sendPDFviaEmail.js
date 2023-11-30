const puppeteer = require('puppeteer');
const nodemailer = require('nodemailer');

class Webpage {
    static async generatePDF(url) {
        const browser = await puppeteer.launch({
            headless: 'new',
            // `headless: true` (default) enables old Headless;
            // `headless: 'new'` enables new Headless;
            // `headless: false` enables “headful” mode.
          }); // Puppeteer can only generate pdf in headless mode.
        const page = await browser.newPage();
        await page.goto(url, { waitUntil: 'networkidle', networkIdleTimeout: 5000 }); // Adjust network idle as required. 
        const pdfConfig = {
            format: 'A4',
            printBackground: true,
            margin: { // Word's default A4 margins
                top: '2.54cm',
                bottom: '2.54cm',
                left: '2.54cm',
                right: '2.54cm'
            }
        };
        await page.emulateMedia('screen');
        const pdf = await page.pdf(pdfConfig); // Return the pdf buffer. Useful for saving the file not to disk. 

        await browser.close();

        return pdf;
    }
}

class Email {
    static sendEmail(to, subject, text, filename, fileContent) {
        const transporter = nodemailer.createTransport({
            host: 'smtp.office365.com',
            port: 587,
            secureConnection: true, // Used for Office 365
            tls: { ciphers: 'SSLv3' }, // Used for Office 365
            auth: {
                user: 'user', // Update username
                pass: 'pass' // Update password
            }
        });

        const mailOptions = {
            from: 'from@email.com', // Update from email
            to: to,
            subject: subject,
            text: text,
            attachments: [{
                filename: filename,
                content: fileContent
            }]
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }

            console.log('Message sent: %s', info.messageId);
        });
    }
}

(async() => {
    const url = 'https://ia601405.us.archive.org/18/items/alicesadventures19033gut/19033-h/19033-h.htm';
    const buffer = await Webpage.generatePDF(url);
    Email.sendEmail(
        'dreamoduceius@gmail.com', // Update to email
        'Alice in Wonderland',
        'I thought you might enjoy this book!',
        'Alice in Wonderland.pdf',
        buffer);
})();