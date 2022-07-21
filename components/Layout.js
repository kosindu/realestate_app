import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Real Estate</title>
    </Head>
    <Box bg="green.50">
      <header>
        <Navbar />
      </header>
      <Box maxWidth="1280px" m="auto">
        <main>{children}</main>
      </Box>
      <footer>
        <Footer />
      </footer>
    </Box>
  </>
);

export default Layout;
