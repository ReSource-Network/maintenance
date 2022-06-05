import { Flex, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  CONTENT_MAX_WIDTH,
  CONTENT_PX,
  CONTENT_PY,
} from '../../global/constants';
import { IconCardsProps } from '../../global/types';
import { RandomGradient } from '../random-gradient';

const IconCards = (props: IconCardsProps) => {
  return (
    <Flex
      maxW={CONTENT_MAX_WIDTH}
      py={CONTENT_PY}
      px={CONTENT_PX}
      wrap='wrap'
      justify='space-between'
    >
      {props.cards.map((card) => (
        <Flex
          flex={1}
          direction='column'
          m={[2, 2.5, 3, 3.5, 4, null]}
          p={[4, 5, 6, 7, 8, null]}
          minW='200px'
          key={card.title}
          align='start'
          borderRadius='md'
          // bg={mode('blackAlpha.100', 'whiteAlpha.100')}
          bgGradient={RandomGradient()}
        >
          <Text>
            <FontAwesomeIcon icon={card.icon} size='2x' />
          </Text>
          <Text mt={4} variant='body'>
            {card.title}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
};

export default IconCards;
