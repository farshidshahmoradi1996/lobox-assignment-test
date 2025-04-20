import { useKeyboardListener } from '@/hooks';
import { MultiSelectItemAdderProps } from '../@types';
import classes from './../styles.module.scss';

export const MultiSelectItemAdder: React.FC<MultiSelectItemAdderProps> = ({ itemToAdd, onAdd }) => {
  useKeyboardListener({ keyToListen: 'Enter', callback: onAdd });
  return <p className={classes.addText}>Press Enter to add "{itemToAdd}"</p>;
};
