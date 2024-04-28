const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Firebase Admin SDK
const serviceAccount = require('./serviceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// Define routes and API endpoints

// Coaches
app.get('/api/coaches', async (req, res) => {
  try {
    const coaches = await db.collection('coaches').get();
    const coachesData = coaches.docs.map((doc) => doc.data());
    res.json(coachesData);
  } catch (error) {
    console.error('Error fetching coaches:', error);
    res.status(500).json({ error: 'Failed to fetch coaches' });
  }
});

app.post('/api/coaches', async (req, res) => {
  try {
    const coachData = req.body;
    const docRef = await db.collection('coaches').add(coachData);
    res.json({ id: docRef.id, ...coachData });
  } catch (error) {
    console.error('Error creating coach:', error);
    res.status(500).json({ error: 'Failed to create coach' });
  }
});

// Companies
app.get('/api/companies', async (req, res) => {
  try {
    const companies = await db.collection('companies').get();
    const companiesData = companies.docs.map((doc) => doc.data());
    res.json(companiesData);
  } catch (error) {
    console.error('Error fetching companies:', error);
    res.status(500).json({ error: 'Failed to fetch companies' });
  }
});

app.post('/api/companies', async (req, res) => {
  try {
    const companyData = req.body;
    const docRef = await db.collection('companies').add(companyData);
    res.json({ id: docRef.id, ...companyData });
  } catch (error) {
    console.error('Error creating company:', error);
    res.status(500).json({ error: 'Failed to create company' });
  }
});

// Activities
app.get('/api/activities', async (req, res) => {
  try {
    const activities = await db.collection('activities').get();
    const activitiesData = activities.docs.map((doc) => doc.data());
    res.json(activitiesData);
  } catch (error) {
    console.error('Error fetching activities:', error);
    res.status(500).json({ error: 'Failed to fetch activities' });
  }
});

app.post('/api/activities', async (req, res) => {
  try {
    const activityData = req.body;
    const docRef = await db.collection('activities').add(activityData);
    res.json({ id: docRef.id, ...activityData });
  } catch (error) {
    console.error('Error creating activity:', error);
    res.status(500).json({ error: 'Failed to create activity' });
  }
});

// Courses
app.get('/api/courses', async (req, res) => {
  try {
    const courses = await db.collection('courses').get();
    const coursesData = courses.docs.map((doc) => doc.data());
    res.json(coursesData);
  } catch (error) {
    console.error('Error fetching courses:', error);
    res.status(500).json({ error: 'Failed to fetch courses' });
  }
});

app.post('/api/courses', async (req, res) => {
  try {
    const courseData = req.body;
    const docRef = await db.collection('courses').add(courseData);
    res.json({ id: docRef.id, ...courseData });
  } catch (error) {
    console.error('Error creating course:', error);
    res.status(500).json({ error: 'Failed to create course' });
  }
});

// Add more routes for other operations

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));