import clsx from 'clsx';
import type { MultiSelectWrapperProps } from '../@types';
import classes from '../styles.module.scss';

export const MultiSelectWrapper: React.FC<MultiSelectWrapperProps> = ({ placeholder, onToggle, isOpen }) => {
  return (
    <div className={clsx(classes.wrapper, isOpen && classes.open)} onClick={onToggle}>
      <input placeholder={placeholder} autoFocus={isOpen} />
    </div>
  );
};
