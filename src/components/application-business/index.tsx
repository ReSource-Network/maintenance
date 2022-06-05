import CategorySelect from '@/components/application-business/category-select';
import FormGroup from '@/components/application-business/form-group';
import Locations from '@/components/application-business/locations';
import { Button, Divider, Heading, HStack, VStack } from '@chakra-ui/react';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  CONTENT_MAX_WIDTH,
  CONTENT_PX,
  CONTENT_PY,
} from '../../global/constants';
import {
  BUSINESS_CATEGORIES_INPUT,
  BUSINESS_NAME_INPUT,
  BUSINESS_PHONE_INPUT,
  EMAIL_INPUT,
  FIRST_NAME_INPUT,
  LAST_NAME_INPUT,
  LOCATIONS_INPUT,
  REFERRAL_CODE_INPUT,
  SOCIAL_LINKS_INPUT,
  WEBSITE_INPUT,
} from '../../global/copy/business-application';

const ApplicationBusiness = () => {
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
        Business Application
      </Heading>
      <VStack align='start' spacing={8}>
        {FormGroup(FIRST_NAME_INPUT)}
        {FormGroup(LAST_NAME_INPUT)}
        {FormGroup(BUSINESS_NAME_INPUT)}
        {FormGroup(EMAIL_INPUT)}
        {FormGroup(BUSINESS_PHONE_INPUT)}
        {FormGroup(WEBSITE_INPUT)}
        {FormGroup(SOCIAL_LINKS_INPUT)}
        {CategorySelect('Business category', BUSINESS_CATEGORIES_INPUT)}
        {FormGroup(REFERRAL_CODE_INPUT)}
        {Locations(LOCATIONS_INPUT)}
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

export default ApplicationBusiness;
