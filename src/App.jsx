import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import CursosPage from './pages/CursosPage';
import ServiciosPage from './pages/ServiciosPage';
import TrayectoriaPage from './pages/TrayectoriaPage';
import ContactoPage from './pages/ContactoPage';
import './App.css';

function App() {
  return (
    <Router>
      <Analytics />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="cursos" element={<CursosPage />} />
          <Route path="servicios" element={<ServiciosPage />} />
          <Route path="trayectoria" element={<TrayectoriaPage />} />
          <Route path="contacto" element={<ContactoPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
