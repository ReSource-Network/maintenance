import {
  AspectRatio,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
  useColorModeValue as mode,
  VStack,
} from '@chakra-ui/react';
import {
  CONTENT_MAX_WIDTH,
  CONTENT_PX,
  CONTENT_PY,
} from '../../global/constants';
import { FourSquaresSectionProps } from '../../global/types';

const FourSquaresSection = (props: FourSquaresSectionProps) => {
  return (
    <Flex py={CONTENT_PY} px={CONTENT_PX} maxW={CONTENT_MAX_WIDTH}>
      <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={5}>
        {props.cards.map((card) => (
          <VStack
            key={card.title}
            flex={1}
            spacing={5}
            p={5}
            bgColor={mode('blackAlpha.100', 'whiteAlpha.100')}
          >
            <AspectRatio ratio={2} w='full'>
              <Image
                src={mode(card.image.light, card.image.dark)}
                alt={card.image.alt}
              />
            </AspectRatio>
            <VStack>
              <Heading w='full' variant='subheading'>
                {card.title}
              </Heading>
              <Text variant='body'>{card.description}</Text>
            </VStack>
          </VStack>
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default FourSquaresSection;
