import { MultiSelect } from '@/components';
import { useState } from 'react';
import { OptionType, ValueType } from './components/ui/multi-select/@types';

const DEFAULT_OPTIONS = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
  { label: 'Option 4', value: 'option4' },
  { label: 'Option 5', value: 'option5' },
  { label: 'Option 6', value: 'option6' }
];
function App() {
  const [itemsAddedByUser, setItemsAddedByUser] = useState<OptionType[]>([]);
  const [selectedValues, setSelectedValues] = useState<ValueType[]>([]);

  const handleAddItem = (itemValue: string) => {
    setItemsAddedByUser([...itemsAddedByUser, { label: itemValue, value: itemValue }]);
    setSelectedValues([...selectedValues, itemValue]);
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
      }}
    >
      <MultiSelect
        placeholder="select ..."
        options={[...DEFAULT_OPTIONS, ...itemsAddedByUser]}
        selectedValues={selectedValues}
        onChange={setSelectedValues}
        onItemAdd={handleAddItem}
      />
    </div>
  );
}

export default App;
