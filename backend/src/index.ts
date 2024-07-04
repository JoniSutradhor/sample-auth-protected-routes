import express from 'express';
import logger from './middlewares/logger';
import mongoose from 'mongoose';
import authRoutes from './routes/auth';
import productRoutes from './routes/products';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;
const mongoUrl = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/elo-be-db';

app.use(cors({ origin: 'http://localhost:3001' }));
app.use(express.json());
app.use(logger);


app.get('/', (req, res) => {
  res.send('Health Check Passed!');
});

mongoose.connect(mongoUrl).then(() => {
    console.log('Connected to MongoDB');
  }).catch((error) => {
    console.error('Error connecting to MongoDB', error);
  });

app.use('/auth', authRoutes);

app.use('/products', productRoutes);


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


