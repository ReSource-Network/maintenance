import CTAButton from '@/components/cta-button';
import { Heading, Text, VStack } from '@chakra-ui/react';
import { Career as CareerProps, IconPosition } from 'src/global/types';

const Career = ({ title, description, button }: CareerProps) => (
  <VStack align='start' maxW='800px' spacing={6}>
    <VStack spacing={2}>
      <Heading variant='subheading' w='full'>
        {title}
      </Heading>
      <Text variant='body' w='full'>
        {description}
      </Text>
    </VStack>
    <CTAButton
      button={button}
      variant='solid'
      iconPosition={IconPosition.right}
    />
  </VStack>
);

export default Career;
