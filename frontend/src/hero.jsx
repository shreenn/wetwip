

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import hero1 from "./assets/hero1.jpg";
import hero2 from "./assets/hero2.jpg";
import hero3 from "./assets/hero3.jpg";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const slides = [
    { 
      src: hero1, 
      alt: "Woman taking wet wipe from package",
      headline: {
        main: "Freshness",
        sub1: "at your",
        sub2: "Fingertips"
      },
      title: "Convenient & Practical",
      description: "Our biodegradable wipes are perfect for on-the-go freshness"
    },
    { 
      src: hero2, 
      alt: "Hand holding wet wipe",
      headline: {
        main: "Gentleness",
        sub1: "that your",
        sub2: "Skin Deserves"
      },
      title: "Gentle on Skin",
      description: "Alcohol-free formula that's safe for all skin types"
    },
    { 
      src: hero3, 
      alt: "Pack of wet wipes on table",
      headline: {
        main: "Sustainable",
        sub1: "for a better",
        sub2: "Tomorrow"
      },
      title: "Eco-Friendly Packaging",
      description: "Sustainable materials that protect both you and the planet"
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 6000); // Slightly longer interval for better reading experience
    return () => clearInterval(interval);
  }, []);

  const handleSlideChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="relative bg-[#F1EFEC] text-[#030303] h-[90vh] max-h-[900px] overflow-hidden">
      {/* Background image slider with smoother transitions */}
      <AnimatePresence initial={false}>
        <motion.div 
          key={currentIndex}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <motion.img 
            src={slides[currentIndex].src} 
            alt={slides[currentIndex].alt}
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 6, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#030303]/60 to-[#030303]/30"></div>
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <motion.div
            className="space-y-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Animated headline that changes with each slide */}
            <AnimatePresence mode="wait">
              <motion.h1 
                key={`headline-${currentIndex}`}
                className="text-5xl md:text-7xl font-bold leading-none text-[#F1EFEC]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
              >
                <span className="block mb-2">{slides[currentIndex].headline.main}</span>
                <div className="flex flex-col">
                  <span className="text-[#D4C9BE] block">{slides[currentIndex].headline.sub1}</span>
                  <span className="text-[#D4C9BE] block">{slides[currentIndex].headline.sub2}</span>
                </div>
              </motion.h1>
            </AnimatePresence>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={`desc-${currentIndex}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="h-16 flex items-center" // Fixed height prevents layout shift
              >
                <div className="space-y-2">
                  <h2 className="text-xl md:text-2xl font-semibold text-[#F1EFEC]">
                    {slides[currentIndex].title}
                  </h2>
                  <p className="text-base md:text-lg text-[#F1EFEC]/90 max-w-md">
                    {slides[currentIndex].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            <motion.div
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <a
                href="#products"
                className="bg-[#205781] text-[#F1EFEC] px-8 py-3 rounded-md text-lg font-medium hover:bg-[#0a2440] transition duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Shop Collection
              </a>
              <a
                href="#about"
                className="border border-[#F1EFEC] text-[#F1EFEC] px-8 py-3 rounded-md text-lg font-medium hover:bg-[#F1EFEC]/10 transition duration-300 text-center"
              >
                Our Story
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Image indicator dots - improved styling */}
        <div className="absolute bottom-12 left-0 w-full flex justify-center">
          <motion.div 
            className="flex space-x-3 bg-[#030303]/20 backdrop-blur-sm px-4 py-2 rounded-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSlideChange(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-[#F1EFEC] w-8' 
                    : 'bg-[#F1EFEC]/40 hover:bg-[#F1EFEC]/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Refined brand watermark */}
      <motion.div 
        className="absolute top-0 right-0 h-full w-full flex items-center justify-end overflow-hidden pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <h2 className="text-[18vw] font-bold text-[#F1EFEC]/5 tracking-tighter transform -rotate-90 translate-x-1/4 select-none">
          EMBUER
        </h2>
      </motion.div>
      
      {/* Subtle gradient overlay at the bottom for better text contrast */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#030303]/40 to-transparent"></div>
    </section>
  );
}
