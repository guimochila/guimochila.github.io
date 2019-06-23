import React from 'react';

const Navbar = () => (
  <nav className="main-nav">
    <a href="https://twitter.com/guiscaldelai" target="_blank" rel="noreferrer">
      Twitter
    </a>
    <a
      href="https://www.facebook.com/guilherme.scaldelai"
      target="_blank"
      rel="noreferrer"
    >
      Facebook
    </a>
    <a
      href="https://www.linkedin.com/in/guilhermescaldelai/"
      target="_blank"
      rel="noreferrer"
    >
      LinkedIn
    </a>
    <a
      href="https://github.com/guimochila"
      target="_blank"
      rel="noreferrer"
      className="cta"
    >
      GitHub
    </a>
  </nav>
);

export default Navbar;
