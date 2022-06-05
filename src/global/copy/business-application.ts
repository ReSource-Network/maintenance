import {
  faBarcode,
  faBuilding,
  faBullhorn,
  faEnvelope,
  faGlobe,
  faPhone,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { InputType } from '../types';

export const FIRST_NAME_INPUT = {
  id: 'first-name',
  label: 'First name',
  type: InputType.text,
  placeholder: 'Satoshi',
  variant: 'outline',
  helperText: null,
  required: true,
  icon: faUser,
};
export const LAST_NAME_INPUT = {
  id: 'last-name',
  label: 'Last name',
  type: InputType.text,
  placeholder: 'Nakamoto',
  variant: 'outline',
  helperText: null,
  required: true,
  icon: faUser,
};
export const EMAIL_INPUT = {
  id: 'email',
  label: 'Email address',
  type: InputType.email,
  placeholder: 'example@gmail.com',
  variant: 'outline',
  helperText: 'Choose carefully, this cannot be changed!',
  required: true,
  icon: faEnvelope,
};
export const BUSINESS_NAME_INPUT = {
  id: 'business-name',
  label: 'Business name',
  type: InputType.text,
  placeholder: 'Bitcoin',
  variant: 'outline',
  helperText: 'Sole proprietor? Use your legal name.',
  required: true,
  icon: faBuilding,
};
export const BUSINESS_PHONE_INPUT = {
  id: 'phone',
  label: 'Cell phone',
  type: InputType.tel,
  placeholder: null,
  variant: 'outline',
  helperText: null,
  required: true,
  icon: faPhone,
};
export const SOCIAL_LINKS_INPUT = {
  id: 'social-links',
  label: 'Social media links',
  type: InputType.text,
  placeholder: null,
  variant: 'outline',
  helperText:
    'Your professional accounts on Facebook, Instagram, Amazon, Google Business, etc. Please include as many as you can!',
  required: false,
  icon: faBullhorn,
};
export const WEBSITE_INPUT = {
  id: 'website',
  label: 'Website or seller account',
  type: InputType.url,
  placeholder: null,
  variant: 'outline',
  helperText: 'Amazon, Instagram, UpWork, Yelp..',
  required: false,
  icon: faGlobe,
};
export const REFERRAL_CODE_INPUT = {
  id: 'referral-code',
  label: 'Referral code',
  type: InputType.text,
  placeholder: null,
  variant: 'outline',
  helperText: null,
  required: false,
  icon: faBarcode,
};

export const LOCATIONS_INPUT = [
  'Asheville',
  'Austin',
  'Los Angeles',
  'Chattanooga',
  'San Diego',
  'San Francisco / Bay Area',
  'McDowell County',
  'New York',
  'Other',
  'Remote Services',
];

export const BUSINESS_CATEGORIES_INPUT = [
  'Advertising | Marketing',
  'Rental Space | Accommodations',
  'Skilled Trades | Crafts',
  'Financial Services',
  'Caregiving | Cleaning',
  'Photography | Videography',
  'Classes | Online Courses',
  'Art | Media | Entertainment',
  'Health | Wellness',
  'Graphic Design | Web Development',
  'Events | Production',
  'Food | Drink',
  'Outdoor',
  'Fitness',
  'Other',
];
