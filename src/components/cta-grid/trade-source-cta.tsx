import {
  Button,
  ButtonGroup,
  Flex,
  Image,
  Link,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { TRADE_SOURCE_IMAGE_LINKS } from 'src/global/copy';

const imageLinks = TRADE_SOURCE_IMAGE_LINKS;

const TradeSourceCta = () => (
  <Flex direction='row'>
    <ButtonGroup variant='ghost' spacing={0} size='xs'>
      {imageLinks.map((link) => (
        <Button
          as={Link}
          key={link.cta.title}
          href={link.cta.href}
          _hover={{ opacity: '0.5' }}
          isExternal={true}
        >
          <Image
            boxSize={['18px', '24px', '32px', '36px', '40px']}
            src={mode(link.image.light, link.image.dark)}
            alt={link.image.alt}
          />
        </Button>
      ))}
    </ButtonGroup>
  </Flex>
);

export default TradeSourceCta;
