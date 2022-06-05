// marketplace
const dispute = {
  q: 'How do I solve a dispute with a buyer/seller?',
  a: [
    'In the case of a dispute, you’ll submit your issue to our dispute resolution system, where specialists will work with both parties to resolve the issue.',
  ],
};
const refund = {
  q: 'How do I issue a refund on ReSource Network?',
  a: [
    'Easy - to send a refund to another member, visit their profile and send the appropriate RSD amount to them via the "Send Funds" button. Be sure to include a note telling them the money being sent is for a refund and include all necessary details.',
  ],
};
const getStarted = {
  q: 'What do you need to get started?',
  a: [
    'You must be either a US-registered business or self-employed person. ReSource is a Business to Business (B2B) network. To qualify to list on ReSource, your offerings must provide your main source of US dollar income. At this stage our platform is not suitable for hobby trades.',
  ],
};
const taxes = {
  q: 'How do taxes work?',
  a: [
    'Sales made in RSD count as normal sales for tax purposes, and are subject to your existing income and sales tax requirements. We’ll send you a 1099B report of all your transactions at the end of a tax year. Generally, business expenses on the Resource network are similar to business expenses made in US Dollars and thus can be deducted from RSD taxable sales. ReSource recommends to hire a small business accountant from our marketplace.',
  ],
};
const creditLine = {
  q: 'How exactly does the credit line work?',
  a: [
    'First an ambassador enrolls you for an automatic credit line of 250 RSD. Within 24 hours, your credit line can be increased up to 2,500 RSD after we review your business offerings and profile. Pay back your credit line by selling your products/services for RSD. The easiest way to increase your credit line in the future is by making your customers happy - replying quickly to inquiries, making sales and getting great reviews.',
  ],
};
const whatCanIBuy = {
  q: 'What can I buy on the ReSource Network? Who accepts RSD?',
  a: [
    'Expect to find local freelancers, small businesses and stores. Expect not to see corporations or chain stores.Just search the marketplace, find what you need and message them. Can’t find what you’re looking for? Leave a request, and ReSource will find it for you ASAP!',
  ],
};
const whatShouldISell = {
  q: 'Why should I sell on ReSource?',
  a: [
    'You can and should sell everything you can in regular US dollar sales, and then sell all your surplus goods and services for RSD, to achieve sold out status and maximize your capacity as a business. That’s right. Sold out service capacity. Sold out goods. Sold out room nights. Every week.',
  ],
};
const whatIsRSD = {
  q: 'What is RSD?',
  a: [
    'These are the ReSource dollars, which are equivalent to one US dollar, and facilitate all trade on the network. Buying and selling on ReSource is done exclusively with RSD. In ReSource, all businesses price themselves 1:1 with normal prices.',
  ],
};

// protocol
const whatIsMutualCredit = {
  q: 'What is Mutual Credit?',
  a: [
    'Mutual Credit shouldn’t be confused with Mutual Banking, Credit Unions, or Cooperative Banking.',
    'While a Credit Union depends on the aggregated capital of its members, which it then manages, loans out and ' +
      'invests on their behalf, a Mutual Credit system is not dependent on pre-existing capital in the form of money, ' +
      'but rather relies on the non-monetary resources of its members (such as unsold inventory, productive capacities etc), ' +
      'to create its own internal commodity-backed monetary system. ',
    'Network members can then get interest free loans in this internal currency, use it to buy goods and services from ' +
      'all other network members, and repay their debt by selling their own products to other members in the network. ',
    'For more information about Mutual Credit, read this article:',
    'https://www.blog.resource.finance/chapter-1-what-is-mutual-credit',
  ],
};
const howZeroInterestCredit = {
  q: 'How are interest-free credit lines even possible?',
  a: [
    'ReSource is able to offer interest free credit lines by building on the principles of Mutual Credit Clearing: ' +
      'Members of the network are assigned a current account, which they can overdraft to buy goods and services from all ' +
      'other businesses in the network. Instead of using fiat or crypto assets to repay their debt, borrowers sell their ' +
      'own goods and services to other network members until their overdraft is settled. This way businesses can get a ' +
      'business loan at phenomenal terms, without anyone ever having to lend them money.',
    'The currency used to fund these ' +
      'credit lines is not provided by creditors, investors or lenders, but rather is “spent into existence” once a member ' +
      'overdrafts their current account and spends into the negative. Later, when this member sells their own goods and ' +
      'services to other network members, the received payments close the overdraft and burn the currency as the account ' +
      're-balances from the negative to 0.',
  ],
};
const howDoPeopleMoney = {
  q: 'Without interest on debt, how does anyone make money in this system?',
  a: [
    'First of all, Mutual Credit loans don’t require a creditor to lend anyone money. To understand how this is possible, ' +
      'please read the answer to “What is Mutual Credit” above. Since no creditors or lenders are involved, no one needs ' +
      'to earn a return on their investment, hence no interest payments are necessary. ',
    'However, “interest-free” doesn’t mean free of charge. Users of the ReSource protocol do pay transaction fees to ' +
      'use it, access their credit lines, remit and receive payments. These transaction fees are paid in SOURCE and ' +
      'constitute the basis for SOURCE staking rewards.',
  ],
};
const whoCanCreditLine = {
  q: 'Can anyone get a credit line on ReSource?',
  a: [
    'ReSource is a decentralized network and the function of debt-underwriting is performed by a distributed network of underwriters. To get access to credit, an applicant needs to be approved by one of these underwriters. If an underwriter deems an applicant creditworthy, the underwriter will have to stake and lock SOURCE, which will be slashed in case of a default. As long as an underwriter is willing to take this risk upon themselves, they can underwrite any applicant according to their best judgment. To arrive at an informed decision, underwriters have access to financial statements and relevant information about the applicant. In return for assuming these risks, underwriters receive a cut of transaction fees generated by the network.',
  ],
};
const manageCreditRisk = {
  q: 'How does ReSource manage credit risk?',
  a: [
    'Credit risk in Mutual Credit system behaves slightly different than in the traditional financial world. To get a ' +
      'complete picture of how credit risk behaves in Mutual Credit systems and how ReSource ensures its networks against ' +
      'it, please read this article: ',
    'https://www.blog.resource.finance/chapter-3--decentralised-underwriting',
    'But in short: SOURCE stakes locked by Underwriters, in conjunction with a network Reserve which funded by ' +
      'transaction fees, provides the necessary capital to absorb lost accounts.',
  ],
};
const howWeDifferent = {
  q: 'How is ReSource different form traditional Mutual Credit systems?',
  a: [
    'Most multi-lateral exchange networks have a very hard time managing credit risk. If a member of such a network defaults ' +
      'on their debt, all other members are affected. Normally, these networks use internal currencies to keep track of ' +
      'who holds a trade deficit or surplus. Each default debases this currency and steals purchasing power from its ' +
      'holders. ReSource is the first exchange network that has solved this problem. Stakes locked by underwriters, ' +
      'together with a network reserve, funded by transaction fees, secure the network’s currency against inflation. ' +
      'If a default occurs, these funds are used to cover the outstanding debt and remove excess currency from circulation. ',
    'Another problem that we’ve solved is centralized and unaccountable administration. Normal barter networks normally ' +
      'have one network operator that decides who gets access to credit and at what terms. The problem is that these ' +
      "operators mostly don't have real “skin in the game”. If a credit candidate defaults, the operator doesn’t lose " +
      'funds, but the entire network suffers inflation. This is a huge problem which we solve with our distributed ' +
      'underwriter network. Underwriters are a bit like validators on PoS chains: they have a stake to lose if they make ' +
      'bad decisions or try to compromise the network.',
  ],
};

export const PROTOCOL_FAQS = [
  whatIsMutualCredit,
  howZeroInterestCredit,
  howDoPeopleMoney,
  whoCanCreditLine,
  manageCreditRisk,
  howWeDifferent,
];

export const MARKETPLACE_FAQS = [
  dispute,
  refund,
  getStarted,
  taxes,
  creditLine,
  whatCanIBuy,
  whatShouldISell,
  whatIsRSD,
];
