import FormGroup from '@/components/application-business/form-group';
import Locations from '@/components/application-business/locations';
import TextAreaInput from '@/components/application-business/text-area-input';
import { Button, Divider, Heading, HStack, VStack } from '@chakra-ui/react';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  CONTENT_MAX_WIDTH,
  CONTENT_PX,
  CONTENT_PY,
} from '../../global/constants';
import {
  EMAIL_INPUT,
  FIRST_NAME_INPUT,
  HOW_DID_YOU_HEAR_INPUT,
  LAST_NAME_INPUT,
  LOCATIONS_INPUT,
  SOCIAL_LINKS_INPUT,
  WEBSITE_INPUT,
  WHY_YOU_INPUT,
} from '../../global/copy/ambassador-application';

const ApplicationAmbassador = () => {
  return (
    <VStack
      mt={16}
      py={CONTENT_PY}
      px={CONTENT_PX}
      maxW={CONTENT_MAX_WIDTH}
      w='800px'
      spacing={6}
    >
      <Heading mb={8} variant='subtitle'>
        Ambassador Application
      </Heading>
      <VStack align='start' spacing={8}>
        {FormGroup(FIRST_NAME_INPUT)}
        {FormGroup(LAST_NAME_INPUT)}
        {FormGroup(EMAIL_INPUT)}
        {FormGroup(SOCIAL_LINKS_INPUT)}
        {FormGroup(WEBSITE_INPUT)}
        {Locations(LOCATIONS_INPUT)}
        {TextAreaInput(WHY_YOU_INPUT)}
        {TextAreaInput(HOW_DID_YOU_HEAR_INPUT)}
        <Divider />
        <HStack w='full' justify='end'>
          <Button
            variant='solid'
            leftIcon={<FontAwesomeIcon icon={faCheckCircle} />}
          >
            Submit
          </Button>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default ApplicationAmbassador;
