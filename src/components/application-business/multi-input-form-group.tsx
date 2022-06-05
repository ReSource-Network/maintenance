import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormGroup } from '../../global/types';

const MultiInputGroup = (inputs: number, group: FormGroup) => {
  const renderInputs = () => {
    let elements = [];
    for (let i = 0; i < inputs; i++) {
      elements.push(
        <InputGroup key={group.id + i}>
          {group.icon ? (
            <InputLeftElement
              pointerEvents='none'
              children={<FontAwesomeIcon icon={group.icon} opacity={0.33} />}
            />
          ) : null}
          <Input
            id={group.id + i}
            type={group.type}
            placeholder={group.placeholder}
            size='md'
            variant='outline'
            focusBorderColor='purpleAlpha.500'
            errorBorderColor='redAlpha.500'
          />
        </InputGroup>
      );
    }
    return elements;
  };

  return (
    <FormControl isRequired={group.required}>
      <VStack w='600px' align='start' spacing={1}>
        {group.label ? (
          <FormLabel htmlFor={group.id}>{group.label}</FormLabel>
        ) : null}
        {renderInputs()}
        {group.helperText ? (
          <FormHelperText w='full' textAlign='right' color='gray.500'>
            {group.helperText}
          </FormHelperText>
        ) : null}
      </VStack>
    </FormControl>
  );
};

export default MultiInputGroup;
