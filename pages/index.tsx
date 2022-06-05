import PageLayout from '@/components/page-layout';
import { Flex, Heading, Text, VStack } from '@chakra-ui/react';

const Maintenance = ({ seoTitle, seoDescription }) => (
  <PageLayout title={seoTitle} description={seoDescription}>
    <Flex w='100vw' h='100vh'>
      <Flex
        bgImage='https://res.cloudinary.com/resource-network/image/upload/v1654389397/resource-protocol/special-edit_akzxne.jpg'
        bgSize='cover'
        bgPos='center center'
        h='full'
        w='full'
        justify='center'
        align='center'
        direction='column'
      >
        <VStack
          mt={'350px'}
          color={'white'}
          spacing={4}
          p={8}
          bgColor={'rgba(0,0,0,0.67)'}
          borderRadius='md'
        >
          <Heading variant='subtitle' h='auto'>
            Site under maintenance
          </Heading>
          <Text variant='body' h='auto'>
            Sit tight, we'll be right back!
          </Text>
        </VStack>
      </Flex>
    </Flex>
  </PageLayout>
);

export async function getStaticProps(context) {
  return {
    props: {
      seoTitle: 'Maintenanace page',
      seoDescription: '',
    }, // will be passed to the page component as props
  };
}

export default Maintenance;
