import React from 'react';

import Container from 'components/Container';

const Footer = () => {
  return (
    <footer className="footer py-8">
      <Container>
        <div className="flex flex-col items-center gap-2 h-full">
          <div className="flex gap-8">
            <div className="text-2xl">
              &copy; {new Date().getFullYear()}, Viva Terlingua! | Contact Us:{' '}
              <span className="text-primary">abowlofred@gmail.com</span>
            </div>
          </div>
          <div className="text-lg">Website by Rief Productions LLC</div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
