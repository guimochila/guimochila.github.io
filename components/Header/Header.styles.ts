import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

const heartBeats = keyframes`
  to {
      transform: scale(1.1);
    }
`;

export const Container = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  @media (max-width: 30em) {
    margin-top: 2rem;
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

export const Profile = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 4rem 0;
  border-bottom: 0.1rem solid #eee;
  padding-bottom: 2.5rem;
`;

export const ProfileAvatar = styled.img`
  height: 10rem;
  width: 10rem;
  border-radius: 50%;
  margin-bottom: 2rem;
  -webkit-filter: grayscale(80%);
  filter: grayscale(80%);
  transition: -webkit-transform 600ms ease-in;
  transition: transform 600ms ease-in;
  transition: transform 600ms ease-in, -webkit-transform 600ms ease-in;

  &:hover {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

export const ProfileTitle = styled.h1`
  font-weight: 900;
  letter-spacing: -2px;
  font-size: 4.8rem;
  color: #333;

  @media (max-width: 30em) {
    font-size: 3.2rem;
  }
`;

export const ProfileSubtitle = styled.h2`
  margin-top: 2rem;
  letter-spacing: 0.4rem;

  @media (max-width: 30em) {
    font-size: 1.6rem;
  }
`;

export const ProfileText = styled.h3`
  margin-top: 1.5rem;
  letter-spacing: 0.2rem;
`;
