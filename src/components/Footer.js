import React from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";
import Container from "components/Container";

const Footer = () => {
  const location = useLocation();
  const locationPortal = location.pathname.includes("/portal") ? true : false;

  return (
    <footer className="footer">
      <Container>
        <div className="footer__content">
          <div className="footer__copyright">
            &copy; {new Date().getFullYear()}, Viva Terlingua!
          </div>
          {!locationPortal && (
            <button className="footer__portal">
              <Link to="/portal/login">Portal</Link>
            </button>
          )}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
