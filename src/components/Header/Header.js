import React from 'react';
import avatar from '../../static/img/avatar.jpeg';

const Header = () => (
  <section className="section-profile">
    <header className="profile">
      <img src={avatar} className="profile__avatar" alt="My avatar picture" />

      <h1 className="profile__title">Guilherme Scaldelai</h1>
      <h2 className="profile__subtitle">Software engineer enthusiast</h2>
      <h3 className="profile__text">
        In <i className="fas fa-heart profile__icon--heart" /> with
        <i className="fab fa-js profile__icon--js" />
      </h3>
    </header>
  </section>
);

export default Header;
