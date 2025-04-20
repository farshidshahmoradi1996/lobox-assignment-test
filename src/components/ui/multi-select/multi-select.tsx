import { useEffect, useId, useMemo, useState } from 'react';
import type { MultiSelectProps } from './@types';
import classes from './styles.module.scss';

import { useElmOutsideClick } from '@/hooks';
import { MultiSelectDropdown, MultiSelectWrapper } from './partials';
import { filterOptionsBySearch } from '@/helpers';

export const MultiSelect: React.FC<MultiSelectProps> = ({
  placeholder,
  options,
  selectedValues,
  onChange,
  onItemAdd
}) => {
  const id = useId();
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  useElmOutsideClick({ active: isOpen, onOutsideClick: () => setIsOpen(false), containerId: `multi-select-${id}` });

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const filteredOptionsByInputValue = useMemo(() => filterOptionsBySearch(options, inputValue), [options, inputValue]);
  const canAddItem = !!inputValue && filteredOptionsByInputValue?.length === 0;

  const handleOnItemAdd = (value: string) => {
    onItemAdd?.(value);
    setInputValue('');
  };

  useEffect(() => {
    setInputValue('');
  }, [selectedValues]);

  return (
    <div className={classes.container} id={`multi-select-${id}`}>
      <MultiSelectWrapper
        placeholder={placeholder}
        isOpen={isOpen}
        onToggle={toggleOpen}
        options={options}
        selectedValues={selectedValues}
        onChange={onChange}
        inputValue={inputValue}
        onInputValueChange={setInputValue}
      />
      {isOpen && (
        <MultiSelectDropdown
          options={filteredOptionsByInputValue}
          selectedValues={selectedValues}
          onChange={onChange}
          itemToAdd={canAddItem ? inputValue : null}
          onItemAdd={handleOnItemAdd}
        />
      )}
    </div>
  );
};
