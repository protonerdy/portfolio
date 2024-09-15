import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hoveringElement, setHoveringElement] = useState(null);

  useEffect(() => {
    const handleMouseMove = e => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Detect if hovering over an element with the 'magnify' class
      const element = document.elementFromPoint(e.clientX, e.clientY);
      if (element && element.classList.contains('magnify')) {
        setHoveringElement(element);
      } else {
        setHoveringElement(null);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (hoveringElement) {
      hoveringElement.style.transform = 'scale(1.5)';
    }

    return () => {
      if (hoveringElement) {
        hoveringElement.style.transform = 'scale(1)';
      }
    };
  }, [hoveringElement]);

  return (
    <div
      className='custom-cursor'
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default CustomCursor;
