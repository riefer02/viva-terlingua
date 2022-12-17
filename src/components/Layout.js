import React from 'react';
import 'assets/styles/index.scss';

import Header from 'components/Header';
import Footer from 'components/Footer';

const Layout = ({ children }) => {
  const mainStyles =
    'min-h-screen mt-[55px] md:mt-[120px] lg:mt-[2rem] mb-[1rem] md:mb-[5rem] lg:mb-0 text-center';

  return (
    <>
      <Header />
      <main className={mainStyles}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
