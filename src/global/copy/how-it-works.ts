import { faDiscord, faYoutube } from '@fortawesome/free-brands-svg-icons';
import {
  faBookAtlas,
  faCircleNodes,
  faCoins,
  faHammer,
  faPlay,
  faRocket,
  faSeedling,
  faTractor,
  faTree,
} from '@fortawesome/free-solid-svg-icons';
import {
  HIW_RAND_A_IMG,
  HIW_RAND_B_IMG,
  HIW_RAND_C_IMG,
  HIW_RAND_D_IMG,
  NIBERA_4_ISOMETRIC_PATH_IMG,
  NIBERA_5_SPACE_BALL_GRID_IMG,
  R_GLOBE_IMG,
} from '../images';
import {
  ARTICLES,
  DISCORD_HREF,
  DISCORD_LINK,
  MARKETPLACE_APP_LINK,
  PROTOCOL_EXPLAINED_VIDEO_HREF,
  SOURCE_DAPP_HREF,
  STAKING_APP_LINK,
  UBESWAP_LINK,
  YOUTUBE_HREF,
} from '../links';
import { TextCardOrientation } from '../types';

export const HIW_HERO_SECTION = {
  title:
    'A Web3-native monetary system backed by goods, services, and human potential',
  subtitle:
    'Powered by distributed multilateral exchange and credit clearing networks ',
  image: NIBERA_4_ISOMETRIC_PATH_IMG,
  buttons: [
    {
      title: 'Get SOURCE',
      href: '#get-source',
      icon: faCoins,
      isExternal: false,
    },
    {
      title: 'Stake SOURCE',
      href: STAKING_APP_LINK.href,
      icon: faHammer,
      isExternal: true,
    },
    {
      title: 'Underwrite',
      href: DISCORD_HREF,
      icon: faDiscord,
      isExternal: true,
    },
  ],
};

export const HIW_SQUARE_CARDS_SECTION = {
  cards: [
    {
      title: 'Mutual Credit Clearing',
      description:
        'Interest-free credit lines enable businesses to trade with each other on credit, without upfront cash, while settling debts in-kind.',
      image: HIW_RAND_A_IMG,
    },
    {
      title: 'Autonomous Stability',
      description:
        'ReSource Network Currencies achieve market-derived value stability without being pegged to external assets such as fiat currencies.',
      image: HIW_RAND_B_IMG,
    },
    {
      title: 'Distributed Risk Management',
      description:
        'Credit and network risks are assessed, priced, and managed by a distributed network of Underwriters.',
      image: HIW_RAND_C_IMG,
    },
    {
      title: 'Decentralized Credit',
      description:
        'ReSource does not only disarms intermediaries and custodians, but decentralizes the logic of credit itself, effectively removing the creditor from the equation.',
      image: HIW_RAND_D_IMG,
    },
  ],
};

export const HIW_TEXT_CARD_SECTION = {
  title: 'A Decentralized Monetary System',
  caption: 'How it works',
  image: NIBERA_5_SPACE_BALL_GRID_IMG,
  orientation: TextCardOrientation.vertical,
  cards: [
    {
      title: 'Grassroots liquidity',
      description:
        'ReSource allows currency to arise as a result of trade, instead of it being  a requisite for it - This allows regenerative, circular economies to emerge without being dependent on external capital or state actors.',
      icon: faTree,
    },
    {
      title: 'Endogenous supply',
      description:
        'The amount of currency in ReSource trading networks expands and contracts to accommodate market activity - Its supply is always matched with demand.',
      icon: faSeedling,
    },
    {
      title: 'Decentralized issuance',
      description:
        'Currency on ReSource is minted and burned by the market itself to meet its needs.  It’s neither centrally issued, subject to arbitrary algorithmic constraints, or pegged to fiat currencies.',
      icon: faCircleNodes,
    },
  ],
};

export const HIW_VIDEO_SECTION = {
  bigButton: true,
  title: 'How it works',
  description: '',
  videoTitle: 'The ReSource protocol explained',
  videoSrc: PROTOCOL_EXPLAINED_VIDEO_HREF,
  buttonA: {
    title: 'Watch the video',
    href: PROTOCOL_EXPLAINED_VIDEO_HREF,
    isExternal: true,
    icon: faPlay,
  },
  buttonB: {
    title: 'YouTube',
    href: YOUTUBE_HREF,
    isExternal: true,
    icon: faYoutube,
  },
};

export const HIW_CTA_GRID_ITEMS = [
  {
    title: 'Get SOURCE',
    description: 'Become a stakeholder in the next wave of crypto adoption',
    button: MARKETPLACE_APP_LINK,
  },
  {
    title: 'Stake SOURCE',
    description: 'Back real world business credit lines',
    button: {
      title: 'Stake',
      href: SOURCE_DAPP_HREF,
      icon: faCoins,
      isExternal: true,
    },
  },
  {
    title: 'Farm SOURCE',
    description: 'Earn rewards for providing organic liquidity',
    button: {
      title: 'Farm',
      href: UBESWAP_LINK.href,
      isExternal: true,
      icon: faTractor,
    },
  },
  {
    title: 'Join the community',
    description: 'Help us build the future of bankless communities',
    button: DISCORD_LINK,
  },
];

export const HIW_BLOG_PREVIEW = {
  title: 'ReSource in the media',
  blogs: ARTICLES,
};

export const HIW_STATS_PREVIEW = {
  stats: [
    { title: 'Total Value Locked', amount: 0 },
    { title: 'Credit Underwritten', amount: 1000000 },
    { title: 'APY', amount: 0 },
  ],
};

export const HIW_THREE_STEPS_SECTION = {
  title: 'Protocol Stages',
  cards: [
    {
      title: 'Bennu',
      description: 'Stake to back the credits of US network of merchants',
    },
    {
      title: 'Raven',
      description:
        'Automated underwriting pools separated by risk, network, and other parameters ',
    },
    { title: 'Swan', description: 'Launch your own stablecredit network' },
  ],
};

export const HIW_SIMPLE_SECTION = {
  title: 'Stake into the real world',
  description:
    'ReSource staking rewards stem from the activity of real world businesses like startups, brick and mortar shops, SaaS providers, and utility companies. Even if crypto enters deep winter, BTC goes sideways and DeFi contracts, ReSource staking pools will remain unaffected.',
  image: R_GLOBE_IMG,
  buttons: [
    {
      title: 'Learn more',
      href: SOURCE_DAPP_HREF,
      isExternal: true,
      icon: faBookAtlas,
    },
    {
      title: 'Launch dApp',
      href: SOURCE_DAPP_HREF,
      isExternal: true,
      icon: faRocket,
    },
  ],
};
