import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left Column - Main Text */}
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-white mb-12">
                Helping brands to stand out in the digital era.
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                I design logos that don't just look good — they work. Every logo I craft is built to make your brand stand out, tell your story, and connect with your audience. Clean, bold, and strategic — my designs are tailored to leave a lasting impression. If you're ready to elevate your brand, I'm ready to create something unforgettable.
              </p>
            </div>

            {/* Right Column - Additional Info */}
            <div className="mt-8 md:mt-24">
              <div className="mb-16">
                <p className="text-xl text-gray-400 leading-relaxed">
                  The combination of my passion for design, attention to detail, and dedication to creating impactful brand identities positions me uniquely in the logo design world.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="inline-block"
              >
                <a 
                  href="#contact" 
                  className="text-lg text-white border-b-2 border-blue-500 pb-1 hover:border-white transition-colors duration-300"
                >
                  Let's collaborate
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}