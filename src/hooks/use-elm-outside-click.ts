import { useCallback, useEffect, useRef } from 'react';

type Props = {
  active: boolean;
  onOutsideClick: () => void;
};

export const useElmOutsideClick = ({ active, onOutsideClick }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const handleMouseDown = useCallback(
    (event: MouseEvent) => {
      if (!ref?.current) return;

      const isClickedItemSameRefElement = ref.current?.contains(event.target as Node);
      if (!isClickedItemSameRefElement) onOutsideClick();
    },
    [ref, onOutsideClick]
  );

  useEffect(() => {
    if (active) document.addEventListener('mousedown', handleMouseDown);
    else document.removeEventListener('mousedown', handleMouseDown);

    return () => {
      // clear useEffect side effect
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [handleMouseDown, active]);

  return { ref };
};
