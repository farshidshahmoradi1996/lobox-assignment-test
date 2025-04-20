import clsx from 'clsx';
import type { MultiSelectWrapperProps, ValueType } from '../@types';
import classes from '../styles.module.scss';
import { MultiSelectChips } from './chips';
import { useEffect, useRef } from 'react';
import { ChevronDownIcon } from '@/assets';

export const MultiSelectWrapper: React.FC<MultiSelectWrapperProps> = ({
  placeholder,
  onToggle,
  isOpen,
  options,
  selectedValues,
  onChange,
  inputValue,
  onInputValueChange
}) => {
  const handleRemoveItem = (optionValue: ValueType) => {
    const filteredOptions = selectedValues.filter((value) => value !== optionValue);
    onChange?.(filteredOptions);
  };
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    // focus input when dropdown is open
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, selectedValues]);

  return (
    <div className={clsx(classes.wrapper, isOpen && classes.open)} onClick={onToggle}>
      <div>
        {selectedValues?.map((chips) => (
          <MultiSelectChips
            key={chips}
            option={options?.find((item) => item.value === chips)}
            onRemove={() => handleRemoveItem(chips)}
          />
        ))}
        <input
          placeholder={placeholder}
          autoFocus={isOpen}
          ref={inputRef}
          value={inputValue}
          onChange={(e) => onInputValueChange?.(e.currentTarget.value)}
        />
      </div>

      <ChevronDownIcon />
    </div>
  );
};
