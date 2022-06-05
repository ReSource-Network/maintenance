import Footer from '@/components/footer';
import { Box, useColorModeValue as mode } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { BACKGROUND } from '../../global/images';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <>
    <Box zIndex={1} as='main' bgImage={mode(BACKGROUND.light, BACKGROUND.dark)}>
      {children}
    </Box>
    <Footer />
  </>
);

export default Layout;
