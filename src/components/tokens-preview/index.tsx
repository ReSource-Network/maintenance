import SourcePageCTA from '@/components/tokens-preview/source-page-cta';
import { Box, Divider, Flex, Heading, VStack } from '@chakra-ui/react';
import {
  CONTENT_MAX_WIDTH,
  CONTENT_PX,
  CONTENT_PY,
} from '../../global/constants';
import RsdPageCTA from './rsd-page-cta';

const TokensPreview = () => {
  return (
    <VStack
      maxW={CONTENT_MAX_WIDTH}
      py={CONTENT_PY}
      px={CONTENT_PX}
      spacing={16}
    >
      <Heading variant={'subtitle'}>Protocol tokens</Heading>
      <Divider />
      <Flex direction={{ base: 'column', md: 'row' }}>
        <SourcePageCTA />
        <Box w={32} h={16} />
        <RsdPageCTA />
      </Flex>
    </VStack>
  );
};

export default TokensPreview;
