import { set } from 'mongoose';
import React, { useState } from 'react';


function AddStudentForm({ onAddStudent }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [marks, setMarks] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && age && marks) {
      onAddStudent({ name, age: parseInt(age), marks: parseInt(marks) });
      setName('');
      setAge('');
      setMarks(''); 

    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="marks"
        value={marks}
        onChange={(e) => setMarks(e.target.value)}
        required
      />
      <button type="submit">Add Student</button>
    </form>
  );
}


export default AddStudentForm;