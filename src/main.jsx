import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage.jsx';
import Lab09App from './lab09/App.jsx';
import Lab02App from './lab02/Lab02App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/lab02" element={<Lab02App />} />
        <Route path="/lab09" element={<Lab09App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
