import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import { NIBERA_9_WOLF_MOON_IMG } from '../images';
import { PRESS_KIT_HREF } from '../links';

export const MEDIA_HERO = {
  title: 'ReSource in the media',
  subtitle: null,
  image: NIBERA_9_WOLF_MOON_IMG,
  buttons: null,
};

export const MEDIA_PRESS_KIT_LINK = {
  title: 'Writing an article about us? Check out our press kit:',
  button: {
    title: 'View',
    href: PRESS_KIT_HREF,
    icon: faExternalLink,
    isExternal: true,
  },
};
