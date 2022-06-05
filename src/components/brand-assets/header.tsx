import { Heading, Text, VStack } from '@chakra-ui/react';

const BrandAssetsHeader = () => {
  return (
    <VStack align='start' w='full' mt={[16, 16, 24, 32]} spacing={2}>
      <Heading variant='subtitle'>ReSource Brand Assets</Heading>
      <Text variant='caption'>
        Please do not edit, change, distort, recolor, or reconfigure the
        ReSource logos.
      </Text>
    </VStack>
  );
};

export default BrandAssetsHeader;
