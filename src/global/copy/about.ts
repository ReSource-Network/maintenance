import { faHeart } from '@fortawesome/free-regular-svg-icons';
import {
  faCircleNodes,
  faEarth,
  faHandHoldingDroplet,
  faHatWizard,
  faPeopleGroup,
  faSearchPlus,
} from '@fortawesome/free-solid-svg-icons';
import {
  NIBERA_10_JUNGLE_CITY_IMG,
  NIBERA_11_EARTH_PLATFORMS_IMG,
  NIBERA_1_PERSON_MOUNTAINS_IMG,
  NIBERA_2_BUG_FLOWER_EARTH_IMG,
  NIBERA_3_SPACE_SHAPES_IMG,
  NIBERA_8_FLOWERS_MOUNTAIN_SUN_IMG,
} from '../images';
import { CAREERS_HREF } from '../links';

export const ABOUT_HERO_SECTION = {
  title:
    'A decentralized, regenerative economy fueled by local resources and human potential',
  subtitle: '',
  image: NIBERA_8_FLOWERS_MOUNTAIN_SUN_IMG,
  buttons: [],
};

export const ABOUT_SLIDES = [
  {
    title: 'Together, we are champions of decentralized activism',
    description:
      'The time has come for humanity to lead ourselves. We believe that decentralization (and the technologies that support it) hold the greatest power to liberate humanity from the power structures that control us. We created ReSource as a way to use blockchain technology to create real world, people-powered solutions to pressing global issues.',
    image: NIBERA_10_JUNGLE_CITY_IMG,
    icon: faCircleNodes,
  },
  {
    title: 'We believe that community is the real hero',
    description:
      'Like Aristotle said, the whole is greater than the sum of its parts. Our protocol may provide the tools, but the strength of our economy is ultimately determined by all of you. Our alternative cryptocurrency was created with community in mind — to incentivize trade amongst neighbors and circulate wealth inside of local economies. We are proud to be an open source technology, which means that our network can be shaped by programmers and ambassadors who want to expand upon and improve it.',
    image: NIBERA_11_EARTH_PLATFORMS_IMG,
    icon: faPeopleGroup,
  },
  {
    title: 'We turn challenge into beauty & resilience',
    description:
      'We are composters of civilization, transforming dying systems into the fuel for our vision of a regenerative economy that works for everyone. We arise out of “what is” and use every resource available to co-create a more beautiful world. We know that social change happens alongside the internal and strive to alchemize every challenge that arises into personal and collective growth.',
    image: NIBERA_2_BUG_FLOWER_EARTH_IMG,
    icon: faEarth,
  },
  {
    title: 'We extend generosity & cultivate trust',
    description:
      'We believe that the practice of giving out loans at unreasonable interest rates is one of the main ways our modern financial system works against the average person. That’s why ReSource offers alternative lines of credit (what we call Lines of Trust -or- overdraft protection) to every business who joins our network. This way you can have ReSource dollars to spend on what you need when you need it, as long as you pay back your negative balance by providing goods and services to network members later on. The integrity of our system is dependent on the integrity of the individuals inside of it.',
    image: NIBERA_8_FLOWERS_MOUNTAIN_SUN_IMG,
    icon: faHandHoldingDroplet,
  },
  {
    title: 'We pursue individual empowerment to create collective abundance',
    description:
      'When people are given a chance to heal and utilize the life-giving resources that surround us, the end result is they are more creative. We believe that inside every person exists a spark of energy that desires to manifest its potential by sharing our unique gifts with others. We are here to provide access to organic food, health and wellness practitioners, and other vital resources to millions of people worldwide, so they can be their best selves. Help us usher in this new paradigm of regenerative finance that rewards and also inspires the ingenuity inherent to humankind.',
    image: NIBERA_1_PERSON_MOUNTAINS_IMG,
    icon: faHatWizard,
  },
  {
    title: 'We remember to stay grateful',
    description:
      'Despite the crises present, we acknowledge the blessings made possible by industrialization and capitalism. To get entirely “off the machine” at this point in time would be impossible. It’s with this attitude of gratitude that we introduce our complementary economic system to the world to balance out the extractive methods that have made so many companies profitable. We don’t seek to destroy that which currently ensures our survival. We are here to evolve what’s been built before us — to fill in opportunity gaps, expand access to resources, and develop a new kind of money designed to liberate human potential.',
    image: NIBERA_3_SPACE_SHAPES_IMG,
    icon: faHeart,
  },
];

export const ABOUT_HALF_GRID = [
  {
    title: 'Careers',
    description:
      'We work with the the best and the brightest social impact entrepreneurs. What you seek seeks you. See what positions are currently open at ReSource.',
    button: {
      title: 'Opportunities',
      icon: faSearchPlus,
      href: CAREERS_HREF,
      isExternal: false,
    },
  },
  {
    title: 'Get involved',
    description:
      'There are many ways to support the ReSource mission. Become an ambassador, underwriter, delegating staker or join the marketplace as a business or sole proprietor.',
    button: {
      title: 'How can I participate?',
      icon: faPeopleGroup,
      href: './#participate',
      isExternal: false,
    },
  },
];
