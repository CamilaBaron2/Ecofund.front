import React, { useState } from 'react';
import CampanaList from './CampanaList.tsx';
import CampanaImages from './CampanaImages.tsx';
import CampanaModal from './CampanaModal.tsx';
import './Campana.css'

function CampanaHome() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="campana-home">
      <div className="header">
        <button onClick={toggleModal} className="btn-agregar">
          Agregar Campaña
        </button>
      </div>
      
      <div className="main-content">
        <div className="left-column">
          <CampanaList/>
        </div>
        
        <div className="right-column">
          <CampanaImages />
        </div>
      </div>
      
      {isModalOpen && <CampanaModal closeModal={toggleModal} />}
    </div>
  );
}

export default CampanaHome;



