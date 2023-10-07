import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PersonForm({ match }) {
  const [person, setPerson] = useState({ name: '', status: '' });

  useEffect(() => {
    if (match.params.id) {
      axios.get(`/api/people/${match.params.id}`).then(response => {
        setPerson(response.data);
      });
    }
  }, [match.params.id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (match.params.id) {
      // Update person
      axios.put(`/api/people/${match.params.id}`, person);
    } else {
      // Add new person
      axios.post('/api/people', person);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        value={person.name}
        onChange={e => setPerson({ ...person, name: e.target.value })}
      />
      <label>Status:</label>
      <input
        value={person.status}
        onChange={e => setPerson({ ...person, status: e.target.value })}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default PersonForm;