import React, { useState } from 'react';
import StudentList from './StudentList';
import AddStudentForm from './AddStudentForm';


function App() {
  const [students, setStudents] = useState([
    { id: 1, name: 'chikni', age: 21 , marks: 75 },
    { id: 2, name: 'chameli', age: 22, marks: 45 },
    { id: 3, name: 'gudiya', age: 20, marks: 60 },
    { id: 4, name: 'bholi', age: 23, marks: 55 }
  ]);


  const addStudent = (newStudent) => {
    setStudents([...students, { ...newStudent, id: students.length + 1 }]);
    console.log('New student added:', newStudent);
    // new student should be added to the list
    // and the form should be reset
  };


  return (
    <div>
      <h1>Student Management System</h1>
      <AddStudentForm onAddStudent={addStudent} />
      <StudentList students={students} />
    </div>
  );
}


export default App;
