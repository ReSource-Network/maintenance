import { Stack, Text, VStack } from '@chakra-ui/react';
import {
  CONTENT_MAX_WIDTH,
  CONTENT_PX,
  CONTENT_PY,
} from 'src/global/constants';
import { CTAButton as CTAProps, IconPosition } from 'src/global/types';
import CTAButton from '../cta-button';

const PressKitCTA = (title: string, button: CTAProps) => (
  <VStack
    w='full'
    mt={-32}
    pb={CONTENT_PY}
    px={CONTENT_PX}
    maxWidth={CONTENT_MAX_WIDTH}
    zIndex='text'
  >
    <Stack
      w='full'
      direction={{ base: 'column', sm: 'row' }}
      align={{ base: 'flex-end', sm: 'center' }}
      justify='space-between'
      borderColor='purpleAlpha.200'
      borderWidth='1px'
      p={3}
      borderRadius='md'
    >
      <Text w='full' variant='body'>
        {title}
      </Text>
      <CTAButton
        button={button}
        variant='outline'
        iconPosition={IconPosition.right}
      />
    </Stack>
  </VStack>
);

export default PressKitCTA;
