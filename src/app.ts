import express from 'express';
import { Application, Request, Response } from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import router from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';

import { ZodError } from 'zod';

const app: Application = express();

// parsers
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [
      'http://localhost:3000',
      'http://localhost:3001',
      'http://localhost:5173',
      'http://localhost:5174',
      'http://localhost:5000',
    ],
    credentials: true,
  }),
);
app.use(bodyParser.json());

// Application routes
app.use('/api', router);

// ✅ Contact Form Route (no extra file/folder)
app.post('/api/contact', async (req: Request, res: Response) => {
  const { name, email, phone, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Contact Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: 'Message sent successfully!',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message.',
    });
  }
});

app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Server is running......',
  });
});

// Error Handler

app.use(globalErrorHandler);
app.use(notFound);
export default app;
