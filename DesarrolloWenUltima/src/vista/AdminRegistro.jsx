// src/vista/AdminRegistro.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './styleAdminRegistro.css'; // Importamos el CSS para esta página

const AdminRegistro = () => {
    return (
        <div className="registro-container">
            <h1>Hola Mundo</h1>
            {/* Enlace para volver a la página de inicio */}
            <Link to="/">Volver al Inicio</Link>
        </div>
    );
};

export default AdminRegistro;
