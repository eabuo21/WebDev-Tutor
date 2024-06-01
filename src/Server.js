// server.js
const express = require('express');
const bodyParser = require('body-parser');
const flutterwave = require('flutterwave-node-v3');

const app = express();
const port = 5000;

// Initialize Flutterwave
const flutterwaveCredentials = {
  publicKey: 'YOUR_PUBLIC_KEY',
  secretKey: 'YOUR_SECRET_KEY',
  encryptionKey: 'YOUR_ENCRYPTION_KEY'
};
const flutterwaveInstance = new flutterwave(flutterwaveCredentials);

app.use(bodyParser.json());

// Payment route
app.post('/api/pay', async (req, res) => {
  try {
    const { totalAmount } = req.body;

    const payload = {
      tx_ref: 'unique-transaction-reference',
      amount: totalAmount,
      currency: 'NGN', // Change to your currency
      redirect_url: 'http://yourwebsite.com/payment/callback', // Change to your callback URL
      payment_options: 'card, banktransfer, ussd', // Payment options available
      customer: {
        email: 'customer@example.com', // Customer email
        phonenumber: '08123456789', // Customer phone number
        name: 'John Doe' // Customer name
      },
      customizations: {
        title: 'Booking Payment',
        description: 'Payment for booking',
        logo: 'https://yourwebsite.com/logo.png' // Your logo
      }
    };

    const response = await flutterwaveInstance.Payment.initialize(payload);
    res.json({ redirectUrl: response.data.link });
  } catch (error) {
    console.error('Error processing payment:', error);
    res.status(500).json({ error: 'Error processing payment' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
