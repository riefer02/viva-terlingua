import React from "react";

import Container from "components/Container";

const Footer = () => {
  return (
    <footer className="footer py-8 h-full mt-3">
      <Container>
        <div className="footer__content gap-2 md:gap-6 lg:gap-10 items-center h-full">
          <div className="footer__copyright text-2xl lg:text-3xl text-secondary">
            &copy; {new Date().getFullYear()}, Viva Terlingua!
          </div>
          <div className="text-2xl lg:text-3xl">Contact Us: <span className="text-primary">abowlofred@gmail.com</span></div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
