import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { Wrapper } from './Wrapper';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Guilherme Scaldelai</title>
      </Head>
      <Navbar />
      <Wrapper>
        <Header />
        {children}
      </Wrapper>
      <Footer />
    </>
  );
};

export default Layout;
