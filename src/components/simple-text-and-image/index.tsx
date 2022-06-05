import CTAButton from '@/components/cta-button';
import {
  AspectRatio,
  Flex,
  Heading,
  Image,
  Skeleton,
  Text,
  useColorModeValue as mode,
  VStack,
} from '@chakra-ui/react';
import {
  CONTENT_MAX_WIDTH,
  CONTENT_PX,
  CONTENT_PY,
} from '../../global/constants';
import { IconPosition, SimpleTextAndImageProps } from '../../global/types';

const SimpleTextAndImage = (props: SimpleTextAndImageProps) => {
  return (
    <Flex
      zIndex='text'
      id={props.id ? props.id : null}
      maxW={CONTENT_MAX_WIDTH}
      py={CONTENT_PY}
      px={CONTENT_PX}
      direction={{ base: 'column', sm: 'row' }}
    >
      <VStack
        mr={{ base: 0, sm: 8 }}
        mb={{ base: 8, sm: 0 }}
        spacing={2}
        flex={2}
      >
        <Heading variant='subtitle'>{props.title}</Heading>
        <Text variant='body'>{props.description}</Text>
      </VStack>
      <VStack flex={1} align='end'>
        <AspectRatio w='full' ratio={1.5}>
          <Image
            borderRadius='md'
            src={mode(props.image.light, props.image.dark)}
            alt={props.image.alt}
            fallback={<Skeleton w={{ base: '100%', md: '50%' }} h={500} />}
          />
        </AspectRatio>
        {props.button ? (
          <CTAButton
            button={props.button}
            variant={'solid'}
            iconPosition={IconPosition.left}
          />
        ) : null}
      </VStack>
    </Flex>
  );
};

export default SimpleTextAndImage;
