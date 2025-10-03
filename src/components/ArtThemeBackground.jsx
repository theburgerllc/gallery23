import { useEffect, useRef, useState } from 'react';

const ArtThemeBackground = () => {
  const canvasRef = useRef(null);
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);
  const animationFrameRef = useRef(null);
  const brushstrokesRef = useRef([]);
  const particlesRef = useRef([]);
  const shapesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  // Art-inspired color palettes
  const palettes = {
    gallery: ['#72BDC2', '#388B9E', '#5C7572', '#988C7F'],
    impressionist: ['#9BAFD9', '#C4A6C4', '#F4A8B6', '#FFD6A5'],
    abstract: ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF'],
    monochrome: ['#E8E8E8', '#C0C0C0', '#888888', '#505050']
  };

  const [currentPalette] = useState(palettes.gallery);

  // Initialize Vanta.js FOG effect
  useEffect(() => {
    if (!vantaEffect.current && window.VANTA && vantaRef.current) {
      vantaEffect.current = window.VANTA.FOG({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        highlightColor: 0x72BDC2,
        midtoneColor: 0x388B9E,
        lowlightColor: 0x5C7572,
        baseColor: 0x21221F,
        blurFactor: 0.6,
        speed: 0.8,
        zoom: 0.8
      });
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  // Canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Track mouse
    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Brushstroke class
    class Brushstroke {
      constructor() {
        this.points = [];
        this.maxPoints = 50;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.angle = Math.random() * Math.PI * 2;
        this.speed = 0.5 + Math.random() * 1;
        this.color = currentPalette[Math.floor(Math.random() * currentPalette.length)];
        this.opacity = 0;
        this.fadeIn = true;
        this.life = 0;
        this.maxLife = 300 + Math.random() * 200;
        this.width = 2 + Math.random() * 3;
      }

      update() {
        this.life++;

        // Fade in/out
        if (this.fadeIn && this.opacity < 0.15) {
          this.opacity += 0.005;
        } else if (this.life > this.maxLife * 0.7) {
          this.fadeIn = false;
          this.opacity -= 0.003;
        }

        // Move along angle with slight variation
        this.angle += (Math.random() - 0.5) * 0.1;
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;

        // Add point
        this.points.push({ x: this.x, y: this.y });
        if (this.points.length > this.maxPoints) {
          this.points.shift();
        }

        return this.opacity > 0 && this.life < this.maxLife;
      }

      draw(ctx) {
        if (this.points.length < 2) return;

        ctx.strokeStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.lineWidth = this.width;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        ctx.beginPath();
        ctx.moveTo(this.points[0].x, this.points[0].y);

        for (let i = 1; i < this.points.length; i++) {
          const point = this.points[i];
          ctx.lineTo(point.x, point.y);
        }

        ctx.stroke();
        ctx.globalAlpha = 1;
      }
    }

    // Paint particle class
    class PaintParticle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = -20;
        this.velocityY = 1 + Math.random() * 2;
        this.velocityX = (Math.random() - 0.5) * 0.5;
        this.size = 2 + Math.random() * 4;
        this.color = currentPalette[Math.floor(Math.random() * currentPalette.length)];
        this.opacity = 0.2;
        this.life = 0;
        this.maxLife = 200 + Math.random() * 100;
      }

      update() {
        this.life++;
        this.y += this.velocityY;
        this.x += this.velocityX;
        this.velocityY += 0.05; // Gravity
        this.opacity = Math.max(0, 0.2 - (this.life / this.maxLife) * 0.2);

        return this.y < canvas.height && this.life < this.maxLife;
      }

      draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    // Abstract shape class
    class AbstractShape {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = 50 + Math.random() * 100;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.01;
        this.color = currentPalette[Math.floor(Math.random() * currentPalette.length)];
        this.opacity = 0.05 + Math.random() * 0.1;
        this.sides = Math.floor(3 + Math.random() * 5); // 3-7 sides
        this.pulsePhase = Math.random() * Math.PI * 2;
        this.pulseSpeed = 0.02 + Math.random() * 0.03;
      }

      update() {
        this.rotation += this.rotationSpeed;
        this.pulsePhase += this.pulseSpeed;

        // Respond to mouse
        const dx = mouseRef.current.x - this.x;
        const dy = mouseRef.current.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 200) {
          this.x -= dx * 0.001;
          this.y -= dy * 0.001;
        }
      }

      draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);

        const pulse = Math.sin(this.pulsePhase) * 10;
        const currentSize = this.size + pulse;

        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;

        ctx.beginPath();
        for (let i = 0; i < this.sides; i++) {
          const angle = (i / this.sides) * Math.PI * 2;
          const x = Math.cos(angle) * currentSize;
          const y = Math.sin(angle) * currentSize;
          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.closePath();
        ctx.fill();

        ctx.globalAlpha = 1;
        ctx.restore();
      }
    }

    // Gallery grid
    const drawGalleryGrid = () => {
      ctx.strokeStyle = '#72BDC2';
      ctx.globalAlpha = 0.03;
      ctx.lineWidth = 1;

      const gridSize = 100;
      const offset = (Date.now() * 0.01) % gridSize;

      // Horizontal lines
      for (let y = -offset; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Vertical lines
      for (let x = -offset; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      ctx.globalAlpha = 1;
    };

    // Initialize shapes
    for (let i = 0; i < 8; i++) {
      shapesRef.current.push(new AbstractShape());
    }

    // Animation loop
    let lastBrushstroke = 0;
    let lastParticle = 0;

    const animate = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw gallery grid
      drawGalleryGrid();

      // Add new brushstrokes
      if (time - lastBrushstroke > 2000 && brushstrokesRef.current.length < 8) {
        brushstrokesRef.current.push(new Brushstroke());
        lastBrushstroke = time;
      }

      // Add new particles
      if (time - lastParticle > 300 && particlesRef.current.length < 30) {
        particlesRef.current.push(new PaintParticle());
        lastParticle = time;
      }

      // Update and draw abstract shapes
      shapesRef.current.forEach(shape => {
        shape.update();
        shape.draw(ctx);
      });

      // Update and draw brushstrokes
      brushstrokesRef.current = brushstrokesRef.current.filter(stroke => {
        const alive = stroke.update();
        stroke.draw(ctx);
        return alive;
      });

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter(particle => {
        const alive = particle.update();
        particle.draw(ctx);
        return alive;
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [currentPalette]);

  return (
    <>
      {/* Vanta FOG Layer (z-0) */}
      <div
        ref={vantaRef}
        className="absolute inset-0 z-0"
        style={{ opacity: 0.4 }}
      />

      {/* Canvas Animation Layer (z-1) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-1 pointer-events-none"
      />

      {/* Canvas texture overlay */}
      <div
        className="absolute inset-0 z-2 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}
      />
    </>
  );
};

export default ArtThemeBackground;
