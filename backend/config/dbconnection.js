const mongoose = require('mongoose');

// Connection URL
const dbURL = "mongodb://127.0.0.1:27017/Books";

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(dbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit process with failure
  }
};

// Export the connection function
module.exports = connectDB;
