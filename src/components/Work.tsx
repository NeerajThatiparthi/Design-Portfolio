import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';

export default function Work() {
  const navigate = useNavigate();
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const logos = [
    {
      id: 'future-x',
      name: 'Future X',
      image: 'https://i.imgur.com/xSrIjlg.jpeg',
      category: 'Brand Identity',
      description: 'A modern and futuristic logo design that captures innovation and forward-thinking.'
    },
    {
      id: 'red-thunderbolt',
      name: 'Red Thunderbolt',
      image: 'https://i.imgur.com/7uJIUrf.png',
      category: 'Logo Design',
      description: 'Dynamic and energetic logo design representing power and speed.'
    },
    {
      id: 'authentic-gallery',
      name: 'Authentic Gallery',
      image: 'https://i.imgur.com/piJyd0P.jpeg',
      category: 'Brand Identity',
      description: 'Elegant and sophisticated logo design for an art gallery.'
    },
    {
      id: 'great-theory',
      name: 'Great Theory',
      image: 'https://i.imgur.com/XvUMBpR.jpeg',
      category: 'Logo Design',
      description: 'Minimalist and conceptual logo design representing abstract thinking.'
    }
  ];

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (card) {
        // Initial fade in animation
        gsap.fromTo(card,
          { opacity: 0, y: 50 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.8,
            delay: index * 0.2,
            ease: "power3.out"
          }
        );

        // Hover animations
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            scale: 1.03,
            duration: 0.5,
            ease: "power2.out"
          });
          gsap.to(card.querySelector('.logo-description'), {
            opacity: 1,
            y: 0,
            duration: 0.3
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            scale: 1,
            duration: 0.5,
            ease: "power2.out"
          });
          gsap.to(card.querySelector('.logo-description'), {
            opacity: 0,
            y: 20,
            duration: 0.3
          });
        });
      }
    });
  }, []);

  return (
    <section id="work" className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <div className="flex flex-col items-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-blue-500 text-sm uppercase tracking-wider mb-4"
            >
              Portfolio
            </motion.span>
            <h2 className="text-12xl md:text-8xl font-light text-white tracking-tighter uppercase text-center">
              Featured Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {logos.map((logo, index) => (
              <div
                key={logo.id}
                ref={el => cardsRef.current[index] = el}
                onClick={() => navigate(`/work/${logo.id}`)}
                className="relative overflow-hidden rounded-2xl cursor-pointer group"
              >
                <div className="relative aspect-[4/3]">
                  <img
                    src={logo.image}
                    alt={logo.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                  
                  {/* Logo Description Overlay */}
                  <div className="logo-description absolute inset-0 flex flex-col justify-end p-8 opacity-0 translate-y-4">
                    <div className="bg-black/80 p-6 rounded-xl backdrop-blur-sm">
                      <span className="text-blue-500 text-sm uppercase tracking-wider block mb-2">
                        {logo.category}
                      </span>
                      <h3 className="text-white text-2xl mb-2">{logo.name}</h3>
                      <p className="text-gray-300 text-sm">
                        {logo.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}