import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

const LayoutComponent: React.FC = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(0);

  useLayoutEffect(() => {
    if (divRef.current) {
      const divWidth = divRef.current.getBoundingClientRect().width;
      setWidth(divWidth);
    }
  }, []);

  useEffect(() => {
    console.log('Div width updated:', width);
  }, [width]);

  return <div ref={divRef}>Width: {width}</div>;
};

export default LayoutComponent;
