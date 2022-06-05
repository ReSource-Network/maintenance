import { Divider, Heading, Link, Text, VStack } from '@chakra-ui/react';
import {
  CONTENT_MAX_WIDTH,
  CONTENT_PX,
  CONTENT_PY,
} from 'src/global/constants';
import { Faq } from 'src/global/types';

const InlineFaq = (title: string, description: string, faqs: Faq[]) => {
  return (
    <>
      <VStack
        align='start'
        maxW={CONTENT_MAX_WIDTH}
        px={CONTENT_PX}
        py={CONTENT_PY}
      >
        <Heading variant='subtitle'>{title}</Heading>
        <Text variant='body'>{description}</Text>
        {faqs.map((faq) => (
          <VStack
            key={faq.a[0] + faq.q}
            direction='column'
            align='flex-start'
            justify='flex-start'
            py={8}
          >
            <Heading mb={[1, 1, 2]} w='full' variant='subheading'>
              {faq.q}
            </Heading>
            {faq.a.map((answer) => {
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
        ))}
        <Divider mb={3} />
      </VStack>
    </>
  );
};

export default InlineFaq;
