import React from 'react';
import styled from '@emotion/styled';

const NavBarStyled = styled.nav`
  display: flex;
  justify-content: flex-end;
  padding: 2rem 2rem 0;

  @media (max-width: 30em) {
    flex-wrap: wrap;
    justify-content: center;
  }
  a {
    padding: 0.8rem 1.2rem;

    &:hover,
    &:active {
      color: #666;
    }

    &:last-child {
      position: relative;
      color: #fff;
      transition: all 0.3s ease;

      &:after {
        content: '';
        background-color: #e8c81f;
        position: absolute;
        display: block;
        width: 100%;
        height: 30px;
        left: 0;
        top: 0;
        z-index: -1;
        -webkit-transform: rotate(3deg);
        transform: rotate(3deg);
        transition: all 0.2s ease;
      }

      &:hover:after {
        -webkit-transform: rotate(0) scale(1.2);
        transform: rotate(0) scale(1.2);
      }
    }
  }
`;

const Navbar: React.FC = () => (
  <NavBarStyled>
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
    <a href="https://github.com/guimochila" target="_blank" rel="noreferrer">
      GitHub
    </a>
  </NavBarStyled>
);

export default Navbar;
