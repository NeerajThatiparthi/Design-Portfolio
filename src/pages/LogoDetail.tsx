import { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function LogoDetail() {
  const { id } = useParams();
  const imageRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  // Scroll to top and handle browser scroll restoration
  useEffect(() => {
    // Disable browser scroll restoration
    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual';
    }

    // Scroll to top immediately
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Fallback to ensure scroll after DOM is ready
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    // Run after a short delay to ensure page is loaded
    const timeout = setTimeout(scrollToTop, 100);

    // Add event listener for page load to catch any late rendering
    window.addEventListener('load', scrollToTop);

    // Cleanup
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('load', scrollToTop);
    };
  }, [id]);

  const logos = {
    'future-x': {
      name: 'Future X',
      mainImage: 'https://i.imgur.com/xSrIjlg.jpeg',
      category: 'Brand Identity',
      year: '2024',
      brief: 'Future X is a clothing brand for young adults (18–30) that blends affordability with a bold, futuristic aesthetic. We make everyday tees feel modern, premium, and effortlessly cool.',
      objective: 'Design a minimal, edgy logo that reflects the brand\'s futuristic vibe - something clean, wearable, and instantly recognizable. It should feel premium but still accessible.',
      keywords: ['Futuristic', 'Minimum', 'Edgy', 'Affordable', 'Premium', 'Gen-Z', 'Streetwear'],
      visualStyle: 'Modern sans-serif, bold letterforms, tech-inspired layouts, monochrome or chrome tones. Think wearable tech meets fashion-forward basics.',
      gallery: [
        {
          image: 'https://i.imgur.com/OfDkz9M.jpeg',
          caption: 'Main Logo Design',
          size: 'md'
        },
        {
          image: 'https://i.imgur.com/ADjXuwc.png',
          caption: 'Initial Sketches & Concepts',
          size: 'lg'
        },
        {
          image: 'https://i.imgur.com/nf8XPcC.jpeg',
          caption: 'T-shirt Application',
          size: 'md'
        },
        {
          image: 'https://i.imgur.com/Kx7SNuZ.jpeg',
          caption: 'Business Cards',
          size: 'sm'
        },
        {
          image: 'https://i.imgur.com/GvGVjiI.jpeg',
          caption: 'Tote Bag Design',
          size: 'md'
        },
        {
          image: 'https://i.imgur.com/4nSyQuB.jpeg',
          caption: 'Vehicle Branding',
          size: 'lg'
        },
        {
          image: 'https://i.imgur.com/J2qNcH7.jpeg',
          caption: 'Store Signage',
          size: 'sm'
        },
        {
          image: 'https://i.imgur.com/Thh1Phs.jpeg',
          caption: 'Billboard Application',
          size: 'lg'
        }
      ]
    },
    'red-thunderbolt': {
      name: 'Red Thunderbolt',
      mainImage: 'https://i.imgur.com/7uJIUrf.png',
      category: 'Brand Identity',
      year: '2025',
      brief: 'Red Thunderbolt is a premium bus service that delivers an exceptional transportation experience with a focus on performance. We aim to redefine travel for our customers by offering high-quality, reliable, and dynamic bus services that stand out in the market.',
      objective: 'Create a powerful combination mark that captures the essence of speed, reliability, and premium service while maintaining approachability and excitement.',
      coreValues: ['Excitement', 'Performance', 'Premium Quality', 'Reliability', 'Approachability'],
      targetAudience: 'Independent individuals—singles, solo travellers, or professionals—who value quality transportation that aligns with their lifestyle. They seek convenience, excitement, and a service they can rely on without compromise.',
      visualStyle: 'The logo reflects the brand\'s focus on performance—sleek, modern, and powerful, with a thunderbolt-inspired element. Bold, striking aesthetic balanced with clean lines to convey agreeability. Vibrant reds paired with metallic tones emphasize premium quality.',
      gallery: [
        {
          image: 'https://i.imgur.com/MhtKqrJ.jpeg',
          caption: 'Main Logo on White',
          size: 'lg'
        },
        {
          image: 'https://i.imgur.com/wOetuu3.jpeg',
          caption: 'Main Logo on Black',
          size: 'md'
        },
        {
          image: 'https://i.imgur.com/mA4J6KS.jpeg',
          caption: 'App Icon Design',
          size: 'sm'
        },
        {
          image: 'https://i.imgur.com/jTke34p.jpeg',
          caption: 'Merchandise Application',
          size: 'md'
        },
        {
          image: 'https://i.imgur.com/zCH3yl6.jpeg',
          caption: 'Roadside Banner',
          size: 'lg'
        },
        {
          image: 'https://i.imgur.com/PDzbwOI.png',
          caption: 'Warehouse Display',
          size: 'lg'
        },
        {
          image: 'https://i.imgur.com/zXdNi3M.jpeg',
          caption: 'Bus Stand Display',
          size: 'md'
        },
        {
          image: 'https://i.imgur.com/WtNA5Rd.jpeg',
          caption: 'Subway LED Display',
          size: 'lg'
        }
      ]
    },
    'authentic-gallery': {
      name: 'Authentic Gallery',
      mainImage: 'https://i.imgur.com/OPKU8D2.jpeg',
      category: 'Brand Identity',
      year: '2024',
      brief: 'We are a company that makes high-quality boats with an emphasis on customizability. Our target audience is young adults. We want to convey a sense of mystery, while at the same time being down-to-earth.',
      objective: 'Create an emblem logo that uses white as the primary color, designed specifically for digital applications while maintaining the brand\'s mysterious yet approachable aesthetic.',
      coreValues: ['Quality', 'Customization', 'Mystery', 'Approachability'],
      targetAudience: 'Young adults seeking premium, customizable boats that reflect their individual style while maintaining a connection to traditional craftsmanship.',
      visualStyle: 'An emblem-style design that emphasizes white space and clean lines, creating a balance between sophistication and accessibility. The design needs to work seamlessly across digital platforms while maintaining its impact.',
      gallery: [
        {
          image: 'https://i.imgur.com/OPKU8D2.jpeg',
          caption: 'Main Logo (White)',
          size: 'lg'
        },
        {
          image: 'https://i.imgur.com/YdExvDF.png',
          caption: 'Main Logo (Black)',
          size: 'lg'
        }
      ]
    },
    'great-theory': {
      name: 'Great Theory',
      mainImage: 'https://i.imgur.com/scRdZaV.png',
      category: 'Brand Identity',
      year: '2024',
      brief: 'We are a company that makes premium scooters with an emphasis on form over function. Our target audience is millennials. We want to convey a sense of bravery, while at the same time being approachable.',
      objective: 'Design a wordmark using green as the primary color, suitable for embroidery on uniforms while embodying the brand\'s commitment to bold design and approachability.',
      coreValues: ['Premium Quality', 'Design-First', 'Bravery', 'Approachability'],
      targetAudience: 'Design-conscious millennials who appreciate premium scooters that prioritize aesthetic appeal without compromising on quality.',
      visualStyle: 'A sophisticated wordmark that emphasizes the brand\'s focus on form, utilizing green as the primary color. The design must maintain its integrity when embroidered while conveying both courage and accessibility.',
      gallery: [
        {
          image: 'https://i.imgur.com/scRdZaV.png',
          caption: 'Main Logo',
          size: 'lg'
        },
        {
          image: 'https://i.imgur.com/zj910gy.png',
          caption: 'Logo on Black Background',
          size: 'md'
        },
        {
          image: 'https://i.imgur.com/0OHYMOD.jpeg',
          caption: 'Logo in White',
          size: 'md'
        }
      ]
    }
  };

  const logo = logos[id as keyof typeof logos];

  useEffect(() => {
    if (!logo) return;

    // Refresh ScrollTrigger to prevent animation conflicts
    ScrollTrigger.refresh();

    // Hero section animations
    if (imageRef.current) {
      gsap.fromTo(imageRef.current,
        { opacity: 0, scale: 1.1 },
        { opacity: 1, scale: 1, duration: 1.5, ease: "power3.out" }
      );
    }

    // Content section animations
    if (contentRef.current) {
      gsap.fromTo(contentRef.current.children,
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
          }
        }
      );
    }

    // Gallery animations with masonry layout
    if (galleryRef.current) {
      const images = galleryRef.current.querySelectorAll('.gallery-item');
      images.forEach((image, index) => {
        gsap.fromTo(image,
          { 
            opacity: 0,
            y: 50,
            scale: 0.95
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            delay: index * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: image,
              start: "top 85%",
            }
          }
        );
      });
    }

    // Cleanup animations on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [logo]);

  if (!logo) {
    return <div>Logo not found</div>;
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="h-screen relative overflow-hidden">
        <img
          ref={imageRef}
          src={logo.mainImage}
          alt={logo.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="absolute top-8 left-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-white hover:text-blue-500 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 w-full p-12">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-4 mb-4"
            >
              <span className="text-blue-500 text-sm uppercase tracking-wider">
                {logo.category}
              </span>
              <span className="text-gray-400 text-sm">
                {logo.year}
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-5xl md:text-7xl font-light text-white mb-4"
            >
              {logo.name}
            </motion.h1>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-24">
        <div ref={contentRef} className="max-w-4xl mx-auto space-y-16">
          {/* Brand Overview */}
          <div>
            <h2 className="text-3xl text-white mb-6">Brand Overview</h2>
            <p className="text-gray-400 text-xl leading-relaxed">
              {logo.brief}
            </p>
          </div>

          {/* Objective */}
          <div>
            <h2 className="text-3xl text-white mb-6">The Objective</h2>
            <p className="text-gray-400 text-xl leading-relaxed">
              {logo.objective}
            </p>
          </div>

          {/* Target Audience */}
          {'targetAudience' in logo && (
            <div>
              <h2 className="text-3xl text-white mb-6">Target Audience</h2>
              <p className="text-gray-400 text-xl leading-relaxed">
                {logo.targetAudience}
              </p>
            </div>
          )}

          {/* Core Values */}
          {'coreValues' in logo && (
            <div>
              <h2 className="text-3xl text-white mb-6">Core Values</h2>
              <div className="flex flex-wrap gap-3">
                {logo.coreValues.map((value, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-gray-900 text-gray-300 rounded-full text-sm"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Keywords */}
          {'keywords' in logo && (
            <div>
              <h2 className="text-3xl text-white mb-6">Brand Keywords</h2>
              <div className="flex flex-wrap gap-3">
                {logo.keywords.map((keyword, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-gray-900 text-gray-300 rounded-full text-sm"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Visual Direction */}
          <div>
            <h2 className="text-3xl text-white mb-6">Visual Direction</h2>
            <p className="text-gray-400 text-xl leading-relaxed">
              {logo.visualStyle}
            </p>
          </div>
        </div>

        {/* Gallery Section */}
        {'gallery' in logo && (
          <div ref={galleryRef} className="max-w-7xl mx-auto mt-32">
            <h2 className="text-4xl text-white mb-12 text-center">Brand Applications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {logo.gallery.map((item, index) => (
                <motion.div 
                  key={index}
                  className={`gallery-item relative overflow-hidden rounded-2xl
                    ${item.size === 'lg' ? 'lg:col-span-2 lg:row-span-2' : ''}
                    ${item.size === 'md' ? 'lg:col-span-2' : ''}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={item.image}
                    alt={item.caption}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                    <p className="text-white text-lg font-light text-center">
                      {item.caption}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}