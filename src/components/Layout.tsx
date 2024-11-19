import React from 'react';
import Header from './Header.tsx';
import Footer from './Footer.tsx';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="layout-container">
      <Header />
      <main>
        {/* Aquí se renderizarán los componentes de las páginas dependiendo de la ruta */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

