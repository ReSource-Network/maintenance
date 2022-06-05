import { FormControl, FormLabel, Select } from '@chakra-ui/react';

const CategorySelect = (label: string, categories: string[]) => {
  return (
    <FormControl isRequired>
      <FormLabel>{label}</FormLabel>
      <Select
        cursor='pointer'
        variant='filled'
        placeholder={'Select option'}
        focusBorderColor='purpleAlpha.500'
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

export default CategorySelect;
