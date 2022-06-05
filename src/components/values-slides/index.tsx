import {
  AspectRatio,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  useColorModeValue as mode,
  VStack,
} from '@chakra-ui/react';
import {
  faArrowLeft,
  faArrowRight,
  faSpa,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import {
  CONTENT_MAX_WIDTH,
  CONTENT_PX,
  CONTENT_PY,
} from '../../global/constants';
import { ValuesSlidesProps } from '../../global/types';

const ValuesSlides = ({ slides }: ValuesSlidesProps) => {
  const [page, setPage] = useState(0);

  const incrementPage = () => {
    page < slides.length - 1 ? setPage(page + 1) : setPage(0);
  };
  const decrementPage = () => {
    page > 0 ? setPage(page - 1) : setPage(slides.length - 1);
  };

  return (
    <Flex
      my={CONTENT_PY}
      mx={CONTENT_PX}
      p={[4, null, 5, null, 6]}
      maxW={CONTENT_MAX_WIDTH}
      h='800px'
      borderRadius='xl'
      borderWidth='1px'
      borderColor='purpleAlpha.300'
      direction={{ base: 'column-reverse', md: 'row' }}
    >
      <Flex
        flex={1}
        align='start'
        direction='column'
        justify='space-between'
        h='full'
      >
        <HStack spacing={5}>
          <FontAwesomeIcon fixedWidth icon={slides[page].icon} />
          <Text variant='mono'>{page + 1}</Text>
          <Text variant='mono' opacity={0.5}>
            {' / ' + slides.length}
          </Text>
        </HStack>

        <VStack align='start'>
          <Heading variant='subtitle'>{slides[page].title}</Heading>
          <Text variant='body'>{slides[page].description}</Text>
        </VStack>

        <HStack w='full' justify='space-between'>
          <HStack>
            <FontAwesomeIcon icon={faSpa} />
            <Text variant='caption'>Culture & Values</Text>
          </HStack>
          <ButtonGroup variant='outline'>
            <Button
              leftIcon={<FontAwesomeIcon icon={faArrowLeft} />}
              onClick={decrementPage}
            >
              Prev
            </Button>
            <Button
              rightIcon={<FontAwesomeIcon icon={faArrowRight} />}
              onClick={incrementPage}
            >
              Next
            </Button>
          </ButtonGroup>
        </HStack>
      </Flex>

      <Flex flex={{ base: 0.03, md: 0.1 }} />

      <Flex flex={{ base: 0.67, md: 1 }}>
        <AspectRatio ratio={2} w='full'>
          <Image
            borderRadius='lg'
            src={mode(slides[page].image.light, slides[page].image.dark)}
            alt={slides[page].image.alt}
            objectFit='cover'
          />
        </AspectRatio>
      </Flex>
    </Flex>
  );
};

export default ValuesSlides;
