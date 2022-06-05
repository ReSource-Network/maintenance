import {
  faArrowRight,
  faCheckCircle,
  faCreditCard,
  faExchange,
  faFileCircleCheck,
  faLaptop,
  faPlay,
  faSeedling,
  faUserGroup,
  faWallet,
} from '@fortawesome/free-solid-svg-icons';
import {
  NIBERA_12_PEOPLE_PLATFORMS_IMG,
  NIBERA_1_PERSON_MOUNTAINS_IMG,
  NIBERA_8_FLOWERS_MOUNTAIN_SUN_IMG,
} from '../images';
import {
  ANDREA_INTERVIEW_VIDEO_HREF,
  BUSINESS_APPLY_FORM_HREF,
  NIMESIA_SORCAR_VIDEO_HREF,
} from '../links';
import { TextCardOrientation } from '../types';

export const PRACTITIONER_HERO = {
  title: 'Where Health Creates Wealth',
  subtitle:
    'The world’s first marketplace where purpose-driven businesses can trade with health & wellness providers using crypto',
  image: NIBERA_1_PERSON_MOUNTAINS_IMG,
  buttons: [
    {
      title: 'Apply now',
      href: BUSINESS_APPLY_FORM_HREF,
      isExternal: true,
      icon: faFileCircleCheck,
    },
  ],
};

export const PRACTITIONER_SIMPLE_SECTION = {
  title: 'A healthier economy starts with a healthier community',
  description:
    'With ReSource, the services you offer as a health and wellness practitioner are the foundation of our marketplace. Connect with new customers on the network who are looking to optimize the health of their people and society at large. Earn crypto to help grow your business while building a healthier community.',
  image: NIBERA_12_PEOPLE_PLATFORMS_IMG,
  button: {
    title: "Hear Nemesia's Story",
    href: NIMESIA_SORCAR_VIDEO_HREF,
    icon: faPlay,
    isExternal: true,
  },
};

export const PRACTITIONER_TESTIMONIES = {
  title: 'Testimonies',
  testimonies: [
    {
      author: {
        name: 'Andrea Duvall',
        image: null,
        description: 'Founder, Mother Earth Foods, Asheville',
      },
      quote:
        'ReSource perks have been a huge asset to the health and wellbeing of our team. We are really close again. No one is calling out sick. The exchange is healthy and symbiotic.',
    },
    {
      author: {
        name: 'Jared Covarrubias, DC',
        image: null,
        description: 'Founder, Atlas Integrative Health, Austin',
      },
      quote:
        'Resource Network is exactly what I was looking for. It’s an excellent way to continue to market and grow my business.',
    },
    {
      quote:
        'ReSource’s crypto backed barter system makes me feel safer if fiat systems collapse and have a sense of security in the world as a woman, mother, doctor and wife.',
      author: {
        image: null,
        name: 'Sarah Fields, LAC',
        description: 'Owner, Flower Mountain Acupuncture',
      },
    },
  ],
};

export const PRACTITIONER_TEXT_CARDS = {
  title: 'Meet the future of health care',
  caption:
    'Companies are using ReSource to offer health and wellness services to their employees when traditional insurance is not enough',
  image: NIBERA_8_FLOWERS_MOUNTAIN_SUN_IMG,
  orientation: TextCardOrientation.horizontal,
  buttons: [
    {
      title: 'Apply',
      href: BUSINESS_APPLY_FORM_HREF,
      icon: faCheckCircle,
      isExternal: true,
    },
    {
      title: "Hear Andrea's story",
      href: ANDREA_INTERVIEW_VIDEO_HREF,
      icon: faPlay,
      isExternal: true,
    },
  ],
  cards: [
    {
      title: '',
      icon: faSeedling,
      description: 'Invest in services to scale and grow your business',
      button: null,
    },
    {
      title: '',
      icon: faCreditCard,
      description: 'Buy what you need on credit without any interest',
      button: null,
    },
    {
      title: '',
      icon: faUserGroup,
      description: 'Access entirely new customers and markets for free',
      button: null,
    },
  ],
};

export const PRACTITIONER_ICON_CARDS = {
  title: 'Crypto, but simple and for the real world',
  description: [
    'Health and wellness services, marketing, accounting, and more - we’ve got it all on our network. But instead of using dollars to buy these everyday items, you purchase them with ReSource Dollars - the regenerative currency for a more circular economy.',
    'Discover how far you can go when barter and cryptocurrency are combined to create a whole new way of growing your business that aligns with your values and builds community through trade. Make more than just money with ReSource.',
  ],
  button: {
    title: 'Apply now',
    href: BUSINESS_APPLY_FORM_HREF,
    icon: faArrowRight,
    isExternal: true,
  },
  cards: [
    {
      title: 'User-friendly interface',
      icon: faLaptop,
    },
    {
      title: 'Easy login crypto wallet',
      icon: faWallet,
    },
    {
      title: 'Cashless transactions',
      icon: faExchange,
    },
  ],
};
