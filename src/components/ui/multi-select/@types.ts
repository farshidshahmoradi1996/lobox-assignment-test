export type MultiSelectWrapperProps = {
  isOpen: boolean;
  onToggle: VoidFunction;
  placeholder?: string;
};

// OPTIONS
export type ValueType = string | number;
export type OptionType = {
  label?: string | null;
  value: ValueType;
};

export type MultiSelectOptionProps = {
  option: OptionType;
  isSelected: boolean;
  onToggle?: VoidFunction;
};

export type MultiSelectDropdownProps = {
  options: OptionType[];
  selectedValues: ValueType[];
  onChange?: (values: ValueType[]) => void;
};

export type MultiSelectProps = {
  disabled?: boolean;
  error?: boolean;
  className?: string;
  placeholder?: string;
} & MultiSelectDropdownProps;
