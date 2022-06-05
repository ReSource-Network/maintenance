// chakra
// components
import TabsSectionList from '@/components/tabs-section/tab-list';
import TabsSectionPanels from '@/components/tabs-section/tab-panels';
import { Divider, Flex, Heading, Tabs } from '@chakra-ui/react';
// constants
import {
  CONTENT_MAX_WIDTH,
  CONTENT_PX,
  CONTENT_PY,
} from '../../global/constants';
// types
import { TabsSectionProps } from '../../global/types';

const TabsSection = (props: TabsSectionProps) => {
  return (
    <Flex
      zIndex={1}
      id={props.id ? props.id : null}
      direction='column'
      w='full'
      maxW={CONTENT_MAX_WIDTH}
      py={CONTENT_PY}
      px={CONTENT_PX}
    >
      <Heading variant='subtitle'>{props.title}</Heading>
      <Divider py={3} mb={3} />
      <Tabs variant='soft-rounded' size='md' orientation='horizontal'>
        <TabsSectionList tabNames={props.tabNames} />
        <TabsSectionPanels panels={props.panels} />
      </Tabs>
    </Flex>
  );
};

export default TabsSection;
