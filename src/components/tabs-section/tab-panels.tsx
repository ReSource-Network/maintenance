import {
  ButtonGroup,
  Flex,
  Heading,
  HStack,
  List,
  ListItem,
  Text,
  useColorModeValue as mode,
  VStack,
} from '@chakra-ui/react';
import { TabPanel, TabPanels } from '@chakra-ui/tabs';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CONTENT_BORDER_RADIUS } from '../../global/constants';
import {
  IconPosition,
  TabsPanelsProps,
  TabsSectionPanel,
} from '../../global/types';
import CTAButton from '../cta-button';

const renderCopy = (title: string, bullets: string[]) => {
  return (
    <VStack w='full' spacing={4} align='start'>
      <Heading variant='heading' zIndex='text' w='full' opacity={0.92}>
        {title}
      </Heading>
      <List spacing={2} textStyle='body' zIndex='text' stylePosition='outside'>
        {bullets.map((bullet) => (
          <ListItem as={HStack} align='start' key={bullet.slice(0, 10)}>
            <FontAwesomeIcon
              icon={faAngleRight}
              opacity={0.67}
              size='sm'
              style={{ marginTop: 6 }}
            />
            <Text display='inline-block' opacity={0.92}>
              {bullet}
            </Text>
          </ListItem>
        ))}
      </List>
    </VStack>
  );
};

const renderPanel = (panel: TabsSectionPanel) => {
  return (
    <TabPanel
      key={panel.title}
      borderWidth='2px'
      borderColor='purpleAlpha.300'
      borderRadius={CONTENT_BORDER_RADIUS}
      mt={3}
      p={0}
    >
      <Flex
        direction={{ base: 'column-reverse', md: 'row-reverse' }}
        align='stretch'
        overflow='hidden'
        p={4}
      >
        <Flex
          flex={1}
          direction='column'
          align='end'
          ml={{ base: 0, md: 4 }}
          mt={{ base: 6, md: 8 }}
          px={4}
        >
          {renderCopy(panel.title, panel.bullets)}
          <ButtonGroup
            pt={{ base: 12, md: 24 }}
            size='lg'
            variant='solid'
            mb={4}
          >
            <CTAButton
              button={panel.button}
              variant='solid'
              iconPosition={IconPosition.right}
            />
          </ButtonGroup>
        </Flex>
        <Flex
          borderRadius={CONTENT_BORDER_RADIUS}
          direction='column'
          flex={{ base: 0.5, md: 1 }}
          minH='200px'
          bgImage={{
            // base: 'none',
            base: `url(${mode(panel.image.light, panel.image.dark)})`,
          }}
          bgSize='cover'
          bgRepeat='none'
          bgPosition='center center'
          justify='end'
          align='end'
        />
      </Flex>
    </TabPanel>
  );
};

const TabsSectionPanels = ({ panels }: TabsPanelsProps) => {
  return <TabPanels>{panels.map((panel) => renderPanel(panel))}</TabPanels>;
};

export default TabsSectionPanels;
