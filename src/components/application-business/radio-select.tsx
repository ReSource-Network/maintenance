import { Radio, RadioGroup } from '@chakra-ui/radio';
import { HStack } from '@chakra-ui/react';
import { useState } from 'react';

const RadioSelect = (options: string[]) => {
  const [value, setValue] = useState('1');

  const renderOptions = () => {
    let elements = [];

    for (let i = 0; i < options.length; i++) {
      elements.push(<Radio value={options[i]}>{options[i]}</Radio>);
    }

    return elements;
  };

  return (
    <RadioGroup onChange={setValue} value={value}>
      <HStack mt={4} spacing={6} align='start'>
        {renderOptions()}
      </HStack>
    </RadioGroup>
  );
};

export default RadioSelect;
