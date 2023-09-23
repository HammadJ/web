// pages/api/projects.js

import { connectDB } from '../../Database/db';
import Project from '../../model/Project';

export default async (req, res) => {
  // Establish a database connection
  await connectDB();

  // Handle API requests here
  if (req.method === 'GET') {
    // Handle GET request (e.g., fetch projects)
    try {
      const projects = await Project.find();
      res.status(200).json({ projects });
    } catch (error) {
      res.status(500).json({ error: 'Error fetching projects' });
    }
  } else if (req.method === 'POST') {
    // Handle POST request (e.g., create a project)
    const { name, category, detail, images } = req.body;

    const newProject = new Project({
      name,
      category,
      detail,
      images,
    });

    try {
      const savedProject = await newProject.save();
      res.status(201).json({ project: savedProject });
    } catch (error) {
      res.status(500).json({ error: 'Error creating project' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
