import {
  faBalanceScale,
  faCheck,
  faCircleNodes,
  faCoins,
  faDroplet,
  faSeedling,
} from '@fortawesome/free-solid-svg-icons';
import {
  AMBASSADOR_LINK,
  BUSINESS_APPLY_FORM_HREF,
  SOURCE_HREF,
} from '../links';
import { CTAGridProps, TextCardOrientation } from '../types';

export const RSD_OVERVIEW_SECTION = {
  title: 'ReSource Dollars',
  caption: 'overview',
  image: null,
  cards: [
    {
      title: 'Autonomous stability',
      description:
        'RSD achieves market-derived value stability without being pegged to external assets such as fiat currencies.',
      icon: faBalanceScale,
      button: null,
    },
    {
      title: 'Grassroots liquidity',
      description:
        'RSD arises as a result of trade, instead of it being a requisite for it - this allows regenerative economies to emerge without being dependent on external capital.',
      icon: faDroplet,
      button: null,
    },
    {
      title: 'Decentralized issuance',
      description:
        'RSD is minted and burned by the market itself to meet its needs. It’s neither centrally issued, subject to arbitrary algorithmic constraints, or pegged to fiat currencies.',
      icon: faCircleNodes,
      button: null,
    },
  ],
  orientation: TextCardOrientation.vertical,
};

export const RSD_CTA_GRID: CTAGridProps = {
  items: [
    {
      title: 'Join the marketplace',
      description: '',
      button: {
        title: 'Apply',
        href: BUSINESS_APPLY_FORM_HREF,
        icon: faCheck,
        isExternal: true,
      },
    },
    {
      title: 'Grow the network',
      description: '',
      button: {
        title: 'Ambassadors',
        href: AMBASSADOR_LINK.href,
        icon: faSeedling,
        isExternal: false,
      },
    },
    {
      title: 'Stake to back RSD credit lines',
      description: '',
      button: {
        title: 'Learn about SOURCE',
        href: SOURCE_HREF,
        icon: faCoins,
        isExternal: false,
      },
    },
    {
      title: 'Stake SOURCE',
      description: '',
      button: {
        title: 'Learn about SOURCE',
        href: SOURCE_HREF,
        icon: faCoins,
        isExternal: false,
      },
    },
  ],
};

export const RSD_SUMMARY =
  'RSD is a stablecredit: a stable currency backed by the resources and skills of the members of the ReSource Network. RSD allows merchants on ReSource to trade, exchange value and access credit lines';

export const RSD_FAQS = {
  title: 'CIP-36 the stable credit standard',
  description:
    'RSD is the first stablecredit built using the ReSource protocol’s new token standard: CIP-36 - the first blockchain asset able to process negative balances. CIP-36 allows for the creation of a whole new class of blockchain assets, of which RSD is the first example.',
  faqs: [
    {
      q: 'How do I get RSD?',
      a: [
        'RSD can be obtained by accessing credit lines on ReSource, or by accepting it as a means of payment on the ReSource Network.',
      ],
    },
    {
      q: 'Is RSD live only on the ReSource Marketplace?',
      a: [
        'For now, yes. But this will change soon. The soon-to-be-released ReSource SDK will allow users of all e-commerce platforms to integrate , use it as a means of payment and access liquidity on the spot.',
      ],
    },
    {
      q: 'Is RSD pegged to the US Dollar?',
      a: [
        'Not directly. RSD is a stable asset, but its stability isn’t derived from a hard peg to the US Dollar, but rather from organic market forces within the ReSource network. The real value of RSD emerges as a result of market competition between vendors on ReSource, who all price their goods and services in RSD.',
      ],
    },
    {
      q: 'Does RSD protect me from USD inflation?',
      a: [
        'That depends on what you mean by “inflation”. Since RSD derives its value from market activity on ReSource, its value is less affected by the circulating supply of US Dollars, QEs or interest rate manipulations that cause inflation. In case of Cost Push Inflation, which occurs as a result of market shocks that make the overall production of goods and services harder and more expensive, RSD is expected to behave similar to USD.',
      ],
    },
  ],
};
