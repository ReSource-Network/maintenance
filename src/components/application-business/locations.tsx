import {
  Checkbox,
  Divider,
  FormControl,
  FormLabel,
  Stack,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';

const Locations = (locations: string[]) => {
  const [checkedItems, setCheckedItems] = useState([false, false]);
  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  const checkAll = (checked: boolean) => {
    let newCheckedItems = [];

    for (let i = 0; i < locations.length; i++) {
      newCheckedItems.push(checked);
    }

    setCheckedItems(newCheckedItems);
  };

  const checkIndex = (checked: boolean, index: number) => {
    let newCheckedItems = [];

    for (let i = 0; i < locations.length; i++) {
      i === index
        ? newCheckedItems.push(checked)
        : newCheckedItems.push(checkedItems[i]);
    }

    setCheckedItems(newCheckedItems);
  };

  return (
    <VStack spacing={2} w='full' align='start'>
      <FormControl isRequired>
        <FormLabel>Location</FormLabel>
        <Checkbox
          isChecked={allChecked}
          isIndeterminate={isIndeterminate}
          onChange={(e) => checkAll(e.target.checked)}
        >
          All locations
        </Checkbox>
        <Divider />
        <Stack mt={1} spacing={1}>
          {locations.map((location) => (
            <Checkbox
              isChecked={checkedItems[locations.indexOf(location)]}
              onChange={(e) =>
                checkIndex(e.target.checked, locations.indexOf(location))
              }
            >
              {location}
            </Checkbox>
          ))}
        </Stack>
      </FormControl>
    </VStack>
  );
};

export default Locations;
