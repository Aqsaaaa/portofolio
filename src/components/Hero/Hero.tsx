import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Lanyard from '../Lanyard';
import SplitText from '../SplitText';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col">
      <div className="flex-grow grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-4 sm:px-6 lg:px-8  mx-auto w-full relative z-10">
        <div className="flex flex-col py-12 lg:py-0 order-2 lg:order-1 lg:px-12">
          <h1 className="mb-4">
            <SplitText
              text="Hello, Developer!"
              className="text-xl sm:text-2xl lg:text-4xl font-bold text-[#47c5fb]"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-large sm:text-xl text-gray-300 mb-8 text-justify"
          >
            I've always believed in creating things with intention sometimes by following the rules, and sometimes by gently bending them.
            Here, you'll find a collection of work shaped by curiosity, experimentation, and a touch of quiet rebellion.
            Take your time and explore.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 "
          >
            <button
              onClick={scrollToAbout}
              className="px-8 py-3 bg-[#47c5fb] hover:bg-[#2d9fdb] text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Learn More
            </button>
            <button
              onClick={() => {
                const contactElement = document.querySelector('#contact');
                if (contactElement) {
                  contactElement.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-8 py-3 border-2 border-[#47c5fb] text-[#47c5fb] hover:bg-[#47c5fb] hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </motion.div>
        </div>

        <div className="hidden lg:flex items-center justify-center lg:justify-start lg:py-0 order-1 lg:order-2">
          <Lanyard position={[0, 0, 10]} gravity={[0, -40, 0]} />  
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToAbout}
      >
        <ChevronDown className="w-8 h-8 text-gray-400 hover:text-white transition-colors animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
