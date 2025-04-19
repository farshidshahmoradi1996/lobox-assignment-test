import type { MultiSelectProps } from './multi-select.types';
import classes from './styles.module.scss';
import { MultiSelectWrapper } from './wrapper';

export const MultiSelect: React.FC<MultiSelectProps> = () => {
  return (
    <div className={classes.container}>
      <MultiSelectWrapper />
    </div>
  );
};
