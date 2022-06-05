import {
  Box,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { faBars, faExternalLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NAV_PAGE_LINKS } from '../../global/links';

interface PageLink {
  title: string;
  href: string;
  isExternal: boolean;
}

const renderMenuItem = (link: PageLink) => {
  return (
    <MenuItem
      as={Link}
      layerStyle='menu-item'
      key={link.title}
      href={link.href}
      isExternal={link.isExternal}
      _focus={{
        boxShadow: 'none',
        background: 'purpleAlpha.100',
      }}
    >
      {link.title}
      {link.isExternal ? (
        <FontAwesomeIcon
          icon={faExternalLink}
          size={'xs'}
          style={{
            opacity: 0.5,
            marginLeft: 6,
          }}
        />
      ) : (
        ''
      )}
    </MenuItem>
  );
};

const NavMenu = () => {
  return (
    <Box layerStyle='nav-menu-container'>
      <Menu>
        <MenuButton
          as={IconButton}
          size='lg'
          icon={<FontAwesomeIcon icon={faBars} size='lg' />}
          variant='outline-gray'
        />
        <MenuList layerStyle='menu-list'>
          {NAV_PAGE_LINKS.map((link) => renderMenuItem(link))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default NavMenu;
