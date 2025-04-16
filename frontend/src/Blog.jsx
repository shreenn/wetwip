import { motion } from "framer-motion";
import dp from "./assets/Blog.avif";


const Blog = () => {
  return (
    <section id="blog" className="py-20 px-6 bg-gradient-to-b from-[#F1EFEC] to-[#ffffff]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-[#123458] mb-4">
            We Are <span className="font-bold">Embuer</span>
          </h2>
          <div className="w-24 h-1 bg-[#D4C9BE] mx-auto"></div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 text-[#030303]"
          >
            <p className="text-lg leading-relaxed">
              <span className="font-semibold">Embuer Health Pvt Ltd.</span>, located in the heart of India at New Delhi, is a leading manufacturer of superior quality, multi-use wipes and napkins. Founded in 2011, we pioneered ultra-clean, versatile hygiene products for health-conscious consumers.
            </p>
            
            <p className="text-lg leading-relaxed">
              We introduced India's first non-woven fabric range for hygienic disposable napkins, combining innovation with rigorous quality standards that set us apart.
            </p>
            
            <p className="text-lg leading-relaxed">
              Recognizing growing hygiene awareness, we've developed a comprehensive range of wiping products that deliver both premium hygiene experiences and exceptional value.
            </p>
            
            <div className="pt-4">
              <a 
                href="/about" 
                className="inline-flex items-center text-[#123458] font-medium hover:text-[#0a2440] transition border-b border-[#123458] pb-1"
              >
                Read Our Full Story <span className="ml-2">→</span>
              </a>
            </div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative h-96 rounded-xl overflow-hidden shadow-lg"
          >
            <div className="absolute inset-0 bg-[#123458] opacity-20"></div>
            <img 
              src={dp}
              alt="Embuer manufacturing facility"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              {/* <h3 className="text-2xl font-bold text-white">Our Delhi Manufacturing Facility</h3>
              <p className="text-white/90 mt-2">State-of-the-art production since 2011</p> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Blog;