import { MultiSelectDropdownProps, OptionType } from '../@types';
import classes from '../styles.module.scss';
import { MultiSelectOption } from './option';

export const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({ options, selectedValues, onChange }) => {
  const handleOnChange = (option: OptionType, isSelected: boolean) => {
    const newSelectedValues = isSelected
      ? selectedValues.filter((value) => value !== option.value)
      : [...selectedValues, option.value];

    onChange?.(newSelectedValues);
  };
  return (
    <div className={classes.dropdownContainer}>
      {options?.map((option) => {
        const isSelected = selectedValues.includes(option.value);
        return (
          <MultiSelectOption
            key={option.value}
            isSelected={isSelected}
            option={option}
            onToggle={() => handleOnChange(option, isSelected)}
          />
        );
      })}
    </div>
  );
};
