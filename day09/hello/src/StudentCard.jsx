import React from 'react';
import './StudentCard.css';

function StudentCard({ student }) {
  const status = student.marks >= 50 ? 'Passed' : 'Failed';
  const statusClass = status === 'Passed' ? 'status-passed' : 'status-failed';

  return (
    <div className="card">
      <h3>{student.name}</h3>
      <p>Age: {student.age}</p>
      <p>Marks: {student.marks}</p>
      <p className={statusClass}>Status: {status}</p>
    </div>
  );
}

export default StudentCard;
