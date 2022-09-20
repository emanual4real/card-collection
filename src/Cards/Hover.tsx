import React, { useState } from 'react';
import { HoverProps } from './types';

const Hover = (props: HoverProps) => {
  const { top, left, width, height, color } = props;

  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div
      style={{
        position: 'absolute',
        top,
        left,
        width: `${width}px`,
        height: `${height}px`,
        border: visible ? `solid 2px ${color}` : 'none',
        zIndex: 100,
      }}
      onMouseOver={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
    />
  );
};

export default Hover;
