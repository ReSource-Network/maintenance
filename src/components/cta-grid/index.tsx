import CTAGridItem from '@/components/cta-grid/cta';
import { Flex } from '@chakra-ui/react';
import {
  CONTENT_MAX_WIDTH,
  CONTENT_PX,
  CONTENT_PY,
} from '../../global/constants';
import { CTAGridProps } from '../../global/types';

export const CTAGrid = (props: CTAGridProps) => {
  return (
    <Flex
      py={CONTENT_PY}
      px={CONTENT_PX}
      maxW={CONTENT_MAX_WIDTH}
      direction='column'
    >
      <Flex flex={1} direction={{ base: 'column', md: 'row' }}>
        {CTAGridItem(props.items[0])}
        {CTAGridItem(props.items[1])}
      </Flex>
      <Flex flex={1} direction={{ base: 'column', md: 'row' }}>
        {CTAGridItem(props.items[2])}
        {CTAGridItem(props.items[3])}
      </Flex>
    </Flex>
  );
};

export default CTAGrid;
