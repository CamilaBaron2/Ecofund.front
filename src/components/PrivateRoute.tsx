import React, { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom'; // Importa Outlet

const PrivateRoute = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token'); // Verificar si hay token
    if (!token) {
      navigate('/'); // Redirigir a login si no hay token
    }
  }, [navigate]);

  return <Outlet />;  // Esto renderiza las rutas hijas
};

export default PrivateRoute;


