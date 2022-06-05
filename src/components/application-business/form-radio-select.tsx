import RadioSelect from '@/components/application-business/radio-select';
import { FormControl, FormHelperText, FormLabel } from '@chakra-ui/react';
import { FormGroup } from '../../global/types';

const FormRadioSelect = (
  { required, label, helperText }: FormGroup,
  options: string[]
) => {
  return (
    <FormControl isRequired={required}>
      {label ? <FormLabel>{label}</FormLabel> : null}
      {helperText ? <FormHelperText>{helperText}</FormHelperText> : null}
      {RadioSelect(options)}
    </FormControl>
  );
};

export default FormRadioSelect;
