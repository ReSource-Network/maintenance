import { Button, Link } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CTAButtonProps } from '../../global/types';

const CTAButton = ({ button, variant, iconPosition }: CTAButtonProps) => {
  return (
    <Button
      as={Link}
      isDisabled={button.href === 'disabled'}
      variant={button.href === 'disabled' ? 'disabled' : variant}
      href={button.href === 'disabled' ? null : button.href}
      isExternal={button.isExternal}
      leftIcon={
        iconPosition === 'LEFT' ? <FontAwesomeIcon icon={button.icon} /> : null
      }
      rightIcon={
        iconPosition === 'RIGHT' ? <FontAwesomeIcon icon={button.icon} /> : null
      }
      zIndex='text'
    >
      {button.title}
    </Button>
  );
};

export default CTAButton;
