import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

interface Rotate3DTextProps {
  text: string;
  color?: string;
  speed?: number;
}

export const Rotate3DText: React.FC<Rotate3DTextProps> = ({
  text,
  color = '#50c878',
  speed = 1,
}) => {
  const textRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (textRef.current) {
      textRef.current.rotation.y = state.clock.getElapsedTime() * speed;
    }
  });

  return (
    <Text
      ref={textRef}
      fontSize={0.5}
      color={color}
      anchorX="center"
      anchorY="middle"
    >
      {text}
    </Text>
  );
};