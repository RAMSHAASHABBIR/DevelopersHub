const path = require('path');           // ✅ Load path
const dotenv = require('dotenv');       // ✅ Load environment variables

// ✅ Force-load the .env file and log the result
const envPath = path.resolve(__dirname, '.env');
console.log('Loading env from:', envPath);
const result = dotenv.config({ path: envPath });

if (result.error) {
  console.error('Dotenv failed to load:', result.error);  
} else {
  console.log('Dotenv loaded:', result.parsed);  
}

// ✅ Now require other modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./Routes/productRoute');
const connectDB = require('./config/db');  
const authRoutes = require('./Routes/authRoute');
const cartRoutes = require('./Routes/cartRoutes');

// ✅ Connect to MongoDB
connectDB();

// ✅ Rest of your app setup
const app = express();
app.use(cors());
app.use(express.json());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/cart', cartRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
