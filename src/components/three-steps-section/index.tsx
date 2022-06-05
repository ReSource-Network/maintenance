import CTAButton from '@/components/cta-button';
import ThreeStepsCards from '@/components/three-steps-section/card';
import {
  ButtonGroup,
  Divider,
  Heading,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react';
import {
  CONTENT_MAX_WIDTH,
  CONTENT_PX,
  CONTENT_PY,
} from '../../global/constants';
import { IconPosition, ThreeStepsSectionProps } from '../../global/types';

const ThreeStepsSection = (props: ThreeStepsSectionProps) => {
  return (
    <VStack
      maxW={CONTENT_MAX_WIDTH}
      py={CONTENT_PY}
      px={CONTENT_PX}
      align='end'
      spacing={6}
    >
      <Heading w='full' textAlign='center' variant='subtitle'>
        {props.title}
      </Heading>
      {/* <Flex direction={{ base: 'column', sm: 'row' }} align='start'> */}
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={3}>
        {ThreeStepsCards(props.cards)}
      </SimpleGrid>
      {/* </Flex> */}
      {props.buttons ? <Divider /> : null}
      {props.buttons ? (
        <ButtonGroup>
          {props.buttons[1] ? (
            <CTAButton
              button={props.buttons[1]}
              variant='outline'
              iconPosition={IconPosition.left}
            />
          ) : null}
          {props.buttons[0] ? (
            <CTAButton
              button={props.buttons[0]}
              variant='solid'
              iconPosition={IconPosition.left}
            />
          ) : null}
        </ButtonGroup>
      ) : null}
    </VStack>
  );
};

export default ThreeStepsSection;
