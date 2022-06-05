import { Heading, VStack } from '@chakra-ui/react';
import {
  CONTENT_MAX_WIDTH,
  CONTENT_PX,
  CONTENT_PY,
} from 'src/global/constants';

const CareerDescription = () => (
  <VStack py={CONTENT_PY} px={CONTENT_PX} maxW={CONTENT_MAX_WIDTH}>
    <Heading variant='subtitle'>Careers</Heading>
  </VStack>
);

export async function getStaticProps(context) {
  return {
    props: {
      seoTitle: 'Careers',
      seoDescription:
        'Build ReFi dApps and lending protocols for local economies with your career at ReSource.',
    },
  };
}

export default CareerDescription;
