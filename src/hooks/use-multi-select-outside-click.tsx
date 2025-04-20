import { useCallback, useEffect } from 'react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  containerId: string;
};

export const useMultiSelectOutsideClick = ({ isOpen, onClose, containerId }: Props) => {
  const handleMouseDown = useCallback(
    (event: MouseEvent) => {
      const containerElement = document.getElementById(containerId);

      if (!containerElement) return;

      const isClickedItemSameRefElement = containerElement.contains(event.target as Node);
      if (!isClickedItemSameRefElement) onClose();
    },
    [containerId, onClose]
  );

  useEffect(() => {
    if (isOpen) document.addEventListener('mousedown', handleMouseDown);
    else document.removeEventListener('mousedown', handleMouseDown);

    return () => {
      // clear useEffect side effect
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [handleMouseDown, isOpen]);

  return null;
};
