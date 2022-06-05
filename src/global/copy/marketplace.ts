import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import {
  faArrowDown,
  faArrowRight,
  faCheck,
  faCheckCircle,
  faCircleNotch,
  faCoins,
  faExchange,
  faFileCircleCheck,
  faPeopleGroup,
  faPlay,
  faRocket,
  faSeedling,
  faSpa,
} from '@fortawesome/free-solid-svg-icons';
import {
  ASHEVILLE_MARKETPLACE_PREVIEW_IMG,
  AUSTIN_MARKETPLACE_PREVIEW_IMG,
  CHATTANOOGA_MARKETPLACE_PREVIEW_IMG,
  NIBERA_10_JUNGLE_CITY_IMG,
  NIBERA_11_EARTH_PLATFORMS_IMG,
  NIBERA_12_PEOPLE_PLATFORMS_IMG,
  NIBERA_1_PERSON_MOUNTAINS_IMG,
  NIBERA_2_BUG_FLOWER_EARTH_IMG,
  NIBERA_3_SPACE_SHAPES_IMG,
  NIBERA_6_PERSON_MOUNTAIN_TOP_IMG,
  NIBERA_8_FLOWERS_MOUNTAIN_SUN_IMG,
} from '../images';
import {
  AMBASSADOR_APPLY_FORM_HREF,
  AMBASSADOR_LINK,
  ANDREA_INTERVIEW_VIDEO_HREF,
  BUSINESS_APPLY_FORM_HREF,
  MARKETPLACE_APP_ASHEVILLE_HREF,
  MARKETPLACE_APP_AUSTIN_HREF,
  MARKETPLACE_APP_CHATTANOOGA_HREF,
  MARKETPLACE_APP_HREF,
  NIMESIA_SORCAR_VIDEO_HREF,
} from '../links';
import { TextCardOrientation } from '../types';

export const MARKETPLACE_HERO = {
  title: 'Build a more circular economy with a mutual credit community',
  subtitle:
    'The world’s first marketplace where purpose-driven businesses can trade with one another using crypto',
  image: NIBERA_12_PEOPLE_PLATFORMS_IMG,
  buttons: [
    {
      title: 'Join the new economy',
      href: BUSINESS_APPLY_FORM_HREF,
      isExternal: true,
      icon: faRocket,
    },
    {
      title: 'Learn more',
      href: '#not-your-bank-account',
      isExternal: false,
      icon: faArrowDown,
    },
  ],
};

export const MARKETPLACE_TEXT_CARDS = {
  title: 'It’s time to build a better way',
  caption:
    'Participate in a marketplace where currency is actually backed by the businesses who use it. Make more than just dollars - make ReSource dollars...',
  image: NIBERA_8_FLOWERS_MOUNTAIN_SUN_IMG,
  orientation: TextCardOrientation.horizontal,
  cards: [
    {
      title: 'For your people',
      description:
        'Give unique perks and benefits to your team by sending them ReSource Dollars',
      icon: faSpa,
      button: null,
    },
    {
      title: 'For your business',
      description:
        'Grow your business with services like marketing, accounting, and more',
      icon: faSeedling,
      button: null,
    },
    {
      title: 'For your community',
      description:
        'Connect with other businesses passionate about finding a better way to grow their local economies',
      icon: faCircleNotch,
      button: {
        title: 'Build with us',
        href: BUSINESS_APPLY_FORM_HREF,
        icon: faArrowRight,
        isExternal: true,
      },
    },
  ],
};

export const MARKETPLACE_ICON_CARDS = [
  { title: 'Find customers and grow your business', icon: faSeedling },
  { title: 'Invest in your employees and community', icon: faPeopleGroup },
  { title: 'Support a human-centered economy', icon: faCircleNotch },
  { title: 'Add crypto to your business growth', icon: faBitcoin },
  { title: 'Start your journey into the future of finance', icon: faRocket },
];

export const MARKETPLACE_SIMPLE_SECTION = {
  id: 'not-your-bank-account',
  title:
    'You are not your balance sheet, your bottom line, or your bank account.',
  description:
    'Discover how far you can go when barter and cryptocurrency are combined to create a whole new way of growing your business that aligns with your values and builds community through trade. You can make even more than just money with ReSource.',
  image: NIBERA_1_PERSON_MOUNTAINS_IMG,
  button: {
    title: 'Watch the video',
    href: NIMESIA_SORCAR_VIDEO_HREF,
    isExternal: true,
    icon: faPlay,
  },
};

export const MARKETPLACE_TESTIMONIES = {
  title: 'Testimonies',
  testimonies: [
    {
      quote:
        'ReSource perks have been a huge asset to the health and wellbeing of our team. We are really close again. No one is calling out sick. The exchange is healthy and symbiotic.',
      author: {
        image: { light: '', dark: '', alt: '' },
        name: 'Andrea Duvall',
        description: 'Founder, Mother Earth Foods, Asheville',
      },
    },
    {
      quote:
        'Resource Network is exactly what I was looking for. It’s an excellent way to continue to market and grow my business.',
      author: {
        image: {
          light: '',
          dark: '',
          alt: '',
        },
        name: 'Jared Covarrubias, DC',
        description: 'Founder, Atlas Integrative Health, Austin',
      },
    },
    {
      quote:
        'ReSource’s crypto backed barter system makes me feel safer if fiat systems collapse and have a sense of security in the world as a woman, mother, doctor and wife.',
      author: {
        image: {
          light: '',
          dark: '',
          alt: '',
        },
        name: 'Sarah Fields, LAC',
        description: 'Owner, Flower Mountain Acupuncture',
      },
    },
  ],
};

export const MARKETPLACE_TABS_SECTION = {
  title: 'Marketplace roles',
  tabNames: [
    'Business owners',
    'Entrepreneurs',
    'Creatives',
    'Non-profits',
    'Ambassadors',
  ],
  panels: [
    {
      title: 'Buy and sell with a currency made for you',
      bullets: [
        'Increase sales in our network of like-minded businesses',
        'Expand your reach into new markets and explore new opportunities',
        'Give your team the gift of local food and wellness services ',
      ],
      image: NIBERA_10_JUNGLE_CITY_IMG,
      button: {
        title: 'Get started today',
        href: BUSINESS_APPLY_FORM_HREF,
        isExternal: true,
        icon: faArrowRight,
      },
    },
    {
      title: 'Build your business with community support',
      bullets: [
        'Increase your sales potential with new markets and networks',
        'Buy business growth services without spending your USD',
        'Build your business for the future economy from the beginning',
      ],
      image: NIBERA_3_SPACE_SHAPES_IMG,
      button: {
        title: 'Join for free',
        href: BUSINESS_APPLY_FORM_HREF,
        isExternal: true,
        icon: faArrowRight,
      },
    },
    {
      title: 'Connect with others around the world',
      bullets: [
        'Find customers and partnership opportunities in new places',
        'Explore new ways to build your portfolio and skillsets',
        'Collaborate with other creatives in the new economic system',
      ],
      image: NIBERA_11_EARTH_PLATFORMS_IMG,
      button: {
        title: 'Join us',
        href: BUSINESS_APPLY_FORM_HREF,
        isExternal: true,
        icon: faArrowRight,
      },
    },
    {
      title: 'Support your team and volunteers with benefits',
      bullets: [
        'Give access to local food and wellness services to those who help you grow',
        'Create unique compensation structures for your community',
        'Receive donations in ReSource Dollars to support local business owners',
      ],
      image: NIBERA_2_BUG_FLOWER_EARTH_IMG,
      button: {
        title: 'Sign up',
        href: BUSINESS_APPLY_FORM_HREF,
        isExternal: true,
        icon: faArrowRight,
      },
    },
    {
      title: 'Earn rewards for growing the community',
      bullets: [
        'Refer others to join ReSource and build this new economy, together',
        'Earn cryptocurrency for all active referrals',
        'Get access to opportunities such as launching your own network',
      ],
      image: NIBERA_6_PERSON_MOUNTAIN_TOP_IMG,
      button: {
        title: 'Learn more',
        href: AMBASSADOR_LINK.href,
        isExternal: false,
        icon: faArrowRight,
      },
    },
  ],
};

export const MARKETPLACE_THREE_STEPS_SECTION = {
  title: 'How it works',
  cards: [
    {
      description:
        'Apply for a ReSource storefront and get 0% interest credit line',
    },
    { description: 'Buy and sell in the marketplace using crypto' },
    { description: 'Repay credit used with sales in the marketplace' },
  ],
  buttons: [
    {
      title: 'Apply now',
      href: BUSINESS_APPLY_FORM_HREF,
      icon: faFileCircleCheck,
      isExternal: true,
    },
  ],
};

export const MARKETPLACE_CTA_GRID = [
  {
    title: 'Grow your business',
    description:
      'ReSource is building the future of local economies where everyone wins',
    button: {
      title: 'Marketplace',
      href: MARKETPLACE_APP_HREF,
      icon: faExchange,
      isExternal: true,
    },
  },
  {
    title: 'Become an ambassador',
    description:
      'Spread the values of local growth and mutual support in your community',
    button: {
      title: 'Apply',
      href: AMBASSADOR_APPLY_FORM_HREF,
      icon: faCheckCircle,
      isExternal: true,
    },
  },
  {
    title: 'Join the community',
    description:
      'Follow us on our social media channels to see how we are changing the world',
    button: {
      title: 'Join',
      href: '#community',
      icon: faPeopleGroup,
      isExternal: false,
    },
  },
  {
    title: 'Get SOURCE',
    description:
      'SOURCE, the underlying cryptocurrency of ReSource, is available on these exchanges',
    button: {
      title: 'Trade',
      href: MARKETPLACE_APP_HREF,
      icon: faCoins,
      isExternal: true,
    },
  },
];

export const MARKETPLACE_PRODUCTS = {
  title: 'Marketplaces',
  tabNames: [
    {
      title: 'ReSource Asheville',
      description:
        'Check out the hundreds of businesses using ReSource in this small Appalachian city',
    },
    {
      title: 'ReSource Austin',
      description:
        'View who’s “keeping it weird” in Austin with our revolutionary new economic system',
    },
    {
      title: 'ReSource Chattanooga',
      description:
        'Look at who’s using ReSource at the intersection of three states and the future',
    },
  ],
  panels: [
    {
      image: ASHEVILLE_MARKETPLACE_PREVIEW_IMG,
      href: MARKETPLACE_APP_ASHEVILLE_HREF,
    },
    {
      image: AUSTIN_MARKETPLACE_PREVIEW_IMG,
      href: MARKETPLACE_APP_AUSTIN_HREF,
    },
    {
      image: CHATTANOOGA_MARKETPLACE_PREVIEW_IMG,
      href: MARKETPLACE_APP_CHATTANOOGA_HREF,
    },
  ],
};

export const MARKETPLACE_VIDEO_SECTION = {
  title: 'Invest in your business, your people, and your community',
  description:
    'Joining ReSource gives us the means to create local economic communities focused on supporting prosperous businesses, healthy people, and true financial autonomy. This is because the ReSource Dollar was designed to be a currency for giving. Use it to buy local goods and services for you or your team, and those ReSource Dollars will come back around to you.',
  video: {
    title:
      'Andrea, of Mother Earth Food, uses ReSource to give health and wellness services to her team',
    src: ANDREA_INTERVIEW_VIDEO_HREF,
  },
  buttons: [
    {
      title: 'Hear Andrea’s story',
      href: ANDREA_INTERVIEW_VIDEO_HREF,
      icon: faPlay,
      isExternal: true,
    },
    {
      title: 'Join us',
      href: BUSINESS_APPLY_FORM_HREF,
      icon: faCheck,
      isExternal: true,
    },
  ],
};
