import { MultiSelect } from '@/components';
import { useState } from 'react';
import { OptionType, ValueType } from './components/ui/multi-select/@types';
import classes from '@/styles/app.module.scss';
import { HOBBIES } from '@/constants';

function App() {
  const [itemsAddedByUser, setItemsAddedByUser] = useState<OptionType[]>([]);
  const [selectedValues, setSelectedValues] = useState<ValueType[]>([]);

  const handleAddItem = (itemValue: string) => {
    setItemsAddedByUser([...itemsAddedByUser, { label: itemValue, value: itemValue }]);
    setSelectedValues([...selectedValues, itemValue]);
  };

  return (
    <div className={classes.centerScreen}>
      <MultiSelect
        placeholder="Select favorites"
        options={[...itemsAddedByUser, ...HOBBIES]}
        selectedValues={selectedValues}
        onChange={setSelectedValues}
        onItemAdd={handleAddItem}
      />
    </div>
  );
}

export default App;
