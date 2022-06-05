import { Image, Link, useColorModeValue as mode } from '@chakra-ui/react';
import { TabPanel, TabPanels } from '@chakra-ui/tabs';
import React from 'react';
import { ProductSectionPanel } from '../../global/types';

const ProductSectionTabPanels = (panels: ProductSectionPanel[]) => {
  return (
    <TabPanels>
      {panels.map((panel) => (
        <TabPanel key={panel.image.alt} p={0}>
          <Link href={panel.href} isExternal>
            <Image
              w='full'
              h='full'
              src={mode(panel.image.light, panel.image.dark)}
            />
          </Link>
        </TabPanel>
      ))}
    </TabPanels>
  );
};

export default ProductSectionTabPanels;
