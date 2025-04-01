

import { forwardRef } from "react";

import product1 from "./assets/img1.jpg";
import product2 from "./assets/img2.jpg";
import product3 from "./assets/img3.jpg";
import product4 from "./assets/img4.jpg";
import product5 from "./assets/img5.jpg";

const Products = forwardRef((props, ref) => {
  const products = [
    { src: product1, alt: "Product 1" },
    { src: product2, alt: "Product 2" },
    { src: product3, alt: "Product 3" },
    { src: product4, alt: "Product 4" },
    { src: product5, alt: "Product 5" },
  ];

  return (
    <>
      <section ref={ref} className="py-20 bg-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Products</h2>
          <div className="relative w-full flex justify-center">
            <div className="w-full max-w-screen-xl flex overflow-hidden relative">
              <div className="flex animate-scroll space-x-8">
                {[...products, ...products, ...products].map((product, index) => (
                  <div key={index} className="flex-shrink-0 w-64 h-64 bg-white rounded-2xl shadow-md border border-gray-300 p-6 flex items-center justify-center">
                    <img src={product.src} alt={product.alt} className="w-full h-full object-cover rounded-md" /> 
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-33.33%);
          }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 15s linear infinite;
        }
      `}</style>
    </>
  );
});

export default Products;

