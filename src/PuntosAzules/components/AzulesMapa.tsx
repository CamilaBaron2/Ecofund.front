import React from 'react';

const AzulesMapa = ({ campanas }: { campanas: any[] }) => {
  return (
    <div className="map-container" style={{ position: 'relative', width: '100%', height: '1000px' }}>
      {/* Imagen de fondo */}
      <img className="mapa"
        src="/images/mapa.jpg"
        alt="Mapa de Azules"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />

      {/* Puntos debajo de la imagen del mapa */}
      <div className="puntos-container" style={{
        position: 'absolute',
        bottom: '20px', // Espacio debajo del mapa
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '10px', // Espacio entre los puntos
      }}>
        {campanas.map((campana, index) => (
          <div
            key={index}
            style={{
              width: '40px',  // Tamaño del punto
              height: '40px',
              backgroundColor: 'blue',  // Color azul para el punto
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'center', // Centrar el contenido horizontalmente
              alignItems: 'center',  // Centrar el contenido verticalmente
            }}
            onClick={() => {
              // Redirige al usuario a la URL de Google Maps proporcionada en la campaña
              if (campana.ubicacion) {
                window.open(campana.ubicacion, '_blank');
              } else {
                console.error('Ubicación no disponible para esta campaña');
              }
            }}
          >
            {/* Número en el centro del punto */}
            <div style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: '14px', // Ajustar tamaño de fuente
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              {index + 1} {/* El número de la campaña */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AzulesMapa;
