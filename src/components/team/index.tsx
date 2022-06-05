import {
  AspectRatio,
  Badge,
  Divider,
  Flex,
  Heading,
  HStack,
  IconButton,
  Image,
  Link,
  SimpleGrid,
  Text,
  useColorModeValue as mode,
  VStack,
} from '@chakra-ui/react';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  CONTENT_MAX_WIDTH,
  CONTENT_PX,
  CONTENT_PY,
} from '../../global/constants';
import { TeamProps } from '../../global/types';

const getScheme = (section: string) => {
  switch (section) {
    case 'product & design':
      return 'blue';
    case 'admin & finance':
      return 'green';
    case 'engineering':
      return 'red';
    case 'protocol':
      return 'purple';
    case 'network & community':
      return 'orange';
    case 'founder':
      return 'purple';
    default:
      return 'gray';
  }
};
const getTheme = (section: string) => {
  switch (section) {
    case 'product & design':
      return mode('blue.700', 'blue.300');
    case 'admin & finance':
      return mode('green.700', 'green.300');
    case 'engineering':
      return mode('red.700', 'red.300');
    case 'protocol':
      return mode('purple.700', 'red.300');
    case 'network & community':
      return mode('orange.700', 'orange.300');
    case 'founder':
      return mode('purple.700', 'red.300');
    default:
      return mode('gray.700', 'gray.300');
  }
};

const getBgColor = (section: string) => {
  switch (section) {
    case 'product & design':
      return 'blueAlpha.300';
    case 'admin & finance':
      return 'greenAlpha.300';
    case 'engineering':
      return 'redAlpha.300';
    case 'protocol':
      return 'purpleAlpha.300';
    case 'network & community':
      return 'orangeAlpha.300';
    case 'founder':
      return 'purpleAlpha.300';
    default:
      return 'blackAlpha.300';
  }
};

const Team = ({ title, sections }: TeamProps) => {
  return (
    <Flex
      py={CONTENT_PY}
      px={CONTENT_PX}
      maxW={CONTENT_MAX_WIDTH}
      wrap='wrap'
      w='full'
    >
      <Heading variant='subtitle'>{title}</Heading>
      <Divider mt={6} />
      <SimpleGrid
        mt={6}
        columns={[2, 2, 3, 4, 5]}
        spacing={[2, null, 3, null, 4]}
        w={'full'}
      >
        {sections.map((section) => (
          <>
            {section.people.map((person) => (
              <AspectRatio ratio={0.6}>
                <VStack
                  key={person.name}
                  borderRadius='md'
                  borderColor='purpleAlpha.200'
                  borderWidth='1px'
                  bg={mode('blackAlpha.100', 'whiteAlpha.100')}
                >
                  <AspectRatio
                    w='full'
                    ratio={1}
                    bg={getBgColor(section.title)}
                  >
                    <Image
                      src={person.imgSrc}
                      alt={person.altText}
                      objectFit='contain'
                    />
                  </AspectRatio>

                  <VStack
                    w='full'
                    p={3}
                    align='start'
                    justify='space-between'
                    h='full'
                  >
                    <VStack w='full' align='start'>
                      <Heading size={'sm'}>{person.name}</Heading>
                      <Text size={'sm'}>{person.title}</Text>
                    </VStack>
                    <HStack
                      w='full'
                      justify='space-between'
                      display={{ base: 'none', sm: 'unset' }}
                    >
                      <Badge
                        variant='subtle'
                        color={mode('black', 'white')}
                        bgColor={getBgColor(section.title)}
                      >
                        {section.title}
                      </Badge>
                      <IconButton
                        as={Link}
                        href={person.href}
                        isExternal='true'
                        variant='ghost'
                        icon={<FontAwesomeIcon icon={faLinkedin} />}
                        aria-label={person.name + 'Linkedin'}
                        color={mode('blackAlpha.800', 'whiteAlpha.800')}
                      />
                    </HStack>
                  </VStack>
                </VStack>
              </AspectRatio>
            ))}
          </>
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default Team;
