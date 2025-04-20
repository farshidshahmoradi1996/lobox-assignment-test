import { useCallback, useEffect } from 'react';

type Props = {
  keyToListen: string;
  callback?: VoidFunction;
};

export const useKeyboardListener = ({ callback, keyToListen }: Props) => {
  const handleKeyUp = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === keyToListen) {
        callback?.();
      }
    },
    [callback, keyToListen]
  );

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [handleKeyUp]);
};
