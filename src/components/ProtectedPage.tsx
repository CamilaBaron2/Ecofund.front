// ProtectedPage.tsx

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token'); // Verifica si hay un token en localStorage

    if (!token) {
      // Si no hay token, redirige al login
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div>
      <h1>Página Protegida</h1>
      {/* Aquí va el contenido de tu página protegida */}
    </div>
  );
};

export default ProtectedPage;
