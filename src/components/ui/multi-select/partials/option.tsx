import clsx from 'clsx';
import { MultiSelectOptionProps } from '../@types';
import classes from '../styles.module.scss';
import { CheckedIcon } from '@/assets';
export const MultiSelectOption: React.FC<MultiSelectOptionProps> = ({ option: item, isSelected, onToggle }) => {
  return (
    <div className={clsx(classes.option, isSelected && classes.selected)} onClick={() => onToggle?.()}>
      <p>{item?.label}</p>
      {isSelected && <CheckedIcon />}
    </div>
  );
};
