import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PatientComponentPage from './components/PatientComponentPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PatientComponentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
