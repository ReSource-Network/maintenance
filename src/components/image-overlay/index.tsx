import { Box, useColorModeValue as mode } from '@chakra-ui/react';

const ImageOverlay = () => {
  return (
    <Box
      top={0}
      bottom={0}
      left={0}
      right={0}
      position='absolute'
      zIndex='base'
      w='full'
      h='full'
      bg={mode('whiteAlpha.500', 'blackAlpha.500')}
    />
  );
};

export default ImageOverlay;
