const puppeteer = require('puppeteer');
const nodemailer = require('nodemailer');
const pdfbuffer = (async () => {
    const browser = await puppeteer.launch({
        headless: 'new',
        // `headless: true` (default) enables old Headless;
        // `headless: 'new'` enables new Headless;
        // `headless: false` enables “headful” mode.
    });
    const page = await browser.newPage();
    // const newWindow = window.open('', '_blank');
    // newWindow.document.write(`
    // <!DOCTYPE html>
    // <html>
    //     <head>
    //     <title>Colored Table</title>
    //     <style>
    //         table {
    //         border-collapse: collapse;
    //         }
    //         td {
    //         text-align: center;
    //         }
    //     </style>
    //     </head>
    //     <body>
    //     <h1>
    //         <Center>Personal Instinct</Center>
    //     </h1>  
    //     <center>Hello world</center>
    //     <button onclick="callFunctionAndClose()">Click Me</button>
    //     <script>
    //         function callFunctionAndClose() {
    //             alert("hello");
    //             // Call the function from the parent window
    //             //window.opener.handleButtonClick();
    //             // Close the current window
    //             window.close();
    //         }
    //     </script>
    //     </body>
    // </html>
    // `);
    // newWindow.document.close();
    await page.goto('https://chat.openai.com');
    //    await page.screenshot({ path: 'example.png' });
    const pdfbuffer = await page.pdf({
        path: 'example.pdf', // Save the PDF to the disk
        format: 'A4', // Set the paper format
        printBackground: true, // Print the background graphics
        margin: { // Set the paper margins
            top: '1cm',
            bottom: '1cm',
            left: '1cm',
            right: '1cm'
        }
    });
    // const pdfConfig = {
    //     format: 'A4',
    //     printBackground: true,
    //     margin: { // Word's default A4 margins
    //         top: '2.54cm',
    //         bottom: '2.54cm',
    //         left: '2.54cm',
    //         right: '2.54cm'
    //     }
    // };
    // await page.emulateMediaType('screen');
    // const pdf = await page.pdf(pdfConfig); // Return the pdf buffer. Useful for saving the file not to disk. 

    await browser.close();
    // print(pdf);
    // return pdf;
})();

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

(async () => {
    const url = 'https://ia601405.us.archive.org/18/items/alicesadventures19033gut/19033-h/19033-h.htm';
    const buffer = pdfbuffer;
    Email.sendEmail(
        'dreamoduceius@gmail.com', // Update to email
        'Alice in Wonderland',
        'I thought you might enjoy this book!',
        'Alice in Wonderland.pdf',
        buffer);
})();