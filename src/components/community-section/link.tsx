import {
  Heading,
  HStack,
  Link,
  Text,
  useColorModeValue as mode,
  VStack,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CommunityLink } from '../../global/types';

const CommunityLink = (link: CommunityLink) => {
  return (
    <Link
      key={link.title}
      href={link.href}
      isExternal
      borderWidth='1px'
      borderColor={mode('blackAlpha.300', 'whiteAlpha.300')}
      borderRadius='xl'
      _hover={{
        textDecoration: 'none',
        borderColor: link.brandColor,
        color: link.brandColor,
      }}
    >
      <HStack spacing={5} p={5}>
        <FontAwesomeIcon icon={link.icon} size='3x' />
        <VStack spacing={0}>
          <Heading w='full' variant='subheading'>
            {link.title}
          </Heading>
          <Text w='full' variant='body'>
            {link.description}
          </Text>
        </VStack>
      </HStack>
    </Link>
  );
};

export default CommunityLink;
