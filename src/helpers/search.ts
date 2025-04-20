import { OptionType } from '@/components/ui/multi-select/@types';

export const filterOptionsBySearch = (options: OptionType[], searchTerm: string) => {
  if (!searchTerm) return options;
  const regex = new RegExp(searchTerm, 'i');
  return options.filter((option) => {
    return option?.label && regex.test(option?.label);
  });
};
