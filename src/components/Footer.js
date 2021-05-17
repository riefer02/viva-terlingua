import React from "react";

import Container from "components/Container";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__content">
          <div className="footer__copyright">
            &copy; {new Date().getFullYear()}, Viva Terlingua!
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
