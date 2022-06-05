import LogoGroup from '@/components/logo-group';
import { Heading, VStack } from '@chakra-ui/react';
import {
  CONTENT_MAX_WIDTH,
  CONTENT_PX,
  CONTENT_PY,
} from '../../global/constants';
import { LogoButtonVariant, PartnersSectionProps } from '../../global/types';

const PartnersSection = (props: PartnersSectionProps) => {
  return (
    <VStack
      id='partners'
      w='full'
      maxW={CONTENT_MAX_WIDTH}
      px={CONTENT_PX}
      py={CONTENT_PY}
    >
      <VStack w='full' borderRadius='lg' spacing={16} overflow='hidden'>
        {props.groups.map((group) => (
          <VStack key={group.title} w='full' spacing={0}>
            <Heading mb={6} zIndex='text' textAlign='center' variant='subtitle'>
              {group.title}
            </Heading>
            <LogoGroup
              buttons={group.buttons}
              variant={LogoButtonVariant.normal}
            />
          </VStack>
        ))}
      </VStack>
    </VStack>
  );
};

export default PartnersSection;
