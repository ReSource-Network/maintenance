import { Heading, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import { Tab, TabList } from '@chakra-ui/tabs';
import React from 'react';
import { ProductSectionTabName } from '../../global/types';

const ProductSectionTabList = (tabNames: ProductSectionTabName[]) => {
  return (
    <TabList border='none'>
      {tabNames.map((name) => (
        <Tab
          key={name.title}
          w={[32, 40, 48, 56, 64]}
          p={4}
          boxShadow='none'
          borderWidth='1px'
          borderColor='transparent'
          borderRadius='md'
          _selected={{
            color: useColorModeValue('purple.600', 'purple.400'),
            // bg: 'purpleAlpha.100',
            boxShadow: 'none',
            borderWidth: '1px',
            borderColor: 'purpleAlpha.200',
          }}
          _focus={{
            boxShadow: 'none',
          }}
          _active={{
            boxShadow: 'none',
          }}
          _hover={{
            bg: 'purpleAlpha.50',
          }}
        >
          <VStack align='start' spacing={2} w='full'>
            <Heading variant='subheading' textAlign='left'>
              {name.title}
            </Heading>
            <Text
              variant='body'
              textAlign='left'
              display={{ base: 'none', sm: 'unset' }}
            >
              {name.description}
            </Text>
          </VStack>
        </Tab>
      ))}
    </TabList>
  );
};

export default ProductSectionTabList;
