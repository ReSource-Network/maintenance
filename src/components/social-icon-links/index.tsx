import { Flex, IconButton, Link, useColorModeValue } from '@chakra-ui/react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SOCIAL_LINKS } from '../../global/links';

interface SocialLink {
  title: string;
  href: string;
  icon: IconDefinition;
  ariaLabel: string;
  brandColor: string;
}

const iconButton = (button: SocialLink) => {
  return (
    <IconButton
      m={[0, 1, 2]}
      as={Link}
      variant='link'
      key={button.title}
      href={button.href}
      icon={<FontAwesomeIcon icon={button.icon} size={'lg'} />}
      aria-label={button.ariaLabel}
      isExternal
      color={useColorModeValue('black', 'white')}
      _focus={{
        color: button.brandColor,
        boxShadow: 'none',
      }}
      _hover={{ color: button.brandColor }}
      _active={{
        color: button.brandColor,
        opacity: 0.67,
      }}
    />
  );
};

const SocialIconLinks = (alignment?: string) => {
  return (
    <Flex
      direction='row'
      wrap='wrap'
      alignSelf={alignment ? alignment : 'start'}
      mt={8}
      ml={-2}
    >
      {/* <ButtonGroup spacing={[0, 1, 2]}> */}
      {SOCIAL_LINKS.map((socialLink) => iconButton(socialLink))}
      {/* </ButtonGroup> */}
    </Flex>
  );
};

export default SocialIconLinks;
