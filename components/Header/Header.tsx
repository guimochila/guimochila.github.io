import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';
import avatar from '../../public/static/img/avatar.jpeg';

const heartBeats = keyframes`
  to {
      transform: scale(1.1);
    }
`;

const HeaderStyled = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  @media (max-width: 30em) {
    margin-top: 2rem;
  }

  .profile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 4rem 0;
    border-bottom: 0.1rem solid #eee;
    padding-bottom: 2.5rem;
  }
  .profile__avatar {
    height: 10rem;
    width: 10rem;
    border-radius: 50%;
    margin-bottom: 2rem;
    -webkit-filter: grayscale(80%);
    filter: grayscale(80%);
    transition: -webkit-transform 600ms ease-in;
    transition: transform 600ms ease-in;
    transition: transform 600ms ease-in, -webkit-transform 600ms ease-in;
  }
  .profile__avatar:hover {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
  .profile__title {
    font-weight: 900;
    letter-spacing: -2px;
    font-size: 4.8rem;
    color: #333;
  }
  @media (max-width: 30em) {
    .profile__title {
      font-size: 3.2rem;
    }
  }
  .profile__subtitle {
    margin-top: 2rem;
    letter-spacing: 0.4rem;
  }
  @media (max-width: 30em) {
    .profile__subtitle {
      font-size: 1.6rem;
    }
  }
  .profile__text {
    margin-top: 1.5rem;
    letter-spacing: 0.2rem;
  }
  .profile__icon--heart {
    color: #e01212;
    font-size: 2.4rem;
    animation: ${heartBeats} 500ms linear infinite alternate;
    transform-origin: center;
  }
  .profile__icon--js {
    color: #e8c81e;
    font-size: 2.4rem;
  }
`;

const Header: React.FC = () => (
  <HeaderStyled>
    <header className="profile">
      <img src={avatar} className="profile__avatar" alt="My avatar picture" />

      <h1 className="profile__title">Guilherme Scaldelai</h1>
      <h2 className="profile__subtitle">Software engineer @ Tiendeo</h2>
      <h3 className="profile__text">
        In <i className="fas fa-heart profile__icon--heart" /> with
        <i className="fab fa-js profile__icon--js" />
      </h3>
    </header>
  </HeaderStyled>
);

export default Header;
