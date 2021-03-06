import React from "react";
import PropTypes from "prop-types";

const Container = ({ children }) => {
  return <div className="container section mx-auto">{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
