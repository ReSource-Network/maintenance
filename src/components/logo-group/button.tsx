import { Image, Link, useColorModeValue as mode } from '@chakra-ui/react';
import { LogoButton, LogoButtonVariant } from '../../global/types';

const LogoButton = (button: LogoButton, variant: LogoButtonVariant) => {
  const imageSrc = mode(button.image.dark, button.image.light);

  return (
    <Link
      key={button.image.alt}
      href={button.href}
      isExternal
      _focus={{ boxShadow: 'none' }}
      _hover={{ boxShadow: 'none' }}
      px={[4, 6, 8, 10, 12, 14]}
      py={[2, 3, 4, 5, 6, 7]}
    >
      <Image
        src={imageSrc}
        alt={button.image.alt}
        h={[4, null, 6, null, 8, null]}
        maxW={[40, null, 48, null, 56, null]}
        objectFit='contain'
        opacity={variant === LogoButtonVariant.subtle ? 0.5 : 1}
        _hover={{
          opacity: variant === LogoButtonVariant.subtle ? 1 : 0.67,
        }}
        transition='0.28s'
      />
    </Link>
  );
};

export default LogoButton;
