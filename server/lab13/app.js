import express from 'express';
import cors from 'cors';
import calculatorRouter from './routes/calculator.js';

const app = express();

// Enable CORS so frontend like React can use it
app.use(cors());

// Middleware to parse incoming JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mount the calculator router
app.use('/', calculatorRouter);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
