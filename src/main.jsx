import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Homepage from './Homepage.jsx';
import Lab02App from './lab02/Lab02App';
import Lab03App from './lab03/Lab03App';
import Lab04App from './lab04/Lab04App';
import Lab05App from './lab05/Lab05App';
import Lab06App from './lab06/Lab06App';
import Lab07App from './lab07/Lab07App';
import Lab08App from './lab08/Lab08App';
import Lab09App from './lab09/Lab09App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/lab02" element={<Lab02App />} />
        <Route path="/lab03" element={<Lab03App />} />
        <Route path="/lab04" element={<Lab04App />} />
        <Route path="/lab05" element={<Lab05App />} />
        <Route path="/lab06" element={<Lab06App />} />
        <Route path="/lab07" element={<Lab07App />} />
        <Route path="/lab08" element={<Lab08App />} />
        <Route path="/lab09" element={<Lab09App />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
