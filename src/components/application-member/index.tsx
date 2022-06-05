import CategorySelect from '@/components/application-business/category-select';
import FormGroup from '@/components/application-business/form-group';
import FormRadioSelect from '@/components/application-business/form-radio-select';
import MultiInputFormGroup from '@/components/application-business/multi-input-form-group';
import { Button, Divider, Heading, HStack, VStack } from '@chakra-ui/react';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  CONTENT_MAX_WIDTH,
  CONTENT_PX,
  CONTENT_PY,
} from '../../global/constants';
import { BUSINESS_NAME_INPUT } from '../../global/copy/business-application';
import {
  ANNUAL_REVENUE_INPUT,
  AVG_TRANSACTION_VOLUME_INPUT,
  CERTIFICATIONS_INPUT,
  CLIENTS_INPUT,
  EDUCATION_INPUT,
  EMAIL_INPUT,
  GROWTH_SERVICES_INPUT,
  INTERESTED_IN_BENEFITS_INPUT,
  INTERESTED_IN_BENEFITS_OPTIONS,
  LARGEST_EXPENSES_INPUT,
  LICENSES_INPUT,
  NUM_EMPLOYEES_INPUT,
  OUTSIDE_ORGANIZATIONS_INPUT,
  PRESS_LINKS_INPUT,
  SELLER_PROFILES_INPUT,
  SERVICE_LOCATION_CATEGORIES_INPUT,
  SOCIAL_LINKS_INPUT,
  YOUR_PRODUCTS_INPUT,
} from '../../global/copy/member-application';

const ApplicationMember = () => {
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
        Member Application
      </Heading>
      <VStack align='start' spacing={8}>
        <Heading variant='heading'>Basic info</Heading>
        {FormGroup(BUSINESS_NAME_INPUT)}
        {FormGroup(EMAIL_INPUT)}
        <Divider />

        <Heading mt={4} variant='heading'>
          More public links
        </Heading>
        {MultiInputFormGroup(5, SOCIAL_LINKS_INPUT)}
        {MultiInputFormGroup(5, OUTSIDE_ORGANIZATIONS_INPUT)}
        {MultiInputFormGroup(5, PRESS_LINKS_INPUT)}
        {MultiInputFormGroup(5, SELLER_PROFILES_INPUT)}
        <Divider />

        <Heading mt={4} variant='heading'>
          Credentials
        </Heading>
        {MultiInputFormGroup(3, CERTIFICATIONS_INPUT)}
        {MultiInputFormGroup(3, LICENSES_INPUT)}
        {MultiInputFormGroup(3, EDUCATION_INPUT)}
        <Divider />

        <Heading variant='heading'>Business information</Heading>
        {CategorySelect('Service location', SERVICE_LOCATION_CATEGORIES_INPUT)}
        {FormGroup(CLIENTS_INPUT)}
        {FormGroup(NUM_EMPLOYEES_INPUT)}
        {FormGroup(ANNUAL_REVENUE_INPUT)}
        {FormGroup(AVG_TRANSACTION_VOLUME_INPUT)}
        <Divider />

        <Heading variant='heading'>Market determination</Heading>
        {FormGroup(YOUR_PRODUCTS_INPUT)}
        {FormGroup(GROWTH_SERVICES_INPUT)}
        {FormGroup(LARGEST_EXPENSES_INPUT)}
        {FormRadioSelect(
          INTERESTED_IN_BENEFITS_INPUT,
          INTERESTED_IN_BENEFITS_OPTIONS
        )}
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

export default ApplicationMember;
