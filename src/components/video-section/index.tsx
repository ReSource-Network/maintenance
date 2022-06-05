import CTAButton from '@/components/cta-button';
import {
  AspectRatio,
  Box,
  ButtonGroup,
  Flex,
  Heading,
  HStack,
  IconButton,
  Link,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  CONTENT_MAX_WIDTH,
  CONTENT_PX,
  CONTENT_PY,
} from '../../global/constants';
import { NIBERA_11_EARTH_PLATFORMS_IMG } from '../../global/images';
import { IconPosition, VideoSectionProps } from '../../global/types';

const renderPlayButton = (href: string, isExternal: boolean) => {
  return (
    <AspectRatio
      ratio={1}
      boxSize={{ base: '150px', md: '250px', lg: '300px' }}
      bgColor={useColorModeValue('blackAlpha.300', 'whiteAlpha.100')}
      bgImage={useColorModeValue(
        NIBERA_11_EARTH_PLATFORMS_IMG.light,
        NIBERA_11_EARTH_PLATFORMS_IMG.dark
      )}
      bgSize='cover'
      bgPosition='left center'
      borderRadius='full'
    >
      <IconButton
        isRound
        as={Link}
        size='xl'
        variant='ghost'
        icon={<FontAwesomeIcon icon={faPlay} size='2x' />}
        aria-label='play'
        href={href}
        isExternal={isExternal}
        color='white'
      />
    </AspectRatio>
  );
};

const VideoSection = (props: VideoSectionProps) => {
  return (
    <HStack maxW={CONTENT_MAX_WIDTH} px={CONTENT_PX} py={CONTENT_PY}>
      {props.bigButton
        ? renderPlayButton(props.buttons[0].href, props.buttons[0].isExternal)
        : null}
      <Flex flex={1} h='full' direction='column' p={[6, 7, 8, 10, 12, null]}>
        <VStack align='start' spacing={2}>
          <Heading variant='subtitle'>{props.title}</Heading>
          <Text variant='body'>{props.description}</Text>
        </VStack>
        <ButtonGroup
          as={Flex}
          direction={{ base: 'column', sm: 'row' }}
          justify={{ base: 'start', sm: 'unset' }}
          mt={4}
          size={'md'}
          spacing={{ base: 0, sm: 3 }}
        >
          <CTAButton
            button={props.buttons[0]}
            variant='solid'
            iconPosition={IconPosition.left}
          />
          <Box mt={{ base: 3, sm: 'unset' }}>
            <CTAButton
              button={props.buttons[1]}
              variant='outline'
              iconPosition={IconPosition.left}
            />
          </Box>
        </ButtonGroup>
      </Flex>
    </HStack>
  );
};

export default VideoSection;
