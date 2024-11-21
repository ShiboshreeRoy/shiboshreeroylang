import React from 'react';
import { useSpring, animated } from '@react-spring/web';

interface PhysicsSpringProps {
  children: React.ReactNode;
  className?: string;
  tension?: number;
  friction?: number;
}

export const PhysicsSpring: React.FC<PhysicsSpringProps> = ({
  children,
  className = '',
  tension = 170,
  friction = 26,
}) => {
  const [props, api] = useSpring(() => ({
    from: { scale: 1 },
    config: { tension, friction },
  }));

  const handleMouseEnter = () => {
    api.start({ scale: 1.1 });
  };

  const handleMouseLeave = () => {
    api.start({ scale: 1 });
  };

  return (
    <animated.div
      style={props}
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </animated.div>
  );
};