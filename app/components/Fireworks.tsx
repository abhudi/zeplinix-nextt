"use client";

import { useEffect, useRef, useState } from "react";

const FireworksCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isVisible, setIsVisible] = useState(true); // Manage visibility state

  useEffect(() => {
    if (!isVisible) return; // Do nothing if the component is not visible

    const canvas: HTMLCanvasElement | null = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d")!;
    let w: number, h: number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let particles: any[] = [];
    const probability = 0.04;
    let xPoint: number, yPoint: number;
    let animationFrameId: number;
    let stopAnimation = false;

    const resizeCanvas = () => {
      if (canvas) {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
      }
    };

    const createFirework = () => {
      xPoint = Math.random() * (w - 200) + 100;
      yPoint = Math.random() * (h - 200) + 100;
      const nFire = Math.random() * 50 + 100;
      const c = `rgb(${~~(Math.random() * 200 + 55)},${~~(
        Math.random() * 200 +
        55
      )},${~~(Math.random() * 200 + 55)})`;
      for (let i = 0; i < nFire; i++) {
        const particle = new Particle();
        particle.color = c;
        const vy = Math.sqrt(25 - particle.vx * particle.vx);
        if (Math.abs(particle.vy) > vy) {
          particle.vy = particle.vy > 0 ? vy : -vy;
        }
        particles.push(particle);
      }
    };

    const updateWorld = () => {
      if (stopAnimation) return; // Stop animation if the flag is set
      update();
      paint();
      animationFrameId = window.requestAnimationFrame(updateWorld);
    };

    const update = () => {
      if (particles.length < 500 && Math.random() < probability) {
        createFirework();
      }
      particles = particles.filter((p) => p.move());
    };

    const paint = () => {
      ctx.clearRect(0, 0, w, h); // Clear the canvas
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = "rgba(0,0,0,0.2)";
      ctx.fillRect(0, 0, w, h);

      // Draw "Happy New Year" text at the top
      if (w > 600) {
        // Only draw the text if the screen width is greater than 600px
        const fontSize = Math.min(w / 15, 60);
        ctx.font = `bold ${fontSize}px Arial`;
        ctx.fillStyle = "#FFFFFF";
        ctx.textAlign = "center";
        ctx.fillText("Happy New Year", w / 2, 200); // Position the text at the top
      }

      ctx.globalCompositeOperation = "lighter";
      particles.forEach((p) => p.draw(ctx));
    };

    class Particle {
      w: number;
      h: number;
      x: number;
      y: number;
      vx: number;
      vy: number;
      alpha: number;
      color: string | undefined;
      gravity = 0.05;

      constructor() {
        this.w = this.h = Math.random() * 4 + 1;
        this.x = xPoint - this.w / 2;
        this.y = yPoint - this.h / 2;
        this.vx = (Math.random() - 0.5) * 10;
        this.vy = (Math.random() - 0.5) * 10;
        this.alpha = Math.random() * 0.5 + 0.5;
      }

      move() {
        this.x += this.vx;
        this.vy += this.gravity;
        this.y += this.vy;
        this.alpha -= 0.01;
        return (
          this.x > -this.w &&
          this.x < screen.width &&
          this.y < screen.height &&
          this.alpha > 0
        );
      }

      draw(c: CanvasRenderingContext2D) {
        c.save();
        c.beginPath();
        c.translate(this.x + this.w / 2, this.y + this.h / 2);
        c.arc(0, 0, this.w, 0, Math.PI * 2);
        c.fillStyle = this.color!;
        c.globalAlpha = this.alpha;
        c.closePath();
        c.fill();
        c.restore();
      }
    }

    window.addEventListener("resize", resizeCanvas, false);
    resizeCanvas();

    // Start the animation
    animationFrameId = window.requestAnimationFrame(updateWorld);

    // Stop the animation and hide the component after 5 seconds
    const timeoutId = setTimeout(() => {
      stopAnimation = true;
      setIsVisible(false); // Hide the component
    }, 5000);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      clearTimeout(timeoutId); // Clear the timeout if the component unmounts early
      window.cancelAnimationFrame(animationFrameId); // Cancel any remaining animation frames
    };
  }, [isVisible]);

  // Render only if the component is visible
  return isVisible ? (
    <div>
      <canvas
        ref={canvasRef}
        style={{ background: "#000", display: "block" }}
      />
    </div>
  ) : null;
};

export default FireworksCanvas;
