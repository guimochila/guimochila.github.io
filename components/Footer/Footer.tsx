import React from 'react';
import styled from '@emotion/styled';

const FooterStyled = styled.footer`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-shrink: 0;

  .wrapper {
    display: flex;
    justify-content: center;
    width: 50rem;
    border-top: 1px solid #eee;
    padding: 4rem 4rem;
    align-self: center;
  }

  @media (max-width: 30em) {
    .text {
      font-size: 1.28rem;
    }
  }
  @media (max-width: 23.43em) {
    .footer * {
      font-size: 0.96rem;
    }
  }
  @media (max-width: 30em) {
    .wrapper {
      width: 80%;
    }
  }
`;

const Footer: React.FC = () => (
  <FooterStyled>
    <div className="wrapper">
      <p className="text">&copy; Copyright 2018 Guilherme Scaldelai</p>
      <br />
    </div>
  </FooterStyled>
);

export default Footer;
