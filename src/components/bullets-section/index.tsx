import BulletSectionDescription from '@/components/bullets-section/description';
import BulletSectionImage from '@/components/bullets-section/image';
import CTAButton from '@/components/cta-button';
import { ButtonGroup, Flex, Heading } from '@chakra-ui/react';
import {
  CONTENT_MAX_WIDTH,
  CONTENT_PX,
  CONTENT_PY,
} from '../../global/constants';
import { BulletsSectionProps, IconPosition } from '../../global/types';
import BulletSectionList from './bullet';

const BulletsSection = (props: BulletsSectionProps) => {
  return (
    <Flex
      w='full'
      maxW={CONTENT_MAX_WIDTH}
      py={CONTENT_PY}
      px={CONTENT_PX}
      direction={['row-reverse', null, 'row', null, null, null]}
      align='center'
    >
      <Flex flex={2} align='start' justify='center' direction='column'>
        <Heading variant='subtitle' zIndex='text'>
          {' '}
          {props.title}{' '}
        </Heading>

        {props.bullets ? BulletSectionList(props.bullets) : null}
        {props.description ? BulletSectionDescription(props.description) : null}

        <ButtonGroup>
          <CTAButton
            button={props.primaryButton}
            variant='solid'
            iconPosition={IconPosition.left}
          />
          {props.secondaryButton ? (
            <CTAButton
              button={props.secondaryButton}
              variant='outline'
              iconPosition={IconPosition.left}
            />
          ) : null}
        </ButtonGroup>
      </Flex>

      {BulletSectionImage(props.image)}
    </Flex>
  );
};

export default BulletsSection;
