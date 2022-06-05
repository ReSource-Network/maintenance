import {
  Badge,
  DarkMode,
  Divider,
  Heading,
  HStack,
  LightMode,
  List,
  ListItem,
  Text,
  useColorModeValue as mode,
  VStack,
} from '@chakra-ui/react';
import { RoadmapItem } from 'src/global/types';

const renderBullets = (bullets: string[]) => (
  <List spacing='1'>
    {bullets.map((bullet) => (
      <ListItem key={bullet.slice(0, 20)}>{bullet}</ListItem>
    ))}
  </List>
);

const renderQuarter = (quarter: number, year: number) => (
  <VStack pt={6}>
    <VStack
      w='28px'
      right='calc(-28px * 1.6)'
      bgColor='purple.500'
      color='black'
      py={3}
      borderTopLeftRadius='none'
      borderTopRightRadius='md'
      borderBottomLeftRadius='none'
      borderBottomRightRadius='md'
    >
      <Text
        fontSize='sm'
        sx={{ writingMode: 'vertical-lr', textOrientation: 'mixed' }}
        variant='body'
        fontWeight='semibold'
        mb={2}
      >
        {'Q' + quarter}
      </Text>
      <Text
        fontSize='sm'
        fontWeight='semibold'
        sx={{ writingMode: 'vertical-lr', textOrientation: 'mixed' }}
        variant='body'
      >
        {year}
      </Text>
    </VStack>
  </VStack>
);

const light = (func: Function, arg?: string) => (
  <LightMode>{func(arg ? arg : null)}</LightMode>
);
const dark = (func: Function, arg?: string) => (
  <DarkMode>{func(arg ? arg : null)}</DarkMode>
);
const renderBadge = (badge: string) => (
  <Badge
    py={1}
    px={2}
    borderRadius='full'
    colorScheme={
      badge.slice(0, 2) === 'in'
        ? 'purple'
        : badge.slice(0, 3) === 'dev'
        ? 'orange'
        : 'blue'
    }
  >
    {badge}
  </Badge>
);
const renderDivider = () => <Divider />;

const RoadmapItem = ({ title, badge, bullets, quarter, year }: RoadmapItem) => (
  <HStack align='start' justify='start' spacing={0} mr={8} mb={8} key={title}>
    <VStack
      spacing={3}
      p={4}
      borderRadius='md'
      bgColor={mode('blackAlpha.900', 'whiteAlpha.900')}
      color={mode('white', 'black')}
      align='start'
      justify='start'
      w={{ base: '250px', sm: '320px' }}
    >
      <Heading variant='subheading'>{title}</Heading>
      {/* {mode(dark(renderBadge, badge), light(renderBadge, badge))} */}
      <HStack h={3} w='full'>
        {mode(dark(renderDivider), light(renderDivider))}
      </HStack>
      {renderBullets(bullets)}
    </VStack>
    {renderQuarter(quarter, year)}
  </HStack>
);

export default RoadmapItem;
