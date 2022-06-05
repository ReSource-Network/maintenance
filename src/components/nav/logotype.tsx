import {
  Hide,
  Image,
  Link,
  Show,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { LOGOTYPE, LOGO_BLACK, LOGO_WHITE } from '../../global/images';

const NavLogotypeButton = () => {
  return (
    <Link
      w={[6, 20, 24, null, 32, null]}
      href='/'
      _active={{ boxShadow: 'none' }}
      _focus={{ boxShadow: 'none' }}
    >
      <Hide below='sm'>
        <Image src={mode(LOGOTYPE.dark, LOGOTYPE.light)} alt={LOGOTYPE.alt} />
      </Hide>
      <Show below='sm'>
        <Image
          boxSize={6}
          src={mode(LOGO_BLACK.imgSrcName, LOGO_WHITE.imgSrcName)}
          alt={LOGOTYPE.alt}
        />
      </Show>
    </Link>
  );
};

export default NavLogotypeButton;
