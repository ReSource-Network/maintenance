import { faDiscord, faYoutube } from '@fortawesome/free-brands-svg-icons';
import {
  faArrowDown,
  faArrowRight,
  faBookAtlas,
  faCheck,
  faCircleDollarToSlot,
  faCircleNodes,
  faCircleNotch,
  faCode,
  faCoins,
  faExchange,
  faExternalLink,
  faFileCircleCheck,
  faHandPointer,
  faPeopleGroup,
  faPlay,
  faRocket,
  faUnlockKeyhole,
  faWheatAlt,
} from '@fortawesome/free-solid-svg-icons';
import {
  GATEIO_LOGO,
  MARKETPLACE_APP_PREVIEW_IMG,
  MATCHA_LOGO,
  MUTUAL_CREDIT_BLOG_IMG,
  NIBERA_10_JUNGLE_CITY_IMG,
  NIBERA_3_SPACE_SHAPES_IMG,
  NIBERA_4_ISOMETRIC_PATH_IMG,
  NIBERA_5_SPACE_BALL_GRID_IMG,
  NIBERA_6_PERSON_MOUNTAIN_TOP_IMG,
  PANCAKESWAP_LOGO,
  R_GLOBE_IMG,
  SHAPESHIFTING_LOGO,
  SOURCE_DAPP_PREVIEW_IMG,
  SUSHISWAP_LOGO,
  UBESWAP_LOGO,
  UNISWAP_LOGO,
  WEB3_FINANCIAL_PROTOCOL_BLOG_IMG,
  WHY_WE_BUILT_BLOG_IMG,
} from '../images';
import {
  AMBASSADOR_APPLY_FORM_HREF,
  BUSINESS_APPLY_FORM_HREF,
  DISCORD_HREF,
  GATEIO_LINK,
  HOW_IT_WORKS_LINK,
  MARKETPLACE_APP_HREF,
  MARKETPLACE_APP_LINK,
  MARKETPLACE_LINK,
  MATCHA_LINK,
  MUTUAL_CREDIT_VIDEO_HREF,
  PANCAKESWAP_LINK,
  SHAPESHIFT_LINK,
  SOURCE_DAPP_HREF,
  SUSHISWAP_LINK,
  UBESWAP_LINK,
  UNISWAP_LINK,
  WHITEPAPER_HREF,
  YOUTUBE_HREF,
} from '../links';
import { TextCardOrientation } from '../types';

// SEO
export const INDEX_SEO_TITLE = 'ReSource';
export const INDEX_SEO_DESCRIPTION = 'Protocol for merchant credit networks';

export const INDEX_HERO_SECTION = {
  title: 'Join the regenerative economy',
  subtitle:
    'Bankless infrastructure for building circular trade and mutual credit networks',
  image: NIBERA_10_JUNGLE_CITY_IMG,
  buttons: [
    {
      title: 'Marketplace',
      href: MARKETPLACE_LINK.href,
      icon: faExchange,
      isExternal: false,
    },
    {
      title: 'Staking',
      href: HOW_IT_WORKS_LINK.href,
      icon: faCoins,
      isExternal: false,
    },
  ],
};

export const INDEX_BULLETS_SECTION = {
  title: 'A new financial system for regenerative economies',
  image: R_GLOBE_IMG,
  bullets: [
    { title: 'Buy & sell with decentralized money', icon: faExchange },
    { title: 'Crypto Loans without collateral', icon: faCoins },
    { title: 'Create more circular supply chains ', icon: faCircleNotch },
  ],
  primaryButton: {
    title: 'Read the whitepaper',
    href: WHITEPAPER_HREF,
    icon: faBookAtlas,
    isExternal: true,
  },
  secondaryButton: {
    title: 'Participate',
    href: '#participate',
    icon: faArrowDown,
    isExternal: false,
  },
};

export const INDEX_ICON_CARDS = [
  { title: 'Buy and sell without FIAT', icon: faExchange },
  { title: 'Community credit approval', icon: faFileCircleCheck },
  { title: 'Crypto backed by real world assets', icon: faWheatAlt },
  { title: 'User-friendly web3 software ', icon: faHandPointer },
  { title: 'Open source technology', icon: faUnlockKeyhole },
];

export const INDEX_TABS_SECTION = {
  title: 'How will you participate?',
  tabNames: [
    'Business',
    'Ambassador',
    'Underwriter',
    'Delegating staker',
    'Developer',
  ],
  panels: [
    {
      title: 'Incorporate crypto in your business earnings',
      bullets: [
        'Increase your brand exposure & find new customers and business partners',
        'Grow your business with 0% interest credit you pay back with your own product or service',
        'Join a community of purpose driven companies ',
      ],
      image: NIBERA_10_JUNGLE_CITY_IMG,
      button: {
        title: 'Apply now',
        href: BUSINESS_APPLY_FORM_HREF,
        icon: faFileCircleCheck,
        isExternal: true,
      },
    },

    {
      title: 'Activate your network and earn crypto',
      bullets: [
        'Supplement your income with a lucrative side hustle ',
        'Share the vision of decentralized finance with your community',
        'Join the mission to create a regenerative economy',
      ],
      image: NIBERA_6_PERSON_MOUNTAIN_TOP_IMG,
      button: {
        title: 'Apply now',
        href: AMBASSADOR_APPLY_FORM_HREF,
        icon: faArrowRight,
        isExternal: true,
      },
    },

    {
      title: 'Earn crypto by helping businesses grow',
      bullets: [
        'Base earnings on community growth, not extraction',
        'Transcend traditional credit scores, and gain access to a plethora of new risk minimizing trust factors',
        'Allocate capital to projects that make a difference ',
      ],
      image: NIBERA_4_ISOMETRIC_PATH_IMG,
      button: {
        title: 'Underwrite ReFi',
        href: DISCORD_HREF,
        icon: faDiscord,
        isExternal: true,
      },
    },

    {
      title: 'Be the SOURCE for the ReFi economy',
      bullets: [
        'Build a Winterproof  portfolio backed by real world business activity',
        'Earn passive rewards by staking to support your community',
        'Become a stakeholder and participate in governance',
      ],
      image: NIBERA_3_SPACE_SHAPES_IMG,
      button: {
        title: 'Stake into ReFi',
        href: SOURCE_DAPP_HREF,
        icon: faCircleDollarToSlot,
        isExternal: true,
      },
    },

    {
      title: 'Build the roadmap',
      bullets: [
        'Earn SOURCE bounties  for new models created and problems solved',
        'Help develop novel win-win financial instruments',
        'Gain first-of-its-kind experience in real world crypto',
      ],
      image: NIBERA_5_SPACE_BALL_GRID_IMG,
      button: {
        title: 'Coming soon...',
        href: 'disabled',
        icon: faCode,
        isExternal: false,
      },
    },
  ],
};

export const INDEX_VIDEO_SECTION = {
  title: 'How it works',
  description: null,
  videoTitle: 'Mutual credit video',
  videoSrc: MUTUAL_CREDIT_VIDEO_HREF,
  buttons: [
    {
      title: 'Watch the video',
      href: MUTUAL_CREDIT_VIDEO_HREF,
      isExternal: true,
      icon: faPlay,
    },
    { title: 'YouTube', href: YOUTUBE_HREF, isExternal: true, icon: faYoutube },
  ],
};

export const INDEX_TEXT_CARDS = {
  title: 'Core Principles',
  caption: '',
  image: NIBERA_3_SPACE_SHAPES_IMG,
  orientation: TextCardOrientation.vertical,
  cards: [
    {
      title: 'Mutual Credit ',
      description:
        'Imagine a world where debt has no crushing interest rates and where finance invests in community rather than extracts from it. This reality is possible with ReSource. Mutual Credit is the backbone of our protocol which enables communities to access credit from each other as a complement to our existing financial system.',
      icon: faExchange,
    },
    {
      title: 'Circular Design ',
      description:
        'The ReSource protocol is designed for people to build a more circular, self-sustaining economy from the resources and skills they already have, not dependent upon their existing access to credit or outside investments.',
      icon: faCircleNotch,
    },
    {
      title: 'Decentralized Governance',
      description:
        'Sharing the power by creating viable alternatives is our best bet at creating a world where people and projects are nourished by equal opportunity. We commit to the principles of decentralization as the north star guiding our protocol into an era of cooperative ownership.',
      icon: faCircleNodes,
    },
  ],
};

export const INDEX_CTA_GRID_ITEMS = [
  {
    title: 'Join the marketplace',
    description:
      'The world’s first trade network where purpose-driven businesses can grow using crypto',
    button: {
      title: 'Apply now',
      href: BUSINESS_APPLY_FORM_HREF,
      icon: faCheck,
      isExternal: true,
    },
  },
  {
    title: 'Get SOURCE',
    description:
      'SOURCE, the cryptocurrency powering our decentralized circular economy, is available here:',
    button: {
      title: MARKETPLACE_APP_LINK.title,
      href: MARKETPLACE_LINK.href,
      isExternal: true,
      icon: faRocket,
    },
  },
  {
    title: 'Stake SOURCE',
    description: 'Earn rewards by supporting small and medium-sized businesses',
    button: {
      title: 'Launch dApp',
      href: SOURCE_DAPP_HREF,
      isExternal: true,
      icon: faExternalLink,
    },
  },
  {
    title: 'Engage in our community',
    description:
      'Follow us on our many social channels and join the ReSource ReFi conversation',
    button: {
      title: 'Community links',
      href: '#community',
      isExternal: false,
      icon: faPeopleGroup,
    },
  },
];

export const TRADE_SOURCE_IMAGE_LINKS = [
  { cta: SUSHISWAP_LINK, image: SUSHISWAP_LOGO },
  { cta: UNISWAP_LINK, image: UNISWAP_LOGO },
  { cta: PANCAKESWAP_LINK, image: PANCAKESWAP_LOGO },
  { cta: MATCHA_LINK, image: MATCHA_LOGO },
  { cta: UBESWAP_LINK, image: UBESWAP_LOGO },
  { cta: GATEIO_LINK, image: GATEIO_LOGO },
  { cta: SHAPESHIFT_LINK, image: SHAPESHIFTING_LOGO },
];

export const INDEX_PRODUCTS_SECTION = {
  title: 'Live products',
  tabNames: [
    {
      title: 'Marketplace',
      description:
        'Buy and sell in our global trade network and discover a whole new way to make money.',
    },
    {
      title: 'Staking dApp',
      description:
        'Earn staking rewards, stemming from real-world business activity',
    },
  ],
  panels: [
    { image: MARKETPLACE_APP_PREVIEW_IMG, href: MARKETPLACE_APP_HREF },
    { image: SOURCE_DAPP_PREVIEW_IMG, href: SOURCE_DAPP_HREF },
  ],
};

export const INDEX_TESTIMONIES = {
  title: 'Testimonies',
  testimonies: [
    {
      quote:
        'ReSource perks have been a huge asset to the health and wellbeing of our team. We are really close again. No one is calling out sick. The exchange is healthy and symbiotic.',
      author: {
        image: {
          light: '',
          dark: '',
          alt: '',
        },
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

export const INDEX_BLOG_PREVIEW = {
  title: 'Recent blogs',
  blogs: [
    {
      title: 'What is Mutual Credit?',
      description:
        'Mutual Credit shouldn’t be confused with Mutual Banking, Credit Unions, or Cooperative Banking.',
      image: MUTUAL_CREDIT_BLOG_IMG,
      href: 'https://www.blog.resource.finance/chapter-1-what-is-mutual-credit',
      alt: 'together we have force type',
    },
    {
      title: "ReSource as Web3's Financial Interprotocol Layer",
      description:
        'DLT protocols forming a Mutual Credit trading network could access each other’s Resources, while paying in kind.',
      image: WEB3_FINANCIAL_PROTOCOL_BLOG_IMG,
      href: 'https://www.blog.resource.finance/resource-as-web3s-financial-interprotocol-layer',
      alt: '3d blockchain illustration',
    },
    {
      title: 'Why we have built the ReSource Protocol',
      description:
        'If Mutual Credit systems are so consumer friendly, why haven’t they already out-competed established credit providers?',
      image: WHY_WE_BUILT_BLOG_IMG,
      href: 'https://www.blog.resource.finance/chapter-2-why-we-have-built-the-resource-protocol',
      alt: 'person sketching',
    },
  ],
};
