import { Flex, Heading, Hide, HStack, Show, Text } from '@chakra-ui/react';
import { fa1, fa2, fa3 } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StepsCard } from '../../global/types';
import { RandomGradient } from '../random-gradient';

const ThreeStepsCards = (cards: [StepsCard, StepsCard, StepsCard]) => {
  const icons = [fa1, fa2, fa3];
  let elements = [];

  for (let i = 0; i < 3; i++) {
    elements.push(
      <Flex
        w='full'
        mx={{ base: 0, sm: 2 }}
        mb={{ base: 2, sm: 0 }}
        direction='column'
        key={cards[i].description.slice(0, 20)}
        p={[4, 5, 6, 7, 8, null]}
        align='start'
        bgGradient={RandomGradient()}
        borderRadius='md'
      >
        {cards[i].title ? (
          <HStack spacing={4}>
            <Show above='md'>
              <FontAwesomeIcon icon={icons[i]} size='lg' />
            </Show>
            <Hide above='md'>
              <FontAwesomeIcon icon={icons[i]} size='sm' />
            </Hide>
            <Heading mt={3} variant='subheading'>
              {cards[i].title}
            </Heading>
          </HStack>
        ) : (
          <>
            <Show above='md'>
              <FontAwesomeIcon icon={icons[i]} size='2x' />
            </Show>
            <Hide above='md'>
              <FontAwesomeIcon icon={icons[i]} size='1x' />
            </Hide>
          </>
        )}
        <Text mt={3} variant='body'>
          {cards[i].description}
        </Text>
      </Flex>
    );
  }

  return elements;
};

export default ThreeStepsCards;
