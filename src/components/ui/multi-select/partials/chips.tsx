import { CloseIcon } from '@/assets';
import { MultiSelectChipsProps } from '../@types';
import classes from './../styles.module.scss';
export const MultiSelectChips: React.FC<MultiSelectChipsProps> = ({ onRemove, option }) => {
  return (
    <div className={classes.chips}>
      <p>{option?.label}</p>
      <div className={classes.iconContainer} onClick={onRemove}>
        <CloseIcon />
      </div>
    </div>
  );
};
