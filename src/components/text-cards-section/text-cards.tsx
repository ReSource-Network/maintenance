import CTAButton from '@/components/cta-button';
import {
  Heading,
  HStack,
  Text,
  useColorModeValue as mode,
  VStack,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  IconPosition,
  TextCard,
  TextCardOrientation,
} from '../../global/types';

const TextCard = (
  { title, description, icon, button }: TextCard,
  orientation: TextCardOrientation
) => {
  return (
    <VStack
      key={title}
      align='end'
      layerStyle='text-card'
      borderWidth={0}
      bgColor={mode('whiteAlpha.300', 'blackAlpha.300')}
      backdropFilter='blur(4px)'
      w={
        orientation === TextCardOrientation.horizontal
          ? { base: 'full', lg: '32%' }
          : 'full'
      }
      mb={
        orientation === TextCardOrientation.horizontal
          ? { base: 4, lg: 'unset' }
          : 4
      }
      p={5}
      spacing={4}
    >
      <HStack spacing={3} w='full'>
        <FontAwesomeIcon icon={icon} size='lg' />
        <Heading variant='subheading'>{title}</Heading>
      </HStack>
      <Text variant='body' w='full'>
        {description}
      </Text>
      {button ? (
        <CTAButton
          button={button}
          variant={'link-white'}
          iconPosition={IconPosition.right}
        />
      ) : null}
    </VStack>
  );
};

export default TextCard;
