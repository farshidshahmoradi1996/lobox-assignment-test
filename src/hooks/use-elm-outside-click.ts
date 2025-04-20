import { useCallback, useEffect } from 'react';

type Props = {
  active: boolean;
  onOutsideClick: () => void;
  containerId: string;
};

export const useElmOutsideClick = ({ active, onOutsideClick, containerId }: Props) => {
  const handleMouseDown = useCallback(
    (event: MouseEvent) => {
      const containerElement = document.getElementById(containerId);

      if (!containerElement) return;

      const isClickedItemSameRefElement = containerElement.contains(event.target as Node);
      if (!isClickedItemSameRefElement) onOutsideClick();
    },
    [containerId, onOutsideClick]
  );

  useEffect(() => {
    if (active) document.addEventListener('mousedown', handleMouseDown);
    else document.removeEventListener('mousedown', handleMouseDown);

    return () => {
      // clear useEffect side effect
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [handleMouseDown, active]);

  return null;
};
