import FooterLinkList from '@/components/footer/link-list';
// COMPONENTS
import SocialIconLinks from '@/components/social-icon-links';
import {
  Flex,
  Image,
  useColorModeValue as mode,
  VStack,
} from '@chakra-ui/react';
import {
  CONTENT_MAX_WIDTH,
  CONTENT_PX,
  CONTENT_PY,
} from '../../global/constants';
// IMAGES
import { LOGOTYPE } from '../../global/images';
// LINKS
import {
  AMBASSADOR_LINK,
  BLOG_LINK,
  BRAND_ASSETS_LINK,
  CAREERS_LINK,
  CONTACT_LINK,
  EXCHANGE_LINKS,
  FAQ_LINK,
  MARKETPLACE_APP_LINK,
  PRACTITIONER_LINK,
  PRESS_KIT_LINK,
  ROADMAP_LINK,
  RSD_CONTRACT_LINKS,
  RSD_LINK,
  SOURCE_LINK,
  STAKING_APP_LINK,
  WHITEPAPER_LINK,
} from '../../global/links';

const logotype = () => {
  return (
    <Image
      src={mode(LOGOTYPE.dark, LOGOTYPE.light)}
      alt={LOGOTYPE.alt}
      w='128px'
      alignSelf='flex-start'
    />
  );
};

const Footer = () => {
  return (
    <>
      <Flex
        bgColor='purpleAlpha.100'
        borderBottomColor='purpleAlpha.300'
        borderBottomWidth={8}
        justify='center'
        zIndex={3}
      >
        <VStack
          spacing={8}
          w='full'
          maxW={CONTENT_MAX_WIDTH}
          py={CONTENT_PY}
          px={CONTENT_PX}
        >
          {logotype()}
          {SocialIconLinks('start')}
          <Flex w='full' mt={8} justify='space-between' wrap='wrap'>
            <FooterLinkList
              title='Learn more'
              links={[
                // HOW_IT_WORKS_LINK,
                // MARKETPLACE_LINK,
                // ABOUT_LINK,
                // MEDIA_LINK,
                AMBASSADOR_LINK,
                PRACTITIONER_LINK,
                FAQ_LINK,
                CAREERS_LINK,
                ROADMAP_LINK,
                BLOG_LINK,
                WHITEPAPER_LINK,
              ]}
            />
            <FooterLinkList
              title='Resources'
              links={[BRAND_ASSETS_LINK, PRESS_KIT_LINK, CONTACT_LINK]}
            />
            <FooterLinkList title='Tokens' links={[RSD_LINK, SOURCE_LINK]} />
            <FooterLinkList title='Contracts' links={RSD_CONTRACT_LINKS} />
            <FooterLinkList title='Trade SOURCE' links={EXCHANGE_LINKS} />
            <FooterLinkList
              title='Products'
              links={[MARKETPLACE_APP_LINK, STAKING_APP_LINK]}
            />
          </Flex>
        </VStack>
      </Flex>
    </>
  );
};

export default Footer;
