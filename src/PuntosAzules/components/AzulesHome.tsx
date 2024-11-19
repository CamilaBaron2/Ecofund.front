import React, { useState, useEffect } from 'react';
import AzulesList from './AzulesList.tsx';
import AzulesMapa from './AzulesMapa.tsx';
import './Azules.css';

const AzulesHome: React.FC = () => {
  const [campanas, setCampanas] = useState<any[]>([]);

  useEffect(() => {
    const fetchCampanas = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/API/puntos-azules/procesar');
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
    <div className="Azules-home">
      <div className="main-content">
        <div className="left-column">
          <AzulesList campanas={campanas} />
        </div>

        <div className="right-column">
          <AzulesMapa campanas={campanas} />
        </div>
      </div>
    </div>
  );
};

export default AzulesHome;
