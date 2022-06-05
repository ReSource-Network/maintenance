import CommunityLink from '@/components/community-section/link';
import { Heading, SimpleGrid, VStack } from '@chakra-ui/react';
import {
  CONTENT_MAX_WIDTH,
  CONTENT_PX,
  CONTENT_PY,
} from '../../global/constants';
import { SOCIAL_LINKS } from '../../global/links';

const CommunitySection = () => {
  return (
    <VStack
      id='community'
      maxW={CONTENT_MAX_WIDTH}
      py={CONTENT_PY}
      px={CONTENT_PX}
      spacing={6}
    >
      <Heading variant='subtitle'>Join the community</Heading>
      <SimpleGrid columns={[1, null, 2]} spacing={4}>
        {SOCIAL_LINKS.map((link) => CommunityLink(link))}
      </SimpleGrid>
    </VStack>
  );
};

export default CommunitySection;
