import { motion } from "framer-motion";
import c1 from "./assets/categories1.jpg";
import c2 from "./assets/categories2.jpg";
 import c3 from "./assets/categories3.jpg";

const ProductCategories = () => {
  const categories = [
    {
      title: "Cleaning & Hygiene",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod ",
      image: c1,
    },
    {
      title: "Baby Products",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod ",
      image: c2,
    },
    {
      title: "Personal Care",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod ",
      image: c3,
    }
  ];

  return (
    <section className="py-16 px-6 bg-[#F9F9F9]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-light text-center mb-12">Our Product Range</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="h-48 mb-6 overflow-hidden rounded">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-medium mb-3">{category.title}</h3>
              <p className="text-gray-600 mb-6">{category.description}</p>
              <a 
                href="#" 
                className="inline-flex items-center text-[#123458] font-medium hover:text-[#0a2440] transition"
              >
                SHOP NOW <span className="ml-2">→</span>
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <motion.a
            href="#"
            className="inline-block px-8 py-3 border border-[#123458] text-[#123458] rounded hover:bg-[#123458] hover:text-white transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Customize Your Order
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;