import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PatientComponentPage from './components/PatientComponentPage';
import ClinicalDashboard from './components/ClinicalDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PatientComponentPage />} />
        <Route path="/clinic" element={<ClinicalDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
