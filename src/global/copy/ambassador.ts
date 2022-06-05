import {
  faArrowDown,
  faCheckCircle,
  faCompass,
  faExternalLink,
  faFileCircleCheck,
  faGlobeAmericas,
  faLaptopHouse,
  faPalette,
  faRocket,
  faSeedling,
  faShieldVirus,
  faTractor,
} from '@fortawesome/free-solid-svg-icons';
import {
  NIBERA_1_PERSON_MOUNTAINS_IMG,
  NIBERA_6_PERSON_MOUNTAIN_TOP_IMG,
} from '../images';
import {
  AMBASSADOR_APPLY_FORM_HREF,
  BUSINESS_APPLY_FORM_HREF,
  MARKETPLACE_APP_HREF,
} from '../links';

export const AMBASSADOR_HERO = {
  title: 'ReSource Ambassadors',
  subtitle: 'Join the mission in growing a more regenerative, circular economy',
  image: NIBERA_6_PERSON_MOUNTAIN_TOP_IMG,
  buttons: [
    {
      title: 'Apply now',
      href: AMBASSADOR_APPLY_FORM_HREF,
      isExternal: true,
      icon: faRocket,
    },
    {
      title: 'Learn more',
      href: '#grow-with-us',
      isExternal: false,
      icon: faArrowDown,
    },
  ],
};

export const AMBASSADOR_ICON_CARDS_SECTION = {
  id: 'grow-with-us',
  title: 'Grow with us',
  subtitle:
    'Earn crypto by inviting businesses who trade on the marketplace, including:',
  cards: [
    { title: 'Local food hubs & farms', icon: faTractor },
    { title: 'Business growth & support services ', icon: faSeedling },
    { title: 'People & planet friendly products', icon: faGlobeAmericas },
    { title: 'Freelancers & sole proprietors', icon: faLaptopHouse },
    { title: 'Health and wellness goods & services', icon: faShieldVirus },
    { title: 'Makers, artists, & musicians ', icon: faPalette },
  ],
};

export const AMBASSADOR_THREE_STEPS_SECTION = {
  title: 'How the ambassador program works',
  cards: [
    { description: 'Apply to become an ambassador' },
    {
      description:
        'Invite businesses in your network to join ReSource using our ReSET program and other marketing tools ',
    },
    { description: 'Get paid after referrals make their first transaction' },
  ],
  buttons: [
    {
      title: 'Start now',
      href: AMBASSADOR_APPLY_FORM_HREF,
      icon: faFileCircleCheck,
      isExternal: true,
    },
    {
      title: 'Visit the marketplace',
      href: MARKETPLACE_APP_HREF,
      icon: faExternalLink,
      isExternal: true,
    },
  ],
};

export const AMBASSADOR_SIMPLE_SECTION = {
  title: 'Empowering ambassadors with the ReSET Program',
  description:
    'Considering joining us in sharing the ReSource vision with your community? We created the ReSET program to supercharge ambassadors with marketing tools, community calls, and other support from our team members so you can be better suited to grow ReSource and earn while doing it.',
  image: NIBERA_1_PERSON_MOUNTAINS_IMG,
  button: {
    title: 'Register here',
    href: AMBASSADOR_APPLY_FORM_HREF,
    isExternal: true,
    icon: faCheckCircle,
  },
};

export const AMBASSADOR_CTA_HALF_GRID = [
  {
    title: 'Visit the marketplace',
    description:
      'ReSource is building a network of local, blockchain based economies. Check out the 200+ other businesses already engaging in future barter.',
    button: {
      title: 'Explore',
      href: MARKETPLACE_APP_HREF,
      icon: faCompass,
      isExternal: true,
    },
  },
  {
    title: 'Join the conversation',
    description:
      'Follow us on social media to learn more about how our community is creating change in the world',
    button: {
      title: 'Apply to join',
      href: BUSINESS_APPLY_FORM_HREF,
      icon: faCheckCircle,
      isExternal: true,
    },
  },
];
