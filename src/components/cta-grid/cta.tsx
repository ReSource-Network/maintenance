import CTAButton from '@/components/cta-button';
import { Heading, Text, VStack } from '@chakra-ui/react';
import {
  CTAButton as ButtonProps,
  CTAGridItem,
  IconPosition,
} from '../../global/types';
import { RandomGradient } from '../random-gradient';
import SocialIconLinks from '../social-icon-links';
import TradeSourceCta from './trade-source-cta';

const renderButton = (title: string, button: ButtonProps) => {
  switch (title) {
    case 'Get SOURCE':
      return <TradeSourceCta />;
    case 'Engage in our community':
      return SocialIconLinks('end');
    case 'Join the community':
      return SocialIconLinks('end');
    case 'Join the conversation':
      return SocialIconLinks('end');
    default:
      return (
        <CTAButton
          button={button}
          variant={'solid'}
          iconPosition={IconPosition.left}
        />
      );
  }
};

const CTAGridItem = ({ title, description, button }: CTAGridItem) => (
  <VStack
    flex={1}
    align='end'
    justify='space-between'
    spacing={6}
    borderRadius='md'
    // bg={mode('blackAlpha.200', 'whiteAlpha.200')}
    bgGradient={RandomGradient()}
    p={6}
    m={3}
  >
    <VStack spacing={2} w='full'>
      <Heading variant='subheading' w='full'>
        {title}
      </Heading>
      <Text variant='body' w='full'>
        {description}
      </Text>
    </VStack>
    {renderButton(title, button)}
  </VStack>
);

export default CTAGridItem;
