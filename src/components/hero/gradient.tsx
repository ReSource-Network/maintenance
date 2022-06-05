import { Box, useColorModeValue } from '@chakra-ui/react';

const HeroGradient = () => {
  const bgGradient = useColorModeValue(
    'linear-gradient(rgba(255, 255, 255, 0.00), rgba(255, 255, 255, 0.5) 35%, white 90%, white)',
    'linear-gradient(rgba(0, 0, 0, 0.05), black)'
  );
  return (
    <Box
      zIndex='base'
      position='absolute'
      w='full'
      h='full'
      minH='420px'
      maxH='1000px'
      background={bgGradient}
      bgRepeat='none'
      bgSize='cover'
    />
  );
};

export default HeroGradient;
