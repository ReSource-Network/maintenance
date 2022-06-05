import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormGroup } from '../../global/types';

const FormInputGroup = ({ id, icon, type, placeholder }: FormGroup) => {
  return (
    <InputGroup>
      {icon ? (
        <InputLeftElement
          pointerEvents='none'
          children={<FontAwesomeIcon icon={icon} opacity={0.33} />}
        />
      ) : null}
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        size='md'
        variant='outline'
        focusBorderColor='purpleAlpha.500'
        errorBorderColor='redAlpha.500'
      />
    </InputGroup>
  );
};

export default FormInputGroup;
