// express integration mongodb

// ./expresstomogo/express-mongo/sever.js

// Step 1:

// Initialize & Install
// mkdir express-mongo
// cd express-mongo
// npm init -y
// npm install express mongoose

// Step 2: Create server.js

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// 1️⃣ Middleware to parse JSON bodies
app.use(express.json());

// 2️⃣ MongoDB connection URI
const mongoURI = 'mongodb://localhost:27017/studentDB';
// (Or your Atlas URI: 'mongodb+srv://<user>:<pass>@cluster0.mongodb.net/studentDB?retryWrites=true&w=majority')

// 3️⃣ Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => {
  console.error('❌ MongoDB connection error:', err);
  process.exit(1);
});

// 4️⃣ Define a simple Mongoose model
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  course: String
});
const Student = mongoose.model('Student', studentSchema);

// 5️⃣ Health‐check route
app.get('/', (req, res) => {
  res.send('🚀 Server is up and MongoDB is connected!');
});

// 6️⃣ Sample CRUD endpoint: Create a student
app.post('/students', async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 7️⃣ Start the server
app.listen(PORT, () => {
  console.log(`🖥️  Server running on http://localhost:${PORT}`);
});

// Step 3: Run the program
// node server.js

// Step 4: 
// Visit http://localhost:3000/ → should see “🚀 Server is up and MongoDB is connected!”

// Step 5:
// Test the POST endpoint with a tool like Postman

// POST http://localhost:3000/students \ 
// {"name":"Frank","age":24,"course":"Physics"}
