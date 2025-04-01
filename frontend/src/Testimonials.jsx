import { motion } from "framer-motion";
import dp1 from "./assets/dp1.jpg";
import dp2 from "./assets/dp2.jpg";

export default function Testimonials() {
  const features = [
    {
      title: "Premium Quality",
      description: "Our wipes undergo 7-stage quality checks for unmatched purity",
      icon: "🧼"
    },
    {
      title: "Eco-Friendly",
      description: "100% biodegradable materials that mother nature approves",
      icon: "🌱"
    },
    {
      title: "Skin Safe",
      description: "Dermatologist tested and pH balanced for all skin types",
      icon: "👶"
    }
  ];

  const testimonial = {
    name: "Mila Kunis",
    review: "These wipes have become my daily essential. Gentle yet effective, and I love that they're eco-conscious!",
    rating: 5,
    image: dp1
  };

  return (
    <section className="py-20 px-6 bg-[#F9F9F9]">
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
            Why Customers <span className="font-bold">Love Us</span>
          </h2>
          <div className="w-24 h-1 bg-[#D4C9BE] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Feature Highlights */}
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-4xl block mb-4">{feature.icon}</span>
              <h3 className="text-xl font-medium text-[#123458] mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonial + Deal Combo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured Testimonial */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-md"
          >
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 text-lg italic mb-6">"{testimonial.review}"</p>
            <div className="flex items-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-14 h-14 rounded-full mr-4 object-cover border-2 border-[#D4C9BE]"
              />
              <div>
                <p className="font-medium text-[#123458]">{testimonial.name}</p>
                <p className="text-sm text-gray-500">Verified Customer</p>
              </div>
            </div>
          </motion.div>

          {/* Special Offer */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative rounded-xl overflow-hidden"
          >
            <img 
              src={dp2} 
              alt="Special offer"
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="relative z-10 h-full bg-gradient-to-r from-[#123458]/90 to-[#123458]/70 p-8 flex flex-col justify-center">
              <div className="mb-6">
                <span className="inline-block bg-[#D4C9BE] text-[#123458] px-3 py-1 rounded-full text-sm font-medium mb-3">
                  Limited Time
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">Bundle Special</h3>
                <p className="text-white/90">Get 15% off when you purchase any 3 products</p>
              </div>
              <a
                href="#products"
                className="inline-flex items-center justify-center bg-[#D4C9BE] text-[#123458] px-6 py-3 rounded-md font-medium hover:bg-[#c5baaf] transition w-full sm:w-auto"
              >
                CLAIM OFFER →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}