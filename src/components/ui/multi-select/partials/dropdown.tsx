import { MultiSelectDropdownProps, OptionType } from '../@types';
import classes from '../styles.module.scss';
import { MultiSelectItemAdder } from './item-adder';
import { MultiSelectOption } from './option';

export const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({
  options,
  selectedValues,
  onChange,
  itemToAdd,
  onItemAdd
}) => {
  const handleOnChange = (option: OptionType, isSelected: boolean) => {
    const newSelectedValues = isSelected
      ? selectedValues.filter((value) => value !== option.value)
      : [...selectedValues, option.value];

    onChange?.(newSelectedValues);
  };
  const handleAddItem = () => itemToAdd && onItemAdd?.(itemToAdd);
  return (
    <div className={classes.dropdownContainer}>
      {itemToAdd && <MultiSelectItemAdder itemToAdd={itemToAdd} onAdd={handleAddItem} />}
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
