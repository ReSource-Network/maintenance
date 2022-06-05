import { availableLanguages } from '@/internationalization/index';
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useTimeout,
} from '@chakra-ui/react';
import { useState } from 'react';
import ReactCountryFlag from 'react-country-flag';

type CountryFlagProps = {
  code?: string;
};

const CountryFlag = ({ code }: CountryFlagProps) => {
  return (
    <ReactCountryFlag
      style={{ fontSize: '1.5em', lineHeight: '1.5em' }}
      aria-label={`${code?.toUpperCase()}'s Flag`}
      countryCode={code?.toUpperCase() ?? 'us'}
    />
  );
};

const LanguagesButton = () => {
  const [languageCode, setLanguageCode] = useState<any>();

  useTimeout(() => {
    const languageCode = window?.Localize?.getLanguage();
    setLanguageCode(languageCode);
  }, 100);

  return (
    <Menu>
      <MenuButton
        size='lg'
        variant='ghost'
        as={IconButton}
        icon={
          <CountryFlag code={availableLanguages[languageCode]?.countryCode} />
        }
      />
      <MenuList layerStyle='menu-list'>
        {Object.values(availableLanguages).map(
          ({ languageCode, countryCode, label }) => {
            return (
              <MenuItem
                key={languageCode}
                layerStyle='menu-item'
                icon={<CountryFlag code={countryCode} />}
                _focus={{ background: 'purpleAlpha.100' }}
                onClick={() => {
                  setLanguageCode(languageCode);
                  Localize.setLanguage(languageCode);
                }}
              >
                {label}
              </MenuItem>
            );
          }
        )}
      </MenuList>
    </Menu>
  );
};

export default LanguagesButton;
