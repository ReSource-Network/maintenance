import FormInputGroup from '@/components/application-business/input-group';
import {
  FormControl,
  FormHelperText,
  FormLabel,
  useColorModeValue as mode,
  VStack,
} from '@chakra-ui/react';
import { FormGroup } from '../../global/types';

const FormGroup = (group: FormGroup) => {
  return (
    <FormControl isRequired={group.required}>
      <VStack w='600px' align='start' spacing={1}>
        {group.label ? (
          <FormLabel htmlFor={group.id}>{group.label}</FormLabel>
        ) : null}
        {FormInputGroup(group)}
        {group.helperText ? (
          <FormHelperText
            w='full'
            textAlign='right'
            color={mode('gray.700', 'gray.300')}
          >
            {group.helperText}
          </FormHelperText>
        ) : null}
      </VStack>
    </FormControl>
  );
};

export default FormGroup;
