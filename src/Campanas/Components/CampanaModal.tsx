import React, { useState } from 'react';

function CampanaModal({ closeModal }) {
  const [campanaData, setCampanaData] = useState({
    titulo: '',
    descripcion: '',
    ubicacion: '',
    fecha: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCampanaData({ ...campanaData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('mailto:ecofund@gmail.com', {
      method: 'POST',
      body: JSON.stringify(campanaData),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      alert('Campaña enviada con éxito');
      closeModal();
    } else {
      alert('Hubo un error al enviar la campaña');
    }
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <label>
          Título:
          <input type="text" name="titulo" value={campanaData.titulo} onChange={handleChange} required />
        </label>
        <label>
          Descripción:
          <textarea name="descripcion" value={campanaData.descripcion} onChange={handleChange} required />
        </label>
        <label>
          Ubicación:
          <input type="text" name="ubicacion" value={campanaData.ubicacion} onChange={handleChange} required />
        </label>
        <label>
          Fecha de Inicio:
          <input type="date" name="fecha" value={campanaData.fecha} onChange={handleChange} required />
        </label>
        <button type="submit">Enviar Campaña</button>
      </form>
      <button onClick={closeModal} className="close-modal">Cerrar</button>
    </div>
  );
}

export default CampanaModal;
