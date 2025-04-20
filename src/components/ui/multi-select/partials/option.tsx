import { MultiSelectOptionProps } from '../@types';
import classes from '../styles.module.scss';
export const MultiSelectOption: React.FC<MultiSelectOptionProps> = ({ option: item, isSelected, onToggle }) => {
  return (
    <div className={classes.option} onClick={() => onToggle?.()}>
      <p>
        {item?.label} {isSelected ? '(1)' : '(0)'}
      </p>
    </div>
  );
};
