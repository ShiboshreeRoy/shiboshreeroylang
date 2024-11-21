import React from 'react';
import { 
  Parallax, 
  PhysicsCard, 
  MatrixRain, 
  FloatingElement,
  GlowingText,
  ParticleField,
  SlideIn,
  PhysicsSpring,
  Rotate3DText
} from './lib';
import { Github, Code2, Sparkles, Box, Zap, Layers } from 'lucide-react';
import { Canvas } from '@react-three/fiber';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <MatrixRain />
      <div className="fixed inset-0 pointer-events-none">
        <ParticleField />
      </div>
      
      <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-sm p-4 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <GlowingText className="text-2xl font-bold">
            ShiboshreeLang
          </GlowingText>
          <a 
            href="https://github.com/ShiboshreeRoy/shiboshreeroylang.git" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-green-400 transition-colors"
          >
            <Github />
            GitHub
          </a>
        </div>
      </nav>

      <main className="container mx-auto px-4 pt-24">
        <Parallax>
          <FloatingElement>
            <h2 className="text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              Professional Animation Framework
            </h2>
          </FloatingElement>
          <p className="text-xl text-gray-300 mb-12">
            A powerful animation library with physics-based interactions and stunning visual effects
          </p>
        </Parallax>

        <div className="h-48 mb-16">
          <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Rotate3DText text="3D Animation" />
          </Canvas>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
          {[
            {
              icon: <Sparkles className="w-8 h-8 text-green-400" />,
              title: "Physics Animations",
              description: "Realistic physics-based interactions with smooth transitions",
              delay: 0
            },
            {
              icon: <Zap className="w-8 h-8 text-blue-400" />,
              title: "Spring Physics",
              description: "Natural spring animations with configurable parameters",
              delay: 0.2
            },
            {
              icon: <Layers className="w-8 h-8 text-purple-400" />,
              title: "3D Effects",
              description: "Beautiful 3D transformations and particle systems",
              delay: 0.4
            }
          ].map((feature, i) => (
            <SlideIn key={i} direction="up" delay={feature.delay}>
              <PhysicsSpring>
                <PhysicsCard className="bg-black/50 backdrop-blur p-6 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-colors">
                  <div className="flex flex-col items-center text-center gap-4">
                    {feature.icon}
                    <h3 className="text-2xl font-bold">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </PhysicsCard>
              </PhysicsSpring>
            </SlideIn>
          ))}
        </div>

        <section className="py-16">
          <GlowingText className="text-4xl font-bold mb-8">Documentation</GlowingText>
          <SlideIn direction="left">
            <div className="prose prose-invert max-w-none">
              <div className="bg-black/50 backdrop-blur p-8 rounded-xl border border-green-500/20">
                <h3>Installation</h3>
                <pre className="bg-black/50 p-4 rounded-lg">npm install shiboshreeroylang</pre>

                <h3 className="mt-8">Usage</h3>
                <pre className="bg-black/50 p-4 rounded-lg">
{`import { 
  Parallax, 
  PhysicsCard,
  MatrixRain,
  FloatingElement,
  GlowingText,
  ParticleField,
  SlideIn,
  PhysicsSpring,
  Rotate3DText
} from 'shiboshreeroylang';

// Slide-in Animation
<SlideIn direction="up" delay={0.2}>
  <YourContent />
</SlideIn>

// Physics Spring Animation
<PhysicsSpring tension={170} friction={26}>
  <YourContent />
</PhysicsSpring>

// 3D Rotating Text
<Canvas>
  <Rotate3DText text="3D Text" />
</Canvas>`}
                </pre>
              </div>
            </div>
          </SlideIn>
        </section>
      </main>
    </div>
  );
}

export default App;
