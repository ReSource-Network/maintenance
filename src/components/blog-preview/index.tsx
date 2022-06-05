import {
  AspectRatio,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Text,
  useColorModeValue as mode,
  VStack,
} from '@chakra-ui/react';
import {
  CONTENT_MAX_WIDTH,
  CONTENT_PX,
  CONTENT_PY,
} from '../../global/constants';
import { BlogPreviewSectionProps } from '../../global/types';

const BlogPreviewSection = (props: BlogPreviewSectionProps) => {
  return (
    <VStack
      w='full'
      maxW={CONTENT_MAX_WIDTH}
      py={CONTENT_PY}
      px={CONTENT_PX}
      spacing={6}
    >
      <Heading variant='subtitle'>{props.title}</Heading>
      <Divider />
      <HStack align='start' spacing={3}>
        {props.blogs.map((blog) => (
          <Link
            key={blog.title.slice(20)}
            maxW='32%'
            href={blog.href}
            isExternal
            _focus={{ boxShadow: 'none' }}
          >
            <Flex direction='column' flex='1'>
              <AspectRatio
                w='full'
                ratio={{ base: 1, sm: 2.5 }}
                borderRadius='md'
                overflow='hidden'
              >
                <Image
                  src={mode(blog.image.light, blog.image.dark)}
                  alt={blog.image.alt}
                />
              </AspectRatio>
              <VStack align='start' mt={4} spacing={2}>
                <Heading variant={'subheading'}>{blog.title}</Heading>
                <Text display={{ base: 'none', sm: 'unset' }} variant={'body'}>
                  {blog.description}
                </Text>
              </VStack>
            </Flex>
          </Link>
        ))}
      </HStack>
    </VStack>
  );
};

export default BlogPreviewSection;
