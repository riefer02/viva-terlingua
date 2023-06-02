import React from 'react';
import 'assets/styles/index.scss';

import Header from 'components/Header';
import Footer from 'components/Footer';

const Layout = ({ children }) => {
  return (
    <div className="text-gray-dark">
      <Header />
      <main className="min-h-screen mt-[55px] md:mt-10 lg:mt-[2rem] text-center max-w-8xl mx-auto">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
