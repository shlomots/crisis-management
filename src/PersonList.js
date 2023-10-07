import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PersonList() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios.get('/api/people').then(response => {
      setPeople(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Reported People</h1>
      {/* Render people list */}
      {people.map(person => (
        <div key={person.id}>
          <h2>{person.name}</h2>
          <p>{person.status}</p>
          {/* Add links for Edit and Delete */}
        </div>
      ))}
      <button>Add New Person</button>
    </div>
  );
}

export default PersonList;