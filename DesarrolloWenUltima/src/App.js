// src/App.js

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import AdminInicio from './vista/AdminInicio';
import AdminRegistro from './vista/AdminRegistro'; // Importamos la nueva página de registro

function App() {
  return (
    <Router>
      <div className="">
        <Routes>
          <Route path="/" element={<AdminInicio />} />
          <Route path="/registro" element={<AdminRegistro />} />
          {/* Aquí puedes agregar más rutas según sea necesario */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
