import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PatientComponentPage from './components/PatientComponentPage';
import ClinicalDashboard from './components/ClinicalDashboard';
import SuperAdminDashboard from './components/SuperAdminDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PatientComponentPage />} />
        <Route path="/clinic" element={<ClinicalDashboard />} />
        <Route path="/admin" element={<SuperAdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
