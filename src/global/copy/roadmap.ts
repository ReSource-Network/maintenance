import { RoadmapStage } from '../types';

export const ROADMAP_STAGES: RoadmapStage[] = [
  {
    title: 'V0',
    subtitle: 'Proof of Concept',
    items: [
      {
        title: 'Protocol design',
        badge: 'in house',
        bullets: ['Mutual credit economy', 'CIP-36 token standard'],
        quarter: 2,
        year: 2021,
      },
      {
        title: 'Marketplace beta',
        badge: 'in house',
        bullets: [
          'Closed business network',
          'Storefronts and listings',
          'RSD credit lines',
          'Custodial wallets',
        ],
        quarter: 2,
        year: 2021,
      },
    ],
  },
  {
    title: 'V0',
    subtitle: 'Minimum Viable Product',
    items: [
      {
        title: 'Marketplace improvements',
        badge: 'in house',
        bullets: [
          'Catalogs',
          'Multiple cities',
          'Buy and sell with RSD',
          'Ambassadors beta (referrals)',
          'Employee account type support',
        ],
        quarter: 3,
        year: 2021,
      },
      {
        title: 'Testnet',
        badge: 'in house',
        bullets: [
          'RSD on testnet for marketplace transactions',
          'Smart contract audits',
        ],
        quarter: 3,
        year: 2021,
      },
    ],
  },
  {
    title: 'V0',
    subtitle: 'SOURCE Token Launch',
    items: [
      {
        title: 'SOURCE',
        badge: 'in house',
        bullets: ['Launch utility and governance token', 'Yield farming'],
        quarter: 4,
        year: 2021,
      },
    ],
  },
  {
    title: 'Bennu',
    subtitle: 'Mainnet Launch',
    items: [
      {
        title: 'Mainnet',
        badge: 'in house',
        bullets: [
          'Migrate to Celo Mainnet',
          'Transaction fees in SOURCE rewarded to protocol stakers',
          'Delegated staking',
        ],
        quarter: 2,
        year: 2022,
      },
    ],
  },
  {
    title: 'Bennu',
    subtitle: 'Network Growth & Progressive Decentralization',
    items: [
      {
        title: 'Decentralized infrastructure',
        badge: 'in house',
        bullets: [
          'Decentralized identity with Ceramic',
          'Decentralized marketplace data',
          'Analytics and transparency',
          'Self-custody wallets',
        ],
        quarter: 3,
        year: 2022,
      },
      {
        title: 'Open marketplace',
        badge: 'in house',
        bullets: [
          'Self-onboarding',
          'Business categorization updates',
          'Search and discovery UX improvements',
        ],
        quarter: 3,
        year: 2022,
      },
      {
        title: 'Messaging and community',
        badge: 'dev shop',
        bullets: [
          'Marketplace chat updates',
          'Group messaging',
          'Network wide channels and community feeds',
        ],
        quarter: 3,
        year: 2022,
      },
    ],
  },
  {
    title: 'Bennu',
    subtitle: 'Scaling & Securitization',
    items: [
      {
        title: 'ReSource RDK',
        badge: 'in house',
        bullets: ['ReSource Development Kit (RDK)', 'Pay with ReSource'],
        quarter: 4,
        year: 2022,
      },
      {
        title: 'Ambassadors',
        badge: 'in house',
        bullets: [
          'Automated referral commisions',
          'Ambassador dashboard and analytics',
          'Variable onboarding incentives',
        ],
        quarter: 4,
        year: 2022,
      },
      {
        title: 'Mobile dApp MVP',
        badge: 'dev shop',
        bullets: [
          'Onboarding',
          'Community feed, promotions, and messaging',
          'Send / request / scan to pay',
          'Wallet',
        ],
        quarter: 4,
        year: 2022,
      },
      {
        title: 'Developer community',
        badge: 'in house',
        bullets: [
          'Incentives for activating developer community',
          'ReSource Grant Program',
        ],
        quarter: 2,
        year: 2023,
      },
    ],
  },
  {
    title: 'Raven',
    subtitle: 'Identity & Reputation',
    items: [
      {
        title: 'Scaling credit and automation',
        badge: 'in house',
        bullets: [
          'Credit defaults',
          'Mutliple credit pools',
          'Automated risk management and credit issuance',
        ],
        quarter: 2,
        year: 2023,
      },
      {
        title: 'Reputation',
        badge: 'in house',
        bullets: [
          'Business data standard for underwriting',
          'Quantified contributions and reputation',
          'Credit scoring algorithm based off external data and network activity',
        ],
        quarter: 2,
        year: 2023,
      },
    ],
  },
  {
    title: 'Caladrius',
    subtitle: 'Horizontal Growth',
    items: [
      {
        title: 'Multiple networks',
        badge: 'community driven',
        bullets: [
          'Multiple networks with unique and independent stablecredits',
          'Multiple mutual credit currencies secured by the protocol',
          'Protocol securing each mutual credit currency via decentralized network of underwriters',
        ],
        quarter: 3,
        year: 2023,
      },
    ],
  },
];
