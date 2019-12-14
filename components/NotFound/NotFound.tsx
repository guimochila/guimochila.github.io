import React from 'react';
import styled from '@emotion/styled';
import Head from 'next/head';

const NotFoundStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 2rem;

  img {
    margin: 4rem;
  }

  p {
    margin: 4rem 0;
  }

  @media (max-width: 30em) {
    flex-wrap: wrap;

    h1 {
      font-size: 2rem;
    }
    img {
      width: 100%;
      margin: 0 0 4rem 0;
    }
  }
`;

const NotFound: React.FC = () => {
  return (
    <>
      <Head>
        <title>Guilherme Scaldelai | 404 - Not found.</title>
      </Head>
      <NotFoundStyled>
        <img
          src="https://media.giphy.com/media/tvGOBZKNEX0ac/giphy.gif"
          alt="Not found."
        />
        <h1>Oops! Page not found! 😱</h1>
        <p>Please check if the URL is correct.</p>
      </NotFoundStyled>
    </>
  );
};

export default NotFound;
