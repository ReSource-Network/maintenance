import Script from 'next/script';

export const availableLanguages = {
  us: {
    languageCode: 'us',
    countryCode: 'us',
    label: 'English (US)',
  },
  es: {
    languageCode: 'es',
    countryCode: 'es',
    label: 'Spanish',
  },
  'zh-Hans': {
    languageCode: 'zh-Hans',
    countryCode: 'cn',
    label: 'Chinese',
  },
  ko: {
    languageCode: 'ko',
    countryCode: 'kr',
    label: 'Korean',
  },
  vi: {
    languageCode: 'vi',
    countryCode: 'vn',
    label: 'Vietnamese',
  },
  ja: {
    languageCode: 'ja',
    countryCode: 'jp',
    label: 'Japanese',
  },
};

export const LocalizationScript = () => {
  return (
    <Script
      id='localize'
      src='https://global.localizecdn.com/localize.js'
      onLoad={() => {
        Localize.initialize({
          key: 'c8c71c3a8a77c',
          rememberLanguage: true,
          disableWidget: true,
        } as LocalizeJS.Context.Options);
      }}
    />
  );
};
