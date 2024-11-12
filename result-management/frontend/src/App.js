import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [studentID, setStudentID] = useState('');
  const [results, setResults] = useState([]);

  const fetchResults = () => {
    axios.get(`http://localhost:5000/results/${studentID}`)
      .then((res) => setResults(res.data))
      .catch(() => setResults([]));
  };

  return (
    <div>
      <h1>Result Management</h1>
      <input type="text" value={studentID} onChange={(e) => setStudentID(e.target.value)} placeholder="Enter Student ID" />
      <button onClick={fetchResults}>Get Results</button>
      <ul>
        {results.map((result, index) => (
          <li key={index}>
            <p><strong>Subject:</strong> {result.subject}</p>
            <p><strong>Marks:</strong> {result.marks}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
