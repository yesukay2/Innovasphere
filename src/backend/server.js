import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import multer from 'multer';
import path from 'path';
import process from 'process'
import dotenv from 'dotenv'

dotenv.config();
const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.DATABASE_URL);

// Define the Job Schema
const jobSchema = new mongoose.Schema({
  title: String,
  description: String,
});

// Define the Application Schema
const applicationSchema = new mongoose.Schema({
    name: String,
    email: String,
    resume: String, // Path to the uploaded resume file
    coverLetter: String,
    yearsOfExperience: Number,
    ssn: String,
    dateOfBirth: Date,
    idScan: String, // Path to the uploaded ID scan file
    address: String,
    jobId: String,
  });

const Job = mongoose.model('Job', jobSchema);
const Application = mongoose.model('Application', applicationSchema);

// Set up Multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); // Save files to the 'uploads' folder
    },
    filename: (req, file, cb) => {
      const userName = req.body.name.replace(/\s+/g, '-').toLowerCase(); // Replace spaces with hyphens
      const timestamp = Date.now();
      const fileExtension = path.extname(file.originalname); // Get the file extension
      const fileName = `${userName}-${timestamp}${fileExtension}`; // Create a unique filename
      cb(null, fileName);
    },
  });
  
  const upload = multer({ storage });


  app.get('/', (req, res)=>{
    res.json("Backend running perfectly")
  })

// Fetch all jobs
app.get('/api/jobs', async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Fetch a single job
app.get('/api/jobs/:id', async (req, res) => {
    const id = req.params.id;
    try {
      const job = await Job.findOne({jobId : `${id}`});
    if (!job) {
        return res.status(404).json({ message: 'Job not found' });
    }
    return res.json(job);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Submit an application
app.post('/api/apply', upload.fields([
    { name: 'resume', maxCount: 1 },
    { name: 'idScan', maxCount: 1 },
  ]), async (req, res) => {
    try {
      const { name, email, coverLetter, yearsOfExperience, ssn, dateOfBirth, address, jobId } = req.body;
      const resumeFile = req.files['resume'][0];
      const idScanFile = req.files['idScan'][0];
  
      // Create a new application document
      const application = new Application({
        name,
        email,
        resume: resumeFile.path, // Save the file path
        coverLetter,
        yearsOfExperience,
        ssn,
        dateOfBirth,
        idScan: idScanFile.path, // Save the file path
        address,
        jobId,
      });
  
      // Save the application to MongoDB
      await application.save();
  
      res.status(201).json({ message: 'Application submitted successfully!' });
    } catch (error) {
      console.error('Error submitting application:', error);
      res.status(500).json({ message: 'Error submitting application' });
    }
  });

app.listen(port, '0.0.0.0',() => {
  console.log(`Server running on port ${port}`);
});