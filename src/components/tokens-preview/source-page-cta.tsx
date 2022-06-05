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
import { SOURCE_HREF } from 'src/global/links';
import { SOURCE_INVERSE } from '../../global/images';

const SOURCEPageCTA = () => {
  return (
    <VStack spacing={8}>
      <Link href='/source' _hover={{ textDecoration: 'none', opacity: 0.67 }}>
        <HStack spacing={6}>
          <AspectRatio w='80px' ratio={1}>
            <Image
              src={SOURCE_INVERSE.imagePaths['512']}
              alt='SOURCE token glyf'
            />
          </AspectRatio>
          <Heading variant='title'>SOURCE</Heading>
        </HStack>
      </Link>
      <Button
        as={Link}
        variant='link'
        href={SOURCE_HREF}
        rightIcon={<FontAwesomeIcon icon={faArrowRight} />}
      >
        Learn more
      </Button>
    </VStack>
  );
};

export default SOURCEPageCTA;
