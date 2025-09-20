import React from 'react';

interface FloatingCirclesProps {
  colors: string[];
}

const FloatingCircles: React.FC<FloatingCirclesProps> = ({ colors }) => {
  const circles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    color: colors[i % colors.length],
    size: Math.random() * 40 + 15,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 4,
    shape: Math.random() > 0.5 ? 'circle' : 'square',
  }));

  // Add some celebration-themed shapes
  const celebrationElements = Array.from({ length: 8 }, (_, i) => ({
    id: `celebration-${i}`,
    emoji: ['🎉', '🥳', '✨', '🎈'][i % 4],
    size: Math.random() * 30 + 20,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 4 + Math.random() * 3,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {circles.map((circle) => (
        <div
          key={circle.id}
          className={`absolute opacity-20 animate-float ${
            circle.shape === 'circle' ? 'rounded-full' : 'rounded-lg transform rotate-45'
          }`}
          style={{
            backgroundColor: circle.color,
            width: `${circle.size}px`,
            height: `${circle.size}px`,
            left: `${circle.x}%`,
            top: `${circle.y}%`,
            animationDelay: `${circle.delay}s`,
            animationDuration: `${circle.duration}s`,
          }}
        />
      ))}
      {celebrationElements.map((element) => (
        <div
          key={element.id}
          className="absolute animate-float opacity-40 text-2xl"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            animationDelay: `${element.delay}s`,
            animationDuration: `${element.duration}s`,
          }}
        >
          {element.emoji}
        </div>
      ))}
    </div>
  );
};

export default FloatingCircles;