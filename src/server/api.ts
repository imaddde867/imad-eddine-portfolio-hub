import express, { Request, Response, RequestHandler } from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3002;

// Validate environment variables
if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
  console.error('Missing required environment variables: GMAIL_USER and GMAIL_APP_PASSWORD');
  process.exit(1);
}

// Enable CORS
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:8080'], // Add both possible Vite dev server URLs
  methods: ['POST'],
  credentials: true
}));

app.use(express.json());

// Create a transporter using Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD
  }
});

// Verify transporter configuration
transporter.verify((error) => {
  if (error) {
    console.error('Error with mail configuration:', error);
  } else {
    console.log('Mail server is ready to send messages');
  }
});

interface SubscribeRequest {
  email: string;
}

interface SubscribeResponse {
  message?: string;
  error?: string;
}

// API endpoint for email subscription
const subscribeHandler: RequestHandler = async (req: Request<{}, {}, SubscribeRequest>, res: Response<SubscribeResponse>) => {
  try {
    const { email } = req.body;

    if (!email) {
      res.status(400).json({ error: 'Email is required' });
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      res.status(400).json({ error: 'Invalid email format' });
      return;
    }

    // Send confirmation email
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Welcome to My Newsletter!',
      html: `
        <h1>Thank you for subscribing!</h1>
        <p>You've successfully subscribed to my newsletter. Stay tuned for updates!</p>
      `
    });

    res.status(200).json({ message: 'Subscription successful' });
  } catch (error) {
    console.error('Subscription error:', error);
    // Provide more specific error messages
    if (error instanceof Error) {
      res.status(500).json({ error: `Failed to process subscription: ${error.message}` });
    } else {
      res.status(500).json({ error: 'Failed to process subscription' });
    }
  }
};

app.post('/api/subscribe', subscribeHandler);

app.listen(port, () => {
  console.log(`API server running at http://localhost:${port}`);
}); 