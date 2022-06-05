import CTAButton from '@/components/cta-button';
import { ButtonGroup, Hide, Show } from '@chakra-ui/react';
import { PRODUCT_LINKS } from '../../global/links';
import { IconPosition } from '../../global/types';

const NavCTAButtons = () => {
  return (
    <>
      <Hide below='md'>
        <ButtonGroup>
          {PRODUCT_LINKS.map((link) => (
            <CTAButton
              key={link.title}
              button={link}
              variant={'solid'}
              iconPosition={IconPosition.none}
            />
          ))}
        </ButtonGroup>
      </Hide>
      <Show below='md'>
        <ButtonGroup size='sm'>
          {PRODUCT_LINKS.map((link) => (
            <CTAButton
              key={link.title}
              button={link}
              variant={'solid'}
              iconPosition={IconPosition.none}
            />
          ))}
        </ButtonGroup>
      </Show>
    </>
  );
};

export default NavCTAButtons;
