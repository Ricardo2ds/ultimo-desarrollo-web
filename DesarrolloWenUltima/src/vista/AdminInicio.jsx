// src/vista/AdminInicio.jsx

import React from 'react';
import './styleAdminInicio.css';
import logo from '../imagenes/logo.png';
import { Link } from 'react-router-dom'; // Importamos Link para la navegación

const AdminInicio = () => {
    // Definir los enlaces en un arreglo
    const links = [
        { path: "/", name: "Inicio" },
        { path: "/registro", name: "Registro" },
        { path: "/usuarios", name: "Usuarios" }, // Puedes agregar más enlaces
        { path: "/configuraciones", name: "Configuraciones" },
        { path: "/reportes", name: "Reportes" }
    ];

    return (
        <div className="admin-container">
            <header className="admin-header">
                <img src={logo} alt="Logo" className="admin-logo" />
                <h1 className="admin-title">Dashboard</h1>
            </header>
            <div className="admin-body">
                <nav className="admin-nav">
                    <ul>
                        {/* Mapeo dinámico de los enlaces */}
                        {links.map((link, index) => (
                            <li key={index}>
                                <Link to={link.path}>{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <main className="admin-main">
                    {/* Aquí puedes agregar contenido adicional más tarde */}
                </main>
            </div>
            <footer className="admin-footer">
                <p>© 2024 Tu Empresa. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default AdminInicio;
