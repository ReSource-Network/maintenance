import CTAButton from '@/components/cta-button';
import HeroGradient from '@/components/hero/gradient';
import {
  ButtonGroup,
  Center,
  Heading,
  HStack,
  useColorModeValue as mode,
  VStack,
} from '@chakra-ui/react';
import { CONTENT_MAX_WIDTH, CONTENT_PX } from '../../global/constants';
import { HeroProps, IconPosition } from '../../global/types';

export const Hero = ({ title, subtitle, image, buttons }: HeroProps) => {
  return (
    <Center
      w='full'
      h='100vh'
      minH='420px'
      maxH='1000px'
      overflow='hidden'
      background={`url(${mode(image.light, image.dark)})`}
      bgPosition='center center'
      bgRepeat='none'
      bgSize='cover'
      zIndex='base'
    >
      <HeroGradient />
      <VStack
        maxW={CONTENT_MAX_WIDTH}
        zIndex='text'
        px={CONTENT_PX}
        spacing={[4, null, 6, null, 8, null]}
      >
        <VStack spacing={[2, null, 3, null, 4]}>
          <Heading
            variant='title'
            textAlign={{ base: 'left', lg: 'center' }}
            w='full'
          >
            {title}
          </Heading>
          <Heading
            fontWeight='normal'
            variant='heading'
            textAlign={{ base: 'left', lg: 'center' }}
            w='full'
          >
            {subtitle}
          </Heading>
        </VStack>
        <ButtonGroup
          w='full'
          as={HStack}
          size='md'
          variant='solid'
          spacing={[2, null, 3, null, 4, null]}
          justify={{ base: 'start', lg: 'center' }}
        >
          {buttons
            ? buttons.map((button) => (
                <CTAButton
                  key={button.title}
                  button={button}
                  variant='solid'
                  iconPosition={IconPosition.right}
                />
              ))
            : null}
        </ButtonGroup>
      </VStack>
    </Center>
  );
};

export default Hero;
