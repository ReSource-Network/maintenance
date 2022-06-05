import Testimony from '@/components/testimonies-section/testimony';
import { Flex, Heading, VStack } from '@chakra-ui/react';
import { TestimoniesSectionProps } from 'src/global/types';
import {
  CONTENT_MAX_WIDTH,
  CONTENT_PX,
  CONTENT_PY,
} from '../../global/constants';

const TestimoniesSection = (props: TestimoniesSectionProps) => {
  return (
    <VStack
      maxW={CONTENT_MAX_WIDTH}
      py={CONTENT_PY}
      px={CONTENT_PX}
      spacing={6}
    >
      <Heading variant='subtitle'>{props.title}</Heading>
      <Flex direction={{ base: 'column', lg: 'row' }}>
        <Testimony
          quote={props.testimonies[0].quote}
          author={props.testimonies[0].author}
        />
        <Testimony
          quote={props.testimonies[1].quote}
          author={props.testimonies[1].author}
        />
        <Testimony
          quote={props.testimonies[2].quote}
          author={props.testimonies[2].author}
        />
      </Flex>
    </VStack>
  );
};

export default TestimoniesSection;
