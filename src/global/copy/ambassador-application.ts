import {
  faBullhorn,
  faEnvelope,
  faGlobe,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { InputType } from '../types';

export const FIRST_NAME_INPUT = {
  id: 'first-name',
  label: 'First name',
  type: InputType.text,
  placeholder: 'Satoshi',
  helperText: null,
  required: true,
  icon: faUser,
};
export const LAST_NAME_INPUT = {
  id: 'last-name',
  label: 'Last name',
  type: InputType.text,
  placeholder: 'Nakamoto',
  helperText: null,
  required: true,
  icon: faUser,
};
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
  type: InputType.text,
  placeholder: null,
  helperText: null,
  required: false,
  icon: faBullhorn,
};
export const WEBSITE_INPUT = {
  id: 'website',
  label: 'Website',
  type: InputType.url,
  placeholder: null,
  helperText: null,
  required: false,
  icon: faGlobe,
};
export const WHY_YOU_INPUT = {
  id: 'why-you',
  label: 'Why do you think you will be a good ReSource Ambassador?',
  type: InputType.text,
  placeholder: null,
  helperText: null,
  required: true,
  icon: null,
};

export const HOW_DID_YOU_HEAR_INPUT = {
  id: 'how-did-you-hear',
  label: 'How did you hear about us?',
  type: InputType.text,
  placeholder: null,
  helperText: null,
  required: true,
  icon: null,
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
];
