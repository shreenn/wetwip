import { motion } from "framer-motion";
import { FiMapPin, FiMail, FiPhone, FiClock } from "react-icons/fi";

const ContactSection = () => {
  return (
    <section className="py-20 px-6 bg-[#F1EFEC] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 -left-20 w-64 h-64 rounded-full bg-[#123458] mix-blend-multiply"></div>
        <div className="absolute bottom-10 -right-10 w-80 h-80 rounded-full bg-[#D4C9BE] mix-blend-multiply"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-[#123458] mb-4">
            GET IN <span className="font-bold">TOUCH</span>
          </h2>
          <p className="text-lg text-[#030303]/80 max-w-2xl mx-auto">
            Visit our location or contact us directly - we'd love to hear from you
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold text-[#123458] mb-6 flex items-center">
                <FiMapPin className="mr-3" /> Head Office
              </h3>
              
              <div className="space-y-4 text-[#030303]">
                <p className="text-lg leading-relaxed">
                  Embuer Health Pvt. Ltd<br />
                  Caxton House, Suite #200 2E<br />
                  Jhandewalan Extn.<br />
                  New Delhi, Delhi 110055<br />
                  India
                </p>
                
                <div className="pt-4 space-y-6">
                  <div className="flex items-start">
                    <FiMail className="mt-1 mr-4 text-[#123458]" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:sales@embuer.com" className="hover:text-[#123458] transition">
                        sales@embuer.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FiPhone className="mt-1 mr-4 text-[#123458]" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:+918800115999" className="hover:text-[#123458] transition">
                        +91 88001 15999
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FiClock className="mt-1 mr-4 text-[#123458]" />
                    <div>
                      <p className="font-medium">Hours</p>
                      <p>Monday to Saturday: 9:00 AM to 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="h-full min-h-[400px] rounded-xl overflow-hidden shadow-lg relative"
          >
            {/* Embedded Google Map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.258176678689!2d77.1994153150834!3d28.64773998240898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5a8a6a0a0d%3A0x8b9e6b7b9e6b7b9e!2sCaxton%20House%2C%20Jhandewalan%20Extn%2C%20New%20Delhi%2C%20Delhi%20110055!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="absolute inset-0"
            ></iframe>
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-6">
              <h3 className="text-xl font-bold text-white">Embuer Health Pvt Ltd</h3>
              <a 
                href="https://maps.google.com/?q=Caxton+House+Jhandewalan+New+Delhi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-white/90 hover:text-white mt-2 transition"
              >
                Get Directions <span className="ml-2">→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;