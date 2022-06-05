import { Divider, Heading, Link, Text, VStack } from '@chakra-ui/react';
import { Faq } from 'src/global/types';

const FaqItem = ({ q, a }: Faq) => {
  return (
    <>
      <VStack
        key={a[0] + q}
        direction='column'
        align='flex-start'
        justify='flex-start'
        py={8}
      >
        <Heading mb={[1, 1, 2]} w='full' variant='subheading'>
          {q}
        </Heading>
        {a.map((answer) => {
          return answer.slice(0, 5) === 'https' ? (
            <Link href={answer} mb={[2, 2, 3, 4]} color={'purple.500'}>
              {answer}
            </Link>
          ) : (
            <Text variant='body' mb={[1, 1, 2, 2]}>
              {answer}
            </Text>
          );
        })}
      </VStack>
      <Divider mb={3} />
    </>
  );
};

export default FaqItem;
