import {
  AspectRatio,
  Center,
  Image,
  Skeleton,
  useColorModeValue,
} from '@chakra-ui/react';
import { Img } from '../../global/types';

const BulletSectionImage = (image: Img) => {
  return (
    <AspectRatio
      flex={1}
      ratio={1}
      ml={[0, null, 8, 10, 12, 16]}
      mr={{ base: -16, md: 0 }}
      mb={0}
      h='full'
      w='full'
      zIndex='base'
      maxW={{ base: '280px', md: '420px' }}
    >
      <Center>
        <Image
          opacity={{ base: 0.5, md: 1 }}
          maxW='90%'
          maxH='90%'
          src={useColorModeValue(image.light, image.dark)}
          alt={image.alt}
          fit='contain'
          fallback={<Skeleton w='full' h={64} />}
        />
      </Center>
    </AspectRatio>
  );
};

export default BulletSectionImage;
