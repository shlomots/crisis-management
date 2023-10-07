import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PersonList from './PersonList';
import PersonForm from './PersonForm.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PersonList />} />
        <Route path="/add" element={<PersonForm />} />
        <Route path="/edit/:id" element={<PersonForm />} />
      </Routes>
    </Router>
  );
}

export default App;