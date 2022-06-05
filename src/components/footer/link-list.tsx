import {
  Button,
  Divider,
  Flex,
  Link,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Link {
  title: string;
  href: string;
  isExternal: boolean;
}

interface FooterLinkListProps {
  title: string;
  links: Link[];
}

const renderLink = (link: Link) => {
  return (
    <Button
      size={'sm'}
      variant={'link'}
      as={Link}
      href={link.href}
      isExternal={link.isExternal}
      color={useColorModeValue('black', 'white')}
      key={link.title}
      mt={2}
    >
      {link.title}
      {link.isExternal ? (
        <FontAwesomeIcon
          icon={faExternalLinkAlt}
          size='xs'
          style={{
            marginLeft: 8,
            opacity: 0.5,
          }}
        />
      ) : (
        ''
      )}
    </Button>
  );
};

const FooterLinkList = (linkList: FooterLinkListProps) => {
  return (
    <Flex
      flex={1}
      direction='column'
      align='start'
      justify='start'
      mr={8}
      my={8}
    >
      <Text
        size='sm'
        color={useColorModeValue('blackAlpha.700', 'whiteAlpha.700')}
        mb={2}
      >
        {linkList.title}
      </Text>
      <Divider />
      {linkList.links.map((link) => renderLink(link))}
    </Flex>
  );
};

export default FooterLinkList;
