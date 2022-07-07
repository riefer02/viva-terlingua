import React from 'react';
import PropTypes from 'prop-types';
import 'assets/styles/index.scss';

import Header from 'components/Header';
import Footer from 'components/Footer';

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
