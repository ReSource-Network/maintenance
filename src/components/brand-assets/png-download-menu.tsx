import {
  Button,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LogoVariation } from '../../global/types';

const PngDownloadMenu = (variation: LogoVariation) => {
  return (
    <Menu key={variation.id + variation.id}>
      <MenuButton
        as={Button}
        variant='outline'
        rightIcon={<FontAwesomeIcon icon={faChevronDown} />}
      >
        .PNG
      </MenuButton>
      <MenuList>
        {Object.keys(variation.imagePaths).map((key) => (
          <MenuItem
            download
            key={variation.id + key}
            as={Link}
            href={variation.imagePaths[key]}
            rel='noreferrer nofollow'
            _hover={{ textDecoration: 'none', boxShadow: 'none' }}
            _focus={{
              textDecoration: 'none',
              boxShadow: 'none',
              bgColor: 'purpleAlpha.300',
            }}
          >
            {key + 'px'}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PngDownloadMenu;
