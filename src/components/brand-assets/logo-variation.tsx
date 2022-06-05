import PngDownloadMenu from '@/components/brand-assets/png-download-menu';
import SvgDownloadButton from '@/components/brand-assets/svg-download-button';
import {
  AspectRatio,
  ButtonGroup,
  HStack,
  Image,
  useColorModeValue as mode,
  VStack,
} from '@chakra-ui/react';
import { LogoVariation } from '../../global/types';

const LogoVariation = (variation: LogoVariation, category: string) => {
  return (
    <VStack key={variation.id} align='start' spacing={3} w='full' my={4} mr={4}>
      <AspectRatio
        ratio={category === 'logotype' ? null : 1}
        w='full'
        h='128px'
      >
        <Image
          borderRadius={8}
          borderWidth='1px'
          borderStyle='solid'
          borderColor={mode('blackAlpha.200', 'whiteAlpha.200')}
          p={[4, 4, 6, 8]}
          src={variation.imgSrcName}
          alt={`resource ${category}`}
          layerStyle={variation.backgroundMode}
        />
      </AspectRatio>
      <HStack w='full' justify='end'>
        <ButtonGroup size={'sm'} spacing={2}>
          {SvgDownloadButton(variation)}
          {PngDownloadMenu(variation)}
        </ButtonGroup>
      </HStack>
    </VStack>
  );
};

export default LogoVariation;
