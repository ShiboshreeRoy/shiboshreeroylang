# ShiboshreeLang Animation Framework

A professional animation framework with physics-based animations and matrix effects for React applications.

## Features

- 🎨 Physics-based card animations with 3D effects
- 🌊 Smooth parallax scrolling
- 🔮 Matrix rain effect
- ⚡ High performance with GPU acceleration
- 📱 Responsive design
- 🎯 Easy to use components

## Installation

```bash
npm install shiboshreeroylang
```

## Usage

```jsx
import { Parallax, PhysicsCard, MatrixRain } from 'shiboshreeroylang';

// Parallax Effect
function MyComponent() {
  return (
    <Parallax offset={50}>
      <h1>This content will have a parallax effect</h1>
    </Parallax>
  );
}

// Physics Card
function MyCard() {
  return (
    <PhysicsCard>
      <div>This card will react to mouse movements with physics</div>
    </PhysicsCard>
  );
}

// Matrix Rain Effect
function MyBackground() {
  return (
    <MatrixRain />
  );
}
```

## Components

### Parallax

Creates a smooth parallax scrolling effect.

Props:
- `offset` (optional): Number - The amount of parallax movement (default: 50)
- `children`: ReactNode - The content to apply the effect to

### PhysicsCard

Creates an interactive card with physics-based 3D rotation.

Props:
- `className` (optional): String - Additional CSS classes
- `children`: ReactNode - The card content

### MatrixRain

Creates a Matrix-style digital rain effect.

Props:
- `className` (optional): String - Additional CSS classes

## Author

Shiboshree Roy

## License

MIT