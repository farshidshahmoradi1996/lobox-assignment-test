export type MultiSelectProps = {
  options: Array<{
    label: string;
    value: string;
  }>;
  selectedValues: string[];
  onChange: (values: string[]) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  className?: string;
} & React.HTMLProps<HTMLDivElement>;
