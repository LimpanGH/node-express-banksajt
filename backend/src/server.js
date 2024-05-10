import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());



// Generera engångslösenord
function generateOTP() {
    // Generera en sexsiffrig numerisk OTP
    const otp = Math.floor(100000 + Math.random() * 900000);
    return otp.toString();
}

// Din kod här. Skriv dina arrayer


// Logga ut data
function logCurrentData() {
    console.log('Users:', users);
    console.log('Accounts:', accounts);
    console.log('Sessions:', sessions);
   
}

// Din kod här. Skriv dina routes:


// Starta servern
app.listen(port, () => {
    console.log(`Bankens backend körs på http://localhost:${port}`);
});
