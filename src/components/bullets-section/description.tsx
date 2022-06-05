import { Text } from '@chakra-ui/react';

const BulletSectionDescription = (description: string) => {
  return (
    <Text mt={4} mb={8} zIndex='text' variant='body'>
      {description}
    </Text>
  );
};

export default BulletSectionDescription;
