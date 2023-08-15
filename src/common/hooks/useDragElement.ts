import React, { useState, useRef, useEffect, useCallback } from 'react';

interface Position {
  x: number;
  y: number;
}

interface DraggableHookResult {
  (ref: React.MutableRefObject<HTMLElement> | null, isDragging: boolean): void;
}

const useDragElement: DraggableHookResult = () => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const dragRef = useRef<HTMLElement>();
  const positionRef = useRef<Position>({ x: 0, y: 0 });

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (dragRef.current instanceof HTMLElement) {
      console.log(positionRef.current.x, positionRef.current.y);
      const deltaX = e.clientX - positionRef.current.x;
      const deltaY = e.clientY - positionRef.current.y;
      dragRef.current.style.left = `${deltaX}px`;
      dragRef.current.style.top = `${deltaY}px`;
    }
  }, []);

  const onMouseUp = useCallback(() => {
    setIsDragging(false);
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  }, [onMouseMove]);

  const onMouseDown = useCallback(
    (e: MouseEvent) => {
      setIsDragging(true);
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
      if (dragRef.current instanceof HTMLElement) {
        positionRef.current = { x: e.clientX - dragRef.current.offsetLeft, y: e.clientY - dragRef.current.offsetTop };
      }
    },
    [onMouseMove, onMouseUp]
  );

  useEffect(() => {
    if (dragRef.current instanceof HTMLElement) {
      dragRef.current.addEventListener('mousedown', onMouseDown);
    }

    return () => {
      if (dragRef.current instanceof HTMLElement) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        dragRef.current.removeEventListener('mousedown', onMouseDown);
      }
    };
  }, [onMouseDown]);

  return { ref: dragRef || null, isDragging };
};

export default useDragElement;
