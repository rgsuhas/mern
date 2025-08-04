const mongoose = require('mongoose');

// Replace this with your actual connection string
const mongoURI = 'mongodb://localhost:27017/student'; // for local MongoDB
// Example Atlas URI: 'mongodb+srv://username:password@cluster0.mongodb.net/mydatabase?retryWrites=true&w=majority'

async function connectToMongoDB() {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('✅ Connected to MongoDB successfully');
  } catch (error) {
    console.error('❌ Error connecting to MongoDB:', error);
  }
}

connectToMongoDB();


// Step 2: Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('✅ Connected to MongoDB');
})
.catch((err) => {
  console.error('❌ Connection failed:', err);
});

// Step 3: Define a Schema
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  course: String
});

// Step 4: Create a Model (Collection name will be pluralized → students)
const Student = mongoose.model('Student', studentSchema);

// Step 5: Insert a sample document (This will create the DB and collection)
const newStudent = new Student({
  name: 'Alice',
  age: 22,
  course: 'Computer Science'
});

newStudent.save()
  .then(() => console.log('🎉 Student record inserted, DB created'))
  .catch((err) => console.error('❌ Insert failed:', err));





module.exports = connectToMongoDB;