import {
  faBuilding,
  faBullhorn,
  faCertificate,
  faDriversLicense,
  faEnvelope,
  faGlobe,
  faGraduationCap,
  faLink,
} from '@fortawesome/free-solid-svg-icons';
import { InputType } from '../types';

export const EMAIL_INPUT = {
  id: 'email',
  label: 'Email address',
  type: InputType.email,
  placeholder: 'example@gmail.com',
  helperText: null,
  required: true,
  icon: faEnvelope,
};
export const SOCIAL_LINKS_INPUT = {
  id: 'social-links',
  label: 'Social media links',
  type: InputType.url,
  placeholder: null,
  helperText: null,
  required: false,
  icon: faBullhorn,
};
export const OUTSIDE_ORGANIZATIONS_INPUT = {
  id: 'outside-organizations',
  label: 'Outside organizations',
  type: InputType.text,
  placeholder: null,
  helperText: 'BBB, D&B, etc.',
  required: false,
  icon: faBuilding,
};
export const PRESS_LINKS_INPUT = {
  id: 'press-links',
  label: 'Press links',
  type: InputType.url,
  placeholder: null,
  helperText: 'Outside publications',
  required: false,
  icon: faLink,
};
export const SELLER_PROFILES_INPUT = {
  id: 'seller-profiles',
  label: 'Seller profiles',
  type: InputType.url,
  placeholder: null,
  helperText: 'Amazon, Instagram, UpWork, Yelp..',
  required: false,
  icon: faGlobe,
};
export const CERTIFICATIONS_INPUT = {
  id: 'certifications',
  label: 'Certifications',
  type: InputType.text,
  placeholder: null,
  helperText: null,
  required: false,
  icon: faCertificate,
};
export const LICENSES_INPUT = {
  id: 'licenses',
  label: 'Licenses',
  type: InputType.text,
  placeholder: null,
  helperText: null,
  required: false,
  icon: faDriversLicense,
};
export const EDUCATION_INPUT = {
  id: 'education',
  label: 'Education',
  type: InputType.text,
  placeholder: null,
  helperText: null,
  required: false,
  icon: faGraduationCap,
};
export const SERVICE_LOCATION_CATEGORIES_INPUT = [
  'In-person',
  'Remote',
  'Both',
];

export const GROWTH_SERVICES_INPUT = {
  id: 'growth-services',
  label: 'Ideal growth services',
  type: InputType.text,
  placeholder: 'Web design, biodiesel, business coaching',
  helperText: 'What would you like to buy on ReSource?',
  required: true,
  icon: null,
};
export const YOUR_PRODUCTS_INPUT = {
  id: 'products-and-services',
  label: 'What products/services will you be listing on the marketplace',
  type: InputType.text,
  placeholder: null,
  helperText: null,
  required: true,
  icon: null,
};
export const LARGEST_EXPENSES_INPUT = {
  id: 'largest-expenses',
  label: 'Largest monthly expenses',
  type: InputType.text,
  placeholder: null,
  helperText:
    'What do you spend the most money on right now for your business?',
  required: true,
  icon: null,
};
export const CLIENTS_INPUT = {
  id: 'key-clients',
  label: 'Key clients/projects',
  type: InputType.text,
  placeholder: null,
  helperText: 'Past or present',
  required: false,
  icon: null,
};
export const NUM_EMPLOYEES_INPUT = {
  id: 'num-employees',
  label: 'Current # of employees',
  type: InputType.number,
  placeholder: null,
  helperText: null,
  required: true,
  icon: null,
};
export const ANNUAL_REVENUE_INPUT = {
  id: 'annual-revenue',
  label: 'Annual revenue',
  type: InputType.number,
  placeholder: null,
  helperText: null,
  required: true,
  icon: null,
};
export const AVG_TRANSACTION_VOLUME_INPUT = {
  id: 'avg-tx-volume',
  label: 'Average transaction volume',
  type: InputType.number,
  placeholder: null,
  helperText: null,
  required: true,
  icon: null,
};
export const INTERESTED_IN_BENEFITS_INPUT = {
  id: 'interested-in-benefits',
  label: 'Are you interested in ReSource Benefits?',
  type: InputType.number,
  placeholder: null,
  helperText:
    'Our Employee Benefits plans gives your team access access to massages, therapy, groceries, and other health & wellness services at no cost to them. Benefits are tax-deductible expenses for your business and funded by sales of your goods and/or services in the network.',
  required: true,
  icon: null,
};
export const INTERESTED_IN_BENEFITS_OPTIONS = ['Yes', 'No', 'Unsure'];
