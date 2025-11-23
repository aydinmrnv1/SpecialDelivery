import React, { useEffect, useRef } from 'react';

const PixieDust: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    
    // Set actual canvas size to match display size for sharpness
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const particles: { x: number; y: number; size: number; alpha: number; speedX: number; speedY: number; life: number; decay: number; maxAlpha: number }[] = [];
    
    // Create new particle
    const createParticle = () => {
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.5,
        alpha: 0,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        life: 0,
        decay: Math.random() * 0.02 + 0.01,
        maxAlpha: Math.random() * 0.8 + 0.2
      };
    };

    // Initialize some particles
    for (let i = 0; i < 50; i++) {
        particles.push(createParticle());
    }

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      
      particles.forEach((p, index) => {
        // Update life
        p.life += p.decay;
        
        // Fade in and out logic
        if (p.life < 0.5) {
            p.alpha = (p.life / 0.5) * p.maxAlpha;
        } else {
            p.alpha = (1 - (p.life - 0.5) / 0.5) * p.maxAlpha;
        }

        // Move
        p.x += p.speedX;
        p.y += p.speedY;

        // Draw
        ctx.fillStyle = `rgba(255, 223, 100, ${Math.max(0, p.alpha)})`; // Gold/Yellow tint
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Add sparkle cross occasionally
        if (p.alpha > 0.5 && p.size > 1.5) {
             ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
             ctx.fillRect(p.x - p.size*2, p.y - 0.5, p.size*4, 1);
             ctx.fillRect(p.x - 0.5, p.y - p.size*2, 1, p.size*4);
        }

        // Reset if dead
        if (p.life >= 1) {
            particles[index] = createParticle();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    
    const handleResize = () => {
        if (!canvas) return;
        width = canvas.offsetWidth;
        height = canvas.offsetHeight;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.scale(dpr, dpr);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none z-20 mix-blend-screen"
    />
  );
};

export default PixieDust;