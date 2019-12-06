import Head from 'next/head';
import About from '../components/About';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import styled from '@emotion/styled';

const Container = styled.div`
  flex-grow: 1;
`;

const Main: React.FC = () => {
  return (
    <>
      <Head>
        <title>Guilherme Scaldelai</title>
      </Head>
      <Navbar />
      <Container>
        <Header />
        <About />
      </Container>
      <Footer />
    </>
  );
};

export default Main;
