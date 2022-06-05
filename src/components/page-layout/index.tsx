import { Container, ContainerProps } from '@chakra-ui/react';
import { motion, Variants } from 'framer-motion';
import { NextSeo } from 'next-seo';
import { ReactNode } from 'react';

const variants: Variants = {
  hidden: {
    opacity: 0,
    x: 0,
    // y: -40,
    transition: { duration: 0.4, type: 'easeOut' },
  },
  enter: {
    opacity: 1,
    x: 0,
    // y: 0,
    transition: { duration: 0.4, type: 'easeOut' },
  },
  exit: {
    opacity: 0,
    x: -0,
    // y: 40,
    transition: { duration: 0.4, type: 'easeOut' },
  },
};

type PageProps = {
  title: string;
  description?: string;
  keywords?: string;
  children: ReactNode;
};

const MotionContainer = motion<ContainerProps>(Container);

const PageLayout = ({ title, description, children }: PageProps) => (
  <>
    <NextSeo
      title={title + ' | ReSource'}
      description={description}
      twitter={{
        cardType: 'summary_large_image',
        handle: '@ReSource_Fi',
      }}
      openGraph={{
        url: 'https://resource.finance',
        title: title + ' | ReSource',
        description: description,
        locale: 'en_US',
        images: [
          {
            url: 'https://res.cloudinary.com/resource-network/image/upload/v1652120686/resource-protocol/og-images/og-image_n7vgax.png',
            width: 1200,
            height: 630,
            alt: 'ReSource',
            type: 'image/png',
          },
        ],
      }}
      additionalLinkTags={[
        {
          rel: 'icon',
          href: '../../../assets/images/logo_512.png',
        },
      ]}
    />
    <MotionContainer
      display='flex'
      minH={{ base: 'auto', md: '100vh' }}
      maxW={'none'}
      p={0}
      initial='hidden'
      animate='enter'
      exit='exit'
      variants={variants}
      centerContent
    >
      {children}
    </MotionContainer>
  </>
);

export default PageLayout;
