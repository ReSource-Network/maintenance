import {
  Flex,
  Heading,
  HStack,
  Text,
  useColorModeValue as mode,
  VStack,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  CONTENT_MAX_WIDTH,
  CONTENT_PX,
  CONTENT_PY,
} from 'src/global/constants';
import { IconPosition, TxtPlusIconCardsProps } from 'src/global/types';
import CTAButton from '../cta-button';

const renderIconCards = (cards) => (
  <Flex w='full' wrap='wrap' justify='space-between'>
    {cards.map((card) => (
      <Flex
        flex={1}
        direction='column'
        m={[2, 2.5, 3, 3.5, 4, null]}
        p={[4, 5, 6, 7, 8, null]}
        minW='200px'
        key={card.title}
        align='start'
        borderRadius='md'
        bg={mode('blackAlpha.100', 'whiteAlpha.100')}
      >
        <FontAwesomeIcon icon={card.icon} size={'2x'} />
        <Text mt={4} size='sm' variant='body'>
          {card.title}
        </Text>
      </Flex>
    ))}
  </Flex>
);

const TxtPlusIconCards = ({
  title,
  description,
  cards,
  button,
}: TxtPlusIconCardsProps) => (
  <VStack spacing={6} maxW={CONTENT_MAX_WIDTH} py={CONTENT_PY} px={CONTENT_PX}>
    <Heading w='full' variant='subtitle'>
      {title}
    </Heading>
    {description.map((text) => (
      <Text variant='body'>{text}</Text>
    ))}
    {renderIconCards(cards)}
    {button ? (
      <HStack w='full' justify='end'>
        <CTAButton
          button={button}
          variant='solid'
          iconPosition={IconPosition.right}
        />
      </HStack>
    ) : null}
  </VStack>
);

export default TxtPlusIconCards;
