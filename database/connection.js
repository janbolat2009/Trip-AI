const mongoose = require('mongoose');

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection error:', error.message);
    throw error;
  }
}

module.exports = connectDB;