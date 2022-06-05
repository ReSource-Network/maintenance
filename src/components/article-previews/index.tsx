import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Link,
  Text,
  useColorModeValue as mode,
  VStack,
} from '@chakra-ui/react';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {
  CONTENT_MAX_WIDTH,
  CONTENT_PX,
  CONTENT_PY,
} from 'src/global/constants';
import { ARTICLES } from 'src/global/links';
import { Article } from 'src/global/types';

const renderBanner = (article: Article) => (
  <Box
    pt='33%'
    w='100%'
    bg={`center center no-repeat url(${article.image.light})`}
    bgSize='cover'
    borderRadius='8px'
    mb={[2, 2, 3, 4]}
  />
);

const renderLink = (article: Article) => (
  <Button ml={4} href={article.href} variant='link' as={Link} isExternal>
    Read more
    <FontAwesomeIcon
      icon={faExternalLinkAlt}
      size={'xs'}
      style={{ marginLeft: 8 }}
    />
  </Button>
);

const renderAuthorImage = (article: Article) => (
  <Image
    src={mode(article.authorImg.dark, article.authorImg.light)}
    alt={article.authorImg.alt}
    objectFit='contain'
    height={4}
  />
);

const renderArticles = (articles: Article[]) =>
  articles.map((article) => (
    <VStack key={article.title} align='flex-start' spacing={2}>
      {renderBanner(article)}
      <Heading variant='subheading'>{article.title}</Heading>
      <Text variant='body'> {article.description} </Text>
      <HStack w='full' my={2} spacing={5}>
        {renderAuthorImage(article)}
        <Text color={mode('gray.500', 'gray.400')}>{article.date}</Text>
        {renderLink(article)}
      </HStack>
    </VStack>
  ));

const ArticlePreviews = () => (
  <VStack
    py={CONTENT_PY}
    px={CONTENT_PX}
    maxW={CONTENT_MAX_WIDTH}
    spacing={[16, 24, 32]}
  >
    {renderArticles(ARTICLES)}
  </VStack>
);

export default ArticlePreviews;
