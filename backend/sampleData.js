const mongoose = require('mongoose');
const Product = require('./models/product');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const sampleProducts = [
  {
    name: 'Blue Shirt',
    price: 25.99,
    image: 'uploads/blueshirt.png',
    description: 'Cotton blue shirt',
    category: 'Clothing',
    stock: 10,
  },
  {
    name: 'Headphones',
    price: 99.99,
    image: 'uploads/headphones.png',
    description: 'Noise cancelling headphones',
    category: 'Electronics',
    stock: 5,
  },
  {
    name: 'Denim Coat',
    price: 45.50,
    image: 'uploads/coat.png',
    description: 'Stylish denim coat',
    category: 'Clothing',
    stock: 3,
  },
  {
    name: 'Grey Shirt',
    price: 59.99,
    image: 'uploads/greyshirt.png',
    description: 'Lightweight shirt',
    category: 'Clothing',
    stock: 15,
  },
  {
    name: 'Jacket',
    price: 129.99,
    image: 'uploads/jacket.png',
    description: 'Winter Brown Jacket',
    category: 'Clothing',
    stock: 7,
  },
  {
    name: 'Leather Wallet',
    price: 19.99,
    image: 'uploads/wallet.png',
    description: 'Genuine leather wallet for men',
    category: 'Accessories',
    stock: 25,
  },
  {
    name: 'Kettle',
    price: 29.99,
    image: 'uploads/kettle.png',
    description: 'A smart electric kettle',
    category: 'Kitchen',
    stock: 12,
  },
  {
    name: 'Laptop',
    price: 34.99,
    image: 'uploads/laptop.png',
    description: 'Light grey slim core i7 Laptop',
    category: 'Electronics',
    stock: 9,
  },
  {
    name: 'Redmi Phone',
    price: 14.99,
    image: 'uploads/phone1.png',
    description: 'Smart phone with Big RAM and Goog Camera',
    category: 'Electronics',
    stock: 20,
  },
  {
    name: 'Backpack',
    price: 39.99,
    image: 'uploads/bag.png',
    description: 'Waterproof multipurpose backpack',
    category: 'Bags',
    stock: 11,
  },
 {
    name: 'Huawe Phone',
    price: 14.99,
    image: 'uploads/phone2.png',
    description: 'Smart phone with Big RAM and Goog Camera',
    category: 'Electronics',
    stock: 20,
  },
  {
    name: 'Blue shorts',
    price: 14.99,
    image: 'uploads/shorts.png',
    description: 'Blue denim shorts for summer',
    category: 'Clothing',
    stock: 20,
  },
];


async function seedData() {
  await Product.deleteMany();
  await Product.insertMany(sampleProducts);
  console.log('Sample data inserted');
  process.exit();
}

seedData();
