// Project.js
import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  detail: {
    type: String,
    required: true,
  },
  images: [String], // Assuming images are stored as URLs
});

const Project = mongoose.model('Project', projectSchema);

export default Project;
