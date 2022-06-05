import {
  Divider,
  Flex,
  Stat,
  StatGroup,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react';
import {
  CONTENT_MAX_WIDTH,
  CONTENT_PX,
  CONTENT_PY,
} from '../../global/constants';
import { ThreeStatsSectionProps } from '../../global/types';

export const numberWithCommas = (num: number) =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const ThreeStatsSection = (props: ThreeStatsSectionProps) => {
  return (
    <Flex
      w='full'
      py={CONTENT_PY}
      px={CONTENT_PX}
      maxW={CONTENT_MAX_WIDTH}
      direction='row'
    >
      <StatGroup flexDirection='row' w='full' textAlign='center'>
        <Divider orientation='vertical' />
        {props.stats.map((stat) => (
          <>
            <Stat>
              <StatLabel textStyle='caption'>{stat.title}</StatLabel>
              <StatNumber
                textStyle='subtitle'
                opacity={stat.amount === 0 ? '0.67' : 1}
              >
                {stat.amount === 0
                  ? 'coming soon..'
                  : numberWithCommas(stat.amount)}
              </StatNumber>
            </Stat>
            <Divider orientation='vertical' />
          </>
        ))}
      </StatGroup>
    </Flex>
  );
};

export default ThreeStatsSection;
