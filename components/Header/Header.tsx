import React from 'react';

import {
  Container,
  Profile,
  ProfileTitle,
  ProfileSubtitle,
  ProfileText,
  ProfileAvatar,
} from './Header.styles';
import avatar from '../../public/static/img/avatar.jpeg';

const Header: React.FC = () => (
  <Container>
    <Profile>
      <ProfileAvatar src={avatar} alt="My avatar picture" />

      <ProfileTitle>Guilherme Scaldelai</ProfileTitle>
      <ProfileSubtitle>Software engineer @ Tiendeo</ProfileSubtitle>
      <ProfileText>
        In <i className="fas fa-heart profile__icon--heart" /> with
        <i className="fab fa-js profile__icon--js" />
      </ProfileText>
    </Profile>
  </Container>
);

export default Header;
