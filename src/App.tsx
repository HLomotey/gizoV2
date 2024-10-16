import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import InventoryPage from './pages/Inventory';
import ExcelUploadPage from './pages/ExcelUploadPage';
import ConfigurationPage from './pages/Configuration';
import RegistrationPage from './pages/Registration';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/inventory/*" element={<InventoryPage />} />
            <Route path="/excel-upload" element={<ExcelUploadPage />} />
            <Route path="/configuration/*" element={<ConfigurationPage />} />
            <Route path="/registration/*" element={<RegistrationPage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;