import { useEffect, useMemo, useState } from 'react';
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
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const { ref: containerRef } = useElmOutsideClick({ active: isOpen, onOutsideClick: () => setIsOpen(false) });

  useEffect(() => {
    // clear input on item selected
    setInputValue('');
  }, [selectedValues]);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };
  const handleOnItemAdd = (value: string) => {
    onItemAdd?.(value);
    setInputValue('');
  };

  const filteredOptionsByInputValue = useMemo(() => filterOptionsBySearch(options, inputValue), [options, inputValue]);
  const canAddItem = !!inputValue && filteredOptionsByInputValue?.length === 0;
  return (
    <div className={classes.container} ref={containerRef}>
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
