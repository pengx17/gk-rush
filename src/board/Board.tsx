import React from 'react';
import { css } from '@emotion/core';
import { animated, useSpring } from 'react-spring';
import { useDrag } from 'react-use-gesture';

export const Board: React.FC = () => {
  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }));
  const bind = useDrag(({ down, movement }) =>
    set({ xy: down ? movement : [0, 0] })
  );

  return (
    <div css={{ position: 'relative' }}>
      <animated.div
        {...bind()}
        css={css`
          position: absolute;
          width: 90px;
          height: 90px;
          overflow: visible;
          pointer-events: auto;
          border-radius: 5px;
          color: white;
          line-height: 90px;
          background: lightblue;
          text-transform: uppercase;
          letter-spacing: 2px;
        `}
        style={{ transform: xy.to((x, y) => `translate3D(${x}px, ${y}px, 0)`) }}
      ></animated.div>
    </div>
  );
};
