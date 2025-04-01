


// // // import { useState, useEffect } from "react";
// // // import { motion } from "framer-motion"; // Import Framer Motion for animation

// // // export default function Hero() {
// // //   const images = [
// // //     { src: "https://swissbeauty.in/cdn/shop/products/WetWipesBlueA.jpg?v=1742586164", alt: "100% Biodegradable" },
// // //     { src: "https://www.netmeds.com/images/cms/wysiwyg/blog/2020/08/1598603517_wipes_big_1.jpg", alt: "Alcohol-Free & Gentle" },
// // //     { src: "https://static.wixstatic.com/media/aa43fc_0b6cda886716415cb5213c892162b6be~mv2.jpg/v1/fill/w_530,h_530,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/aa43fc_0b6cda886716415cb5213c892162b6be~mv2.jpg", alt: "Skin Friendly & pH Balanced" },
// // //   ];

// // //   const [currentIndex, setCurrentIndex] = useState(0);

// // //   useEffect(() => {
// // //     const interval = setInterval(() => {
// // //       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
// // //     }, 3000);
// // //     return () => clearInterval(interval);
// // //   }, []);

// // //   return (
// // //     <section className="relative bg-gradient-to-r from-blue-50 to-blue-100 text-gray-900 py-20 px-6 overflow-hidden">
// // //       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
// // //         {/* Left Side: Animated Text Content */}
// // //         <motion.div
// // //           className="space-y-6"
// // //           initial={{ opacity: 0, x: -50 }}
// // //           animate={{ opacity: 1, x: 0 }}
// // //           transition={{ duration: 1.2, ease: "easeOut" }} // Slower animation
// // //         >
// // //           <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-800">
// // //             Ultimate Freshness, <span className="text-blue-600">Anywhere</span>
// // //           </h1>
// // //           <p className="text-gray-700 text-lg leading-relaxed">
// // //             Our premium wet wipes are designed for hygiene and convenience. Gentle on skin, alcohol-free, and infused with soothing ingredients.
// // //           </p>
// // //           <div className="flex space-x-4">
// // //             <a
// // //               href="#products"
// // //               className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-blue-700 transition"
// // //             >
// // //               Shop Now
// // //             </a>
// // //             <a
// // //               href="#about"
// // //               className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 hover:text-white transition"
// // //             >
// // //               Learn More
// // //             </a>
// // //           </div>
// // //         </motion.div>

// // //         {/* Right Side: Animated Sliding Images Feature */}
// // //         <motion.div
// // //           className="relative w-[600px] h-[400px] overflow-hidden rounded-lg shadow-md border border-gray-300 bg-white"
// // //           initial={{ opacity: 0, x: 50 }}
// // //           animate={{ opacity: 1, x: 0 }}
// // //           transition={{ duration: 0.8, ease: "easeOut" }} // Slightly faster than text
// // //         >
// // //           <div
// // //             className="flex transition-transform duration-500 ease-in-out"
// // //             style={{ transform: `translateX(-${currentIndex * 100}%)` }}
// // //           >
// // //             {images.map((img, index) => (
// // //               <img
// // //                 key={index}
// // //                 src={img.src}
// // //                 alt={img.alt}
// // //                 className="w-[600px] h-[400px] object-fill flex-shrink-0"
// // //               />
// // //             ))}
// // //           </div>
// // //         </motion.div>
// // //       </div>
// // //     </section>
// // //   );
// // // }


// // import { useState, useEffect } from "react";
// // import { motion, useScroll, useTransform } from "framer-motion";
// // import hero1 from "./assets/hero1.jpg";
// // import hero2 from "./assets/hero2.jpg";
// // import hero3 from "./assets/hero3.jpg";

// // export default function Hero() {
// //   const [currentIndex, setCurrentIndex] = useState(0);
  
// // const images = [
// //   { 
// //     src: hero1, 
// //     alt: "Woman taking wet wipe from package",
// //     title: "Convenient & Practical",
// //     description: "Our biodegradable wipes are perfect for on-the-go freshness"
// //   },
// //   { 
// //     src: hero2, 
// //     alt: "Hand holding wet wipe",
// //     title: "Gentle on Skin",
// //     description: "Alcohol-free formula that's safe for all skin types"
// //   },
// //   { 
// //     src: hero3, 
// //     alt: "Pack of wet wipes on table",
// //     title: "Eco-Friendly Packaging",
// //     description: "Sustainable materials that protect both you and the planet"
// //   },
// // ];

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
// //     }, 5000);
// //     return () => clearInterval(interval);
// //   }, []);

// //   return (
// //     <section className="relative bg-white text-gray-900 h-screen max-h-[800px] overflow-hidden">
// //       {/* Background image with parallax effect */}
// //       <motion.div 
// //         className="absolute inset-0 z-0"
// //         initial={{ scale: 1.1 }}
// //         animate={{ scale: 1 }}
// //         transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
// //       >
// //         <img 
// //           src={images[currentIndex].src} 
// //           alt={images[currentIndex].alt}
// //           className="w-full h-full object-cover opacity-90"
// //         />
// //         <div className="absolute inset-0 bg-black/20"></div>
// //       </motion.div>

// //       <div className="relative z-10 h-full flex flex-col justify-center">
// //         <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">
// //           <motion.div
// //             className="space-y-8 max-w-2xl"
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 1, delay: 0.3 }}
// //           >
// //             <motion.h1 
// //               className="text-5xl md:text-7xl font-bold leading-tight text-white"
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               transition={{ duration: 0.8, delay: 0.5 }}
// //             >
// //               Freshness<br />
// //               <span className="text-green-300">at your fingertips</span>
// //             </motion.h1>
            
// //             <motion.p 
// //               className="text-xl text-white/90 max-w-lg"
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               transition={{ duration: 0.8, delay: 0.7 }}
// //             >
// //               {images[currentIndex].description}
// //             </motion.p>

// //             <motion.div
// //               className="flex space-x-4 pt-4"
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               transition={{ duration: 0.8, delay: 0.9 }}
// //             >
// //               <a
// //                 href="#products"
// //                 className="bg-green-600 text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-green-700 transition duration-300"
// //               >
// //                 Shop Collection
// //               </a>
// //               <a
// //                 href="#about"
// //                 className="border border-white text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-white/10 transition duration-300"
// //               >
// //                 Our Story
// //               </a>
// //             </motion.div>
// //           </motion.div>
// //         </div>

// //         {/* Image indicator dots */}
// //         <motion.div 
// //           className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-3"
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //           transition={{ delay: 1.2 }}
// //         >
// //           {images.map((_, index) => (
// //             <button
// //               key={index}
// //               onClick={() => setCurrentIndex(index)}
// //               className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-white w-6' : 'bg-white/50'}`}
// //               aria-label={`Go to slide ${index + 1}`}
// //             />
// //           ))}
// //         </motion.div>
// //       </div>

// //       {/* Animated text overlay */}
// //       <motion.div 
// //         className="absolute top-1/2 left-0 w-full text-center pointer-events-none"
// //         initial={{ opacity: 0, y: -50 }}
// //         animate={{ opacity: 0.05, y: 0 }}
// //         transition={{ duration: 1.5 }}
// //       >
// //         <h2 className="text-[15vw] font-bold text-white tracking-tighter">EMBUER</h2>
// //       </motion.div>
// //     </section>
// //   );
// // }


// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import hero1 from "./assets/hero1.jpg";
// import hero2 from "./assets/hero2.jpg";
// import hero3 from "./assets/hero3.jpg";

// export default function Hero() {
//   const [currentIndex, setCurrentIndex] = useState(0);
  
//   const images = [
//     { 
//       src: hero1, 
//       alt: "Woman taking wet wipe from package",
//       title: "Convenient & Practical",
//       description: "Our biodegradable wipes are perfect for on-the-go freshness"
//     },
//     { 
//       src: hero2, 
//       alt: "Hand holding wet wipe",
//       title: "Gentle on Skin",
//       description: "Alcohol-free formula that's safe for all skin types"
//     },
//     { 
//       src: hero3, 
//       alt: "Pack of wet wipes on table",
//       title: "Eco-Friendly Packaging",
//       description: "Sustainable materials that protect both you and the planet"
//     },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative bg-[#F1EFEC] text-[#030303] h-screen max-h-[800px] overflow-hidden">
//       {/* Background image with parallax effect */}
//       <motion.div 
//         className="absolute inset-0 z-0"
//         initial={{ scale: 1.1 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
//       >
//         <img 
//           src={images[currentIndex].src} 
//           alt={images[currentIndex].alt}
//           className="w-full h-full object-cover opacity-90"
//         />
//         <div className="absolute inset-0 bg-[#030303]/40"></div>
//       </motion.div>

//       <div className="relative z-10 h-full flex flex-col justify-center">
//         <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">
//           <motion.div
//             className="space-y-6 max-w-2xl"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.3 }}
//           >
//            <motion.h1 
//   className="text-5xl md:text-7xl font-bold leading-[0.95] text-[#F1EFEC]"
//   initial={{ opacity: 0 }}
//   animate={{ opacity: 1 }}
//   transition={{ duration: 0.8, delay: 0.5 }}
// >
//   <span className="block">Freshness</span>
//   <span className="text-[#D4C9BE] block mt-[-0.15em]">at your</span>
//   <span className="text-[#D4C9BE] block mt-[-0.15em]">Fingertips</span>
// </motion.h1>
            
//             <motion.p 
//               className="text-lg md:text-xl text-[#F1EFEC]/90 max-w-md"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.7 }}
//             >
//               {images[currentIndex].description}
//             </motion.p>

//             <motion.div
//               className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-6"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.9 }}
//             >
//               <a
//                 href="#products"
//                 className="bg-[#205781] text-[#F1EFEC] px-8 py-3 rounded-md text-lg font-medium hover:bg-[#0a2440] transition duration-300 text-center"
//               >
//                 Shop Collection
//               </a>
//               <a
//                 href="#about"
//                 className="border border-[#F1EFEC] text-[#F1EFEC] px-8 py-3 rounded-md text-lg font-medium hover:bg-[#F1EFEC]/10 transition duration-300 text-center"
//               >
//                 Our Story
//               </a>
//             </motion.div>
//           </motion.div>
//         </div>

//         {/* Image indicator dots */}
//         <motion.div 
//           className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-3"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.2 }}
//         >
//           {images.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentIndex(index)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-[#F1EFEC] w-6' : 'bg-[#F1EFEC]/50'}`}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </motion.div>
//       </div>

//       {/* Animated text overlay */}
//       <motion.div 
//         className="absolute top-1/2 left-0 w-full text-center pointer-events-none"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 0.05, y: 0 }}
//         transition={{ duration: 1.5 }}
//       >
//         <h2 className="text-[15vw] font-bold text-[#F1EFEC] tracking-tighter opacity-70">EMBUER</h2>
//       </motion.div>
//     </section>
//   );
// }
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