// app/components/Hero.tsx
'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const loopAnim = gsap.to(textRef.current, {
        xPercent: -100,
        repeat: -1,
        duration: 15,
        ease: 'linear',
      });

      const trigger = ScrollTrigger.create({
        start: 0,
        end: 'max',
        onUpdate: (self) => {
          const direction = self.direction === 1 ? 1 : -1;
          loopAnim.timeScale(direction);
        },
      });

      return () => {
        loopAnim.kill();
        trigger.kill();
      };
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-4 sm:px-6">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.imgur.com/gzGfCl3.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Hero Overlay Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute top-[30%] right-8 sm:right-20 z-10 text-right max-w-[90%] sm:max-w-none"
      >
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-light leading-tight tracking-wide">
          Freelance<br />Logo Designer
        </h2>
      </motion.div>

      {/* Scrolling Name Text */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1 }}
        className="absolute bottom-4 sm:bottom-8 left-0 w-full z-10"
      >
        <div className="overflow-hidden whitespace-nowrap w-full">
          <div ref={textRef} className="flex will-change-transform">
            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-[13rem] font-medium text-white tracking-tight">
              Neeraj Thatiparthi&nbsp;&nbsp;&nbsp;&nbsp;Neeraj Thatiparthi&nbsp;&nbsp;&nbsp;&nbsp;Neeraj Thatiparthi&nbsp;&nbsp;&nbsp;&nbsp;Neeraj Thatiparthi
            </h1>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
