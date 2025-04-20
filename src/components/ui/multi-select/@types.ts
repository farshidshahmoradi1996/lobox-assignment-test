// OPTIONS
export type ValueType = string | number;
export type OptionType = {
  label?: string | null;
  value: ValueType;
};

export type MultiSelectDropdownProps = {
  options: OptionType[];
  selectedValues: ValueType[];
  onChange?: (values: ValueType[]) => void;
  itemToAdd?: string | null;
  onItemAdd?: (value: string) => void;
};

export type MultiSelectWrapperProps = {
  isOpen: boolean;
  onToggle: VoidFunction;
  placeholder?: string;
  inputValue?: string;
  onInputValueChange?: (value: string) => void;
} & MultiSelectDropdownProps;

export type MultiSelectItemAdderProps = {
  itemToAdd: string;
  onAdd: VoidFunction;
};

export type MultiSelectOptionProps = {
  option: OptionType;
  isSelected: boolean;
  onToggle?: VoidFunction;
};

export type MultiSelectChipsProps = {
  option?: OptionType;
  onRemove: VoidFunction;
};

export type MultiSelectProps = {
  disabled?: boolean;
  error?: boolean;
  className?: string;
  placeholder?: string;
} & Omit<MultiSelectDropdownProps, 'itemToAdd'>;
