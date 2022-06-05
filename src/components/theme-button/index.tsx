import {
  IconButton,
  IconButtonProps,
  useColorMode,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence, motion, Variants } from 'framer-motion';

const variants: Variants = {
  initial: {
    opacity: 0,
    // scale: 0.2,
    transition: {
      type: 'tween',
      duration: 0.15,
      ease: 'easeOut',
    },
  },
  enter: {
    opacity: 1,
    // scale: 1,
    transition: {
      type: 'tween',
      duration: 0.15,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    // scale: 1.8,
    transition: {
      type: 'tween',
      duration: 0.15,
      ease: 'easeOut',
    },
  },
};

const MotionIconButton = motion<IconButtonProps>(IconButton);

const ThemeButton = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <AnimatePresence exitBeforeEnter>
      <MotionIconButton
        // content
        key={mode('light', 'dark')}
        aria-label='Toggle color mode'
        icon={mode(
          <FontAwesomeIcon icon={faMoon} />,
          <FontAwesomeIcon icon={faSun} />
        )}
        // style
        size='lg'
        variant='ghost'
        color={mode('black', 'white')}
        // animation
        initial='initial'
        animate='enter'
        exit='exit'
        variants={variants}
        // interaction
        onClick={toggleColorMode}
      />
    </AnimatePresence>
  );
};

export default ThemeButton;
