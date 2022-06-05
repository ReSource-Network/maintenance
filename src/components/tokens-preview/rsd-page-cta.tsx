import {
  AspectRatio,
  Button,
  Heading,
  HStack,
  Image,
  Link,
  VStack,
} from '@chakra-ui/react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RSD_HREF } from 'src/global/links';
import { LOGO_PRIMARY } from '../../global/images';

const RsdPageCTA = () => {
  return (
    <VStack spacing={8}>
      <Link href='/rsd' _hover={{ textDecoration: 'none', opacity: 0.67 }}>
        <HStack spacing={6}>
          <AspectRatio w='80px' ratio={1}>
            <Image src={LOGO_PRIMARY.imagePaths['512']} alt='RSD token glyf' />
          </AspectRatio>
          <Heading variant='title'>RSD</Heading>
        </HStack>
      </Link>
      <Button
        as={Link}
        variant='link'
        href={RSD_HREF}
        rightIcon={<FontAwesomeIcon icon={faArrowRight} />}
      >
        Learn more
      </Button>
    </VStack>
  );
};

export default RsdPageCTA;
