import React from 'react';
import 'assets/styles/index.scss';

import Header from 'components/Header';
import Footer from 'components/Footer';

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
