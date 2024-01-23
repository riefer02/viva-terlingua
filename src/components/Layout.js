import React from 'react';
import 'assets/styles/index.scss';
import { config } from '@fortawesome/fontawesome-svg-core';
import Header from 'components/Header';
import Footer from 'components/Footer';

config.autoAddCss = false;

const Layout = ({ children }) => {
  return (
    <div className="text-gray-dark">
      <Header />
      <main className="min-h-screen max-w-8xl mx-auto lg:mt-8 px-2 mt-[74px] sm:mt-2">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
