import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Testimony } from '../../global/types';
import { RandomGradient } from '../random-gradient';

const Testimony = ({ quote, author }: Testimony) => {
  return (
    <VStack
      spacing={6}
      flex={1}
      p={6}
      m={3}
      bgGradient={RandomGradient()}
      borderRadius='md'
      justify={'space-between'}
    >
      <Box>
        <HStack w='full' justify='start' opacity={0.24} ml={-8} mt={-4}>
          <FontAwesomeIcon icon={faQuoteLeft} size='2x' />
        </HStack>
        <Text mt={2} variant='body'>
          {quote}
        </Text>
      </Box>
      <HStack w='full' spacing={3}>
        {/* <Avatar
          size={'md'}
          name={author.name}
          src={
            author.image ? mode(author.image.light, author.image.dark) : null
          }
        /> */}
        <VStack align='start' w='full' spacing={1}>
          <Text size='md' lineHeight={'100%'}>
            {author.name}
          </Text>
          <Text size='sm'>{author.description}</Text>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default Testimony;
