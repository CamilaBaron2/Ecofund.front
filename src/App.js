// App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/index.tsx';
import Campanas from './Campanas/index.tsx';
import Reciclaje from './Reciclaje/index.tsx';
import PuntosAzules from './PuntosAzules/index.tsx';
import Login from './components/Auth/Login.tsx';
import Registro from './components/Auth/Registro.tsx';
import Layout from './components/Layout.tsx'; // Importa el Layout
import PrivateRoute from './components/PrivateRoute.tsx';
import './App.css'; // Asegúrate de que estás importando los estilos

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Ruta para Login y Registro sin Layout (sin Header y Footer) */}
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registro />} />

        {/* Rutas que utilizan el Layout con Header y Footer */}
        <Route element={<Layout />}>
          {/* Rutas protegidas */}
          <Route element={<PrivateRoute />}>
            <Route path="/inicio" element={<Home />} />
            <Route path="/campanas" element={<Campanas />} />
            <Route path="/reciclaje" element={<Reciclaje />} />
            <Route path="/puntos-azules" element={<PuntosAzules />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;


