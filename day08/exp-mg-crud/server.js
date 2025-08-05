// server.js
const express = require('express');
const mongoose = require('mongoose');
const studentRoutes = require('./routes/studentRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/studentDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection failed:', err));

// Routes
app.use('/students', studentRoutes);

// Base route
app.get('/', (req, res) => {
  res.send('🚀 Student API is up and running');
});

app.listen(PORT, () => {
  console.log(`🖥️ Server running on http://localhost:${PORT}`);
});
