import React, { useState, useEffect } from 'react';
import ReciclajeList from './ReciclajeList.tsx';
import ReciclajeMapa from './ReciclajeMapa.tsx';
import './Reciclaje.css';

const ReciclajeHome: React.FC = () => {
  const [campanas, setCampanas] = useState([]);  // No usamos tipos explícitos

  useEffect(() => {
    const fetchCampanas = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/API/reciclajes/procesar');
        const data = await response.json();
        
        if (data && data.data) {
          setCampanas(data.data);  // Asignamos el array de campañas a nuestro estado
        }
      } catch (error) {
        console.error('Error fetching campaigns:', error);
      }
    };

    fetchCampanas();
  }, []);

  return (
    <div className="reciclaje-home">
      <div className="main-content">
        <div className="left-column">
          <ReciclajeList campanas={campanas} />
        </div>

        <div className="right-column">
          <ReciclajeMapa campanas={campanas} />
        </div>
      </div>
    </div>
  );
};

export default ReciclajeHome;



