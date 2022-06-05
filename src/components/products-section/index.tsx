import ProductSectionTabList from '@/components/products-section/tab-list';
import ProductSectionTabPanels from '@/components/products-section/tab-panels';
import { Divider, Flex, Heading, Tabs, VStack } from '@chakra-ui/react';
import React from 'react';
import {
  CONTENT_MAX_WIDTH,
  CONTENT_PX,
  CONTENT_PY,
} from '../../global/constants';
import { ProductSectionProps } from '../../global/types';

const ProductsSection = (props: ProductSectionProps) => {
  return (
    <VStack
      zIndex={1}
      w='full'
      maxW={CONTENT_MAX_WIDTH}
      py={CONTENT_PY}
      px={CONTENT_PX}
      direction='column'
      spacing={6}
    >
      <Heading w='full' variant='subtitle'>
        {props.title}
      </Heading>
      <Divider />
      <Flex>
        <Tabs orientation='vertical'>
          {ProductSectionTabList(props.tabNames)}
          {ProductSectionTabPanels(props.panels)}
        </Tabs>
      </Flex>
    </VStack>
  );
};

export default ProductsSection;
