import { Container, Sprite, Stage, useTick } from '@inlet/react-pixi';
import React, { useRef } from 'react';
import { useImmer } from 'use-immer';

const Bunny = () => {
  const [motion, setMotion] = useImmer({
    x: 0,
    y: 0,
    rotation: 0
  });
  const iRef = useRef(0);

  // custom ticker
  useTick(delta => {
    const i = (iRef.current += 0.05 * delta);
    setMotion(draft => {
      draft.x = Math.sin(i) * 100;
      draft.y = Math.sin(i / 1.5) * 100;
      draft.rotation = -10 + Math.sin(i / 10 + Math.PI * 2) * 10;
    });
  });

  return (
    <Sprite
      {...motion}
      anchor={0.5}
      image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png"
    />
  );
};

export const App = () => (
  <Stage width={300} height={300} options={{ backgroundColor: 0x01262a }}>
    <Container x={150} y={150}>
      <Bunny />
    </Container>
  </Stage>
);
