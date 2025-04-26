require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db');
const incidentsRoutes = require('./routes/incidents');
const { errorHandler } = require('./middleware/errorHandler');

const app = express();

connectDB();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/incidents', incidentsRoutes);

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});