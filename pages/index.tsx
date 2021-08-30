import Head from 'next/head';
import About from '../components/About';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { Container } from '../layouts/Container/Container';

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
