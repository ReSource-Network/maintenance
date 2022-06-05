import { Button, ButtonGroup, Link } from '@chakra-ui/react';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import { NAV_PAGE_LINKS } from '../../global/links';

interface PageLink {
  title: string;
  href: string;
  isExternal: boolean;
}

const renderLink = (link: PageLink) => {
  const router = useRouter();
  return (
    <Button
      key={link.title}
      pb={2}
      px={0}
      as={Link}
      variant={'nav-link'}
      onClick={() => router.push(link.href)}
      isExternal={link.isExternal}
      rightIcon={
        link.isExternal ? (
          <FontAwesomeIcon
            icon={faExternalLink}
            size={'xs'}
            style={{ opacity: '0.5' }}
          />
        ) : (
          <></>
        )
      }
    >
      {link.title}
    </Button>
  );
};

const NavPageLinks = () => {
  return (
    <ButtonGroup
      display={['none', null, null, 'unset', null, null]}
      spacing={[1.5, null, null, 2, null, null]}
    >
      {NAV_PAGE_LINKS.map((link) => renderLink(link))}
    </ButtonGroup>
  );
};

export default NavPageLinks;
