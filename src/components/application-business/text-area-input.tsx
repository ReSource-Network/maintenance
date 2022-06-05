import {
  FormControl,
  FormHelperText,
  FormLabel,
  Textarea,
} from '@chakra-ui/react';
import { FormGroup } from '../../global/types';

const TextAreaInput = ({
  id,
  label,
  placeholder,
  helperText,
  required,
}: FormGroup) => {
  return (
    <FormControl key={id} isRequired={required}>
      {label ? <FormLabel htmlFor={id}>{label}</FormLabel> : null}
      <Textarea
        id={id}
        placeholder={placeholder}
        resize='vertical'
        focusBorderColor='purpleAlpha.500'
      />
      {helperText ? <FormHelperText>{helperText}</FormHelperText> : null}
    </FormControl>
  );
};

export default TextAreaInput;
