import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, Instagram, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emailjs from '@emailjs/browser';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const formRef = useRef<HTMLFormElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current.querySelectorAll('.animate-on-scroll'),
        { 
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          }
        }
      );
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Replace with your EmailJS service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Replace with your EmailJS template ID
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Replace with your EmailJS public key
        
      );
      console.log("EmailJS response:", result);
      if (result.text === 'OK') {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
      <section id="contact" className="py-32 bg-black" ref={containerRef}>
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-20 animate-on-scroll">
              <motion.span
                className="text-blue-500 text-sm uppercase tracking-wider"
              >
                Let's Work Together
              </motion.span>
              <motion.h2
                className="text-6xl md:text-7xl font-light text-white mt-4"
              >
                Let's create something amazing together!
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-2 gap-20">
              {/* Left Column - Contact Info */}
              <div className="animate-on-scroll">
                <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                  I'm always excited to hear about new projects and ideas. Whether you have a specific project in mind or just want to explore possibilities, I'm here to help bring your vision to life.
                </p>

                <div className="space-y-8 mb-12">
                  <motion.a
                    href="mailto:neerajthatiparthi@gmail.com"
                    className="flex items-center space-x-6 text-gray-400 hover:text-white transition-colors group"
                    whileHover={{ x: 10 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span className="text-lg">neerajthatiparthi@gmail.com</span>
                  </motion.a>

                  <motion.a
                    href="tel:+919390245015"
                    className="flex items-center space-x-6 text-gray-400 hover:text-white transition-colors group"
                    whileHover={{ x: 10 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span className="text-lg">+91 9390245015</span>
                  </motion.a>
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    href="https://www.instagram.com/evoquee_designs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-blue-500 hover:text-white transition-all"
                    whileHover={{ y: -5 }}
                  >
                    <Instagram className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="https://www.behance.net/evoquee_logos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-blue-500 hover:text-white transition-all"
                    whileHover={{ y: -5 }}
                  >
                    <i className="ri-behance-fill text-xl"></i>
                  </motion.a>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div className="animate-on-scroll">
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-gray-900 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="Name"
                    />
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-gray-900 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="Email"
                    />
                  </div>

                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-6 py-4 bg-gray-900 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                      placeholder="Your message"
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`group w-full py-4 px-6 rounded-xl text-lg font-medium transition-all duration-300 flex items-center justify-center
                      ${isSubmitting 
                        ? 'bg-gray-600 cursor-not-allowed' 
                        : 'bg-blue-500 hover:bg-blue-600'} text-white`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? 'Sending...' : (
                      <>
                        Send Message
                        <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </motion.button>

                  {submitStatus === 'success' && (
                    <p className="text-green-500 text-sm mt-2">Message sent successfully!</p>
                  )}
                  {submitStatus === 'error' && (
                    <p className="text-red-500 text-sm mt-2">Failed to send message. Please try again.</p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2025 Neeraj Thatiparthi. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <a 
                href="https://www.instagram.com/evoquee_designs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a 
                href="https://www.behance.net/evoquee_logos" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Behance
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}