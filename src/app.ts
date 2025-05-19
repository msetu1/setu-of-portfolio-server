import express from 'express';
import { Application, Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

const app: Application = express();

// parsers
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [
      'http://localhost:5173',
      'http://localhost:5174',
      'http://localhost:3000',
    ],
    credentials: true,
  }),
);
app.use(bodyParser.json());

// Application routes
// app.use('/api');

app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Server is running......',
  });
});

// Error Handler

export default app;
