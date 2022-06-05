import {
  Center,
  Divider,
  Flex,
  Heading,
  Hide,
  Show,
  Text,
  VStack,
} from '@chakra-ui/react';
import { RoadmapStage } from 'src/global/types';
import RoadmapItem from './roadmap-item';

const RoadmapStage = ({ title, subtitle, items }: RoadmapStage) => (
  <Flex
    key={subtitle}
    w='full'
    align='start'
    justify='start'
    direction={{ base: 'column', md: 'row' }}
  >
    <VStack
      align={{ base: 'start', md: 'end' }}
      h='full'
      w={{ base: 'full', md: '200px' }}
      minW='200px'
    >
      <Heading textAlign={{ base: 'left', md: 'right' }} variant='subheading'>
        {title}
      </Heading>
      <Text textAlign='right' variant='body'>
        {subtitle}
      </Text>
    </VStack>

    <>
      <Hide below='md'>
        <Center h='200px' w='3px'>
          <Divider opacity={1} ml={6} orientation='vertical' />
        </Center>
      </Hide>
      <Show below='md'>
        <Center h='3px' w='full' my={6}>
          <Divider opacity={1} ml={0} orientation='horizontal' />
        </Center>
      </Show>
    </>

    <Flex
      ml={{ base: 0, md: 6 }}
      align='start'
      borderRadius='md'
      wrap='wrap'
      w='full'
    >
      {items.map((item) => RoadmapItem(item))}
    </Flex>
  </Flex>
);
export default RoadmapStage;
