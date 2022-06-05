import { useColorModeValue as mode } from '@chakra-ui/react';
import { Tab, TabList } from '@chakra-ui/tabs';
import { TabsListProps } from '../../global/types';

const renderTab = (name: string) => {
  return (
    <Tab
      key={name}
      mr={2}
      borderWidth='1px'
      borderColor='transparent'
      _focus={{}}
      _hover={{
        borderWidth: '1px',
        borderColor: mode('purpleAlpha.300', 'purpleAlpha.700'),
        color: mode('black', 'white'),
      }}
    >
      {name}
    </Tab>
  );
};

const TabsSectionList = ({ tabNames }: TabsListProps) => {
  return (
    <TabList alignItems='start' overflowX='scroll' w='full' mt={3} mb={4}>
      {tabNames.map((name) => renderTab(name))}
    </TabList>
  );
};

export default TabsSectionList;
