require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const weightRoutes = require('./routes/weightRoutes');

const PORT = process.env.PORT || 5000;

connectDB();
const app = express();
app.use(cors());
app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));
app.use('/api/weights', weightRoutes);
app.get('/', (_, res) => res.send('Weight tracker API running'));
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));