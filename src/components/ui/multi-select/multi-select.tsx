import { useId, useState } from 'react';
import type { MultiSelectProps } from './@types';
import classes from './styles.module.scss';

import { useMultiSelectOutsideClick } from '@/hooks';
import { MultiSelectDropdown, MultiSelectWrapper } from './partials';

export const MultiSelect: React.FC<MultiSelectProps> = ({ placeholder, options, selectedValues, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const id = useId();

  useMultiSelectOutsideClick({ isOpen, onClose: () => setIsOpen(false), containerId: `multi-select-${id}` });

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={classes.container} id={`multi-select-${id}`}>
      <MultiSelectWrapper placeholder={placeholder} isOpen={isOpen} onToggle={toggleOpen} />
      {isOpen && <MultiSelectDropdown options={options} selectedValues={selectedValues} onChange={onChange} />}
    </div>
  );
};
