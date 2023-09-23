// db.js
import mongoose from 'mongoose';

const connection = {};

async function connectDB() {
  if (connection.isConnected) {
    // Use existing database connection
    return;
  }

  try {
    const db = await mongoose.connect("mongodb+srv://HiringGenie:Hiring-Genie.web@cluster0.fwyl4ni.mongodb.net/InterioArch?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    connection.isConnected = db.connections[0].readyState;
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

export { connectDB };
