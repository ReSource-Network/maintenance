import {
  faAdd,
  faCircleDollarToSlot,
  faFireBurner,
  faGavel,
  faHandHoldingDollar,
  faLinesLeaning,
} from '@fortawesome/free-solid-svg-icons';
import {
  NIBERA_11_EARTH_PLATFORMS_IMG,
  NIBERA_5_SPACE_BALL_GRID_IMG,
} from '../images';
import { TextCardOrientation } from '../types';

export const SOURCE_HERO_SECTION = {
  title: 'SOURCE',
  subtitle: null,
  image: NIBERA_11_EARTH_PLATFORMS_IMG,
  buttons: null,
};

export const SOURCE_OVERVIEW_SECTION = {
  title: 'SOURCE Token',
  caption: 'overview',
  image: NIBERA_5_SPACE_BALL_GRID_IMG,
  orientation: TextCardOrientation.horizontal,
  cards: [
    {
      title: 'Fuel',
      description:
        'Merchants on ReSource pay SOURCE transaction fees for each trade',
      icon: faFireBurner,
      button: null,
    },
    {
      title: 'Underwriting',
      description:
        'Underwriters stake SOURCE to underwrite ReSource credit lines and earn rewards',
      icon: faHandHoldingDollar,
      button: null,
    },
    {
      title: 'Governance',
      description: 'Stake SOURCE and participate in protocol decision making.',
      icon: faGavel,
      button: null,
    },
  ],
};

export const SOURCE_USE_CASES_SECTION = {
  title: 'Use cases',
  orientation: TextCardOrientation.vertical,
  image: null,
  cards: [
    {
      title: 'RSD',
      description:
        'Staked SOURCE backs the credit lines of businesses trading with RSD.',
      icon: faCircleDollarToSlot,
      button: null,
    },
    {
      title: 'New stablecredits',
      description:
        'Staked SOURCE can back new units of account denominated with various values, such as different nation state currencies, the price of commodities such as coffee, or natural resources such as rainforest acreage.',
      icon: faAdd,
      button: null,
    },
    {
      title: 'Multilateral reserve',
      description:
        'Staked SOURCE can back the exchange between different mutual credit networks built using the ReSource protocol.',
      icon: faLinesLeaning,
      button: null,
    },
  ],
};
