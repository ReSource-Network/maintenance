import { Flex } from '@chakra-ui/react';
import { CONTENT_MAX_WIDTH } from '../../global/constants';
import { LogoButtonProps } from '../../global/types';
import LogoButton from './button';

const LogoGroup = ({ buttons, variant }: LogoButtonProps) => {
  return (
    <Flex
      w='full'
      maxW={CONTENT_MAX_WIDTH}
      zIndex='text'
      py={[8]}
      wrap='wrap'
      justify='center'
    >
      {buttons.map((button) => LogoButton(button, variant))}
    </Flex>
  );
};

export default LogoGroup;
