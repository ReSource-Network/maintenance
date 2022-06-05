import NavCTAButtons from '@/components/nav/buttons';
import LanguagesButton from '@/components/nav/languages-button';
import NavLogotypeButton from '@/components/nav/logotype';
import NavMenu from '@/components/nav/menu';
import NavPageLinks from '@/components/nav/page-links';
import ThemeButton from '@/components/theme-button';
import { ButtonGroup, HStack, Spacer } from '@chakra-ui/react';

const Header = () => {
  return (
    <HStack
      zIndex='docked'
      position='fixed'
      top={0}
      w='full'
      py={[2.5, null, 3, null, 3.5, null]}
      px={[3, null, 4, null, 5, null]}
      bgColor='purpleAlpha.100'
      backdropFilter='blur(8px)'
      spacing={[2, 3, 4, 5, 6, 7]}
    >
      <NavLogotypeButton />
      <NavPageLinks />
      <Spacer />
      <NavMenu />
      <NavCTAButtons />
      <ButtonGroup>
        <ThemeButton />
        <LanguagesButton />
      </ButtonGroup>
    </HStack>
  );
};

export default Header;
