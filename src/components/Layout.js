import React from 'react';
import 'assets/styles/index.scss';
import { config } from '@fortawesome/fontawesome-svg-core';
import Header from 'components/Header';
import Footer from 'components/Footer';
import ClientOnly from '../components/ClientOnly';

config.autoAddCss = false;

const Layout = ({ children }) => {
  return (
    <div className="text-gray-dark">
      <ClientOnly>
        <Header />
      </ClientOnly>
      <main className="min-h-screen max-w-7xl mx-auto xl:mt-0 mt-[64px] sm:mt-0">
        {children}
      </main>
      <ClientOnly>
        <Footer />
      </ClientOnly>
    </div>
  );
};

export default Layout;
