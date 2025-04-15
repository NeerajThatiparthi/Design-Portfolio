import { useRef } from 'react';
import { gsap } from 'gsap';

const GsapButton = ({ children }: { children: string }) => {
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleEnter = () => {
    gsap.to(btnRef.current, {
      background: '#D1FF00',
      clipPath: 'inset(0% 0% 0% 0%)',
      duration: 0.4,
      ease: 'power2.out',
    });
  };

  const handleLeave = () => {
    gsap.to(btnRef.current, {
      background: 'transparent',
      clipPath: 'inset(100% 0% 0% 0%)',
      duration: 0.4,
      ease: 'power2.inOut',
    });
  };

  return (
    <button
      ref={btnRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="relative px-6 py-3 border border-white rounded-full text-white font-medium overflow-hidden bg-transparent"
      style={{ clipPath: 'inset(100% 0% 0% 0%)' }}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default GsapButton;