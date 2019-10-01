import { Container, Sprite, Stage, useTick } from '@inlet/react-pixi';
import React, { useEffect, useState } from 'react';

const Bunny = () => {
  // states
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotation, setRotation] = useState(0);

  const [i, setI] = useState(0);

  // custom ticker
  useTick(delta => {
    setI(_i => _i + 0.05 * delta);
  });

  useEffect(() => {
    setX(Math.sin(i) * 100);
    setY(Math.sin(i / 1.5) * 100);
    setRotation(-10 + Math.sin(i / 10 + Math.PI * 2) * 10);
  }, [i]);

  return (
    <Sprite
      image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png"
      anchor={[0.5, 0.5]}
      x={x}
      y={y}
      rotation={rotation}
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
