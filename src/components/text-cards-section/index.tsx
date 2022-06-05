import ImageOverlay from '@/components/image-overlay';
import TextCard from '@/components/text-cards-section/text-cards';
import {
  ButtonGroup,
  Flex,
  Heading,
  HStack,
  useColorModeValue as mode,
  VStack,
} from '@chakra-ui/react';
import { CONTENT_PY } from '../../global/constants';
import {
  IconPosition,
  TextCardOrientation,
  TextCardsSectionProps,
} from '../../global/types';
import CTAButton from '../cta-button';

const TextCardsSection = (props: TextCardsSectionProps) => {
  return (
    <Flex py={CONTENT_PY} px={{ base: 0 }} w='full'>
      <VStack
        w='full'
        px={[4, 6, 8, 10, 12, 14]}
        py={[4, 6, 8, 12, 14, 20]}
        spacing={8}
        bgImage={
          props.image
            ? mode(props.image.light, props.image.dark)
            : 'purpleAlpha.300'
        }
        bgSize='cover'
        bgPosition='center center'
        position='relative'
        overflow='hidden'
      >
        <ImageOverlay />
        <VStack spacing={2} w='full' maxWidth={'1000px'}>
          <Heading variant='subtitle' zIndex='text' w='full'>
            {props.title}
          </Heading>
          <Heading variant='caption' zIndex='text' w='full'>
            {props.caption}
          </Heading>
        </VStack>
        <Flex
          maxWidth={'1000px'}
          direction={
            props.orientation === TextCardOrientation.horizontal
              ? { base: 'column', lg: 'row' }
              : 'column'
          }
          zIndex='text'
          justify='space-between'
        >
          {props.cards.map((card) => TextCard(card, props.orientation))}
        </Flex>
        {props.buttons ? (
          <HStack justify='end' w='full'>
            <ButtonGroup>
              {props.buttons.map((button) => (
                <CTAButton
                  button={button}
                  variant={'solid'}
                  iconPosition={IconPosition.left}
                />
              ))}
            </ButtonGroup>
          </HStack>
        ) : null}
      </VStack>
    </Flex>
  );
};

export default TextCardsSection;
