import BrandAssetsHeader from '@/components/brand-assets/header';
import LogoVariation from '@/components/brand-assets/logo-variation';
import { Divider, Flex, Heading, VStack } from '@chakra-ui/react';
import {
  CONTENT_MAX_WIDTH,
  CONTENT_PX,
  CONTENT_PY,
} from '../../global/constants';
import { LOGO_VARIATIONS } from '../../global/images';

const renderBrandImages = (imageCategory: string) => {
  return (
    <VStack w='full' align='start' spacing={2} key={imageCategory}>
      <Heading variant='subheading'>{imageCategory}</Heading>
      <Flex w='full' wrap={{ base: 'wrap', md: 'nowrap' }} align='start'>
        {LOGO_VARIATIONS[imageCategory].map((variation) =>
          LogoVariation(variation, imageCategory)
        )}
      </Flex>
    </VStack>
  );
};

export const Brand = () => {
  return (
    <VStack py={CONTENT_PY} px={CONTENT_PX} maxW={CONTENT_MAX_WIDTH}>
      <VStack w='full' spacing={8}>
        <BrandAssetsHeader />
        {Object.keys(LOGO_VARIATIONS).map((category) => (
          <>
            <Divider />
            {renderBrandImages(category)}
          </>
        ))}
      </VStack>
    </VStack>
  );
};

export default Brand;
