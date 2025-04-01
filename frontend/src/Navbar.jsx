import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems] = useState(0); 
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  
  const mainLinks = [
    { name: "Shop", href: "/shop" },
    { name: "Wipes", href: "/wipes" },
    { name: "Bundles", href: "/bundles" }
  ];
  
  const secondaryLinks = [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <nav 
  className={`${
    scrolled 
      ? "py-2 shadow-md bg-white" 
      : "py-4 bg-white/95"
  } border-b border-gray-100 px-4 sticky top-0 z-50 transition-all duration-300`}
>
<div className="max-w-7xl mx-auto flex justify-between items-center">

        <div className="flex items-center space-x-8">
          <a 
            href="/" 
            className="text-xl font-bold text-[#123458] relative overflow-hidden group"
          >
            <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">EMBUER</span>
            <span className="inline-block absolute left-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0 text-[#2a5e8f]">EMBUER</span>
          </a>
          
          
          <div className="hidden md:flex space-x-6 text-sm font-medium">
            {mainLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-[#123458] transition-colors duration-200 relative py-1"
                onMouseEnter={() => setHoveredItem(link.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {link.name}
                <span 
                  className={`absolute bottom-0 left-0 w-0 h-0.5 bg-[#123458] transition-all duration-300 ${
                    hoveredItem === link.name ? "w-full" : ""
                  }`}
                />
              </a>
            ))}
          </div>
        </div>

      
        <div className="flex items-center space-x-6">
        
          <div className="hidden md:flex space-x-5 text-sm font-medium">
            {secondaryLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-[#123458] transition-colors duration-200 relative py-1"
                onMouseEnter={() => setHoveredItem(link.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {link.name}
                <span 
                  className={`absolute bottom-0 left-0 w-0 h-0.5 bg-[#123458] transition-all duration-300 ${
                    hoveredItem === link.name ? "w-full" : ""
                  }`}
                />
              </a>
            ))}
          </div>

          
          <a 
            href="/cart" 
            className="flex items-center space-x-2 group relative py-1"
          >
            <div className="relative">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 text-gray-700 group-hover:text-[#123458] transition-colors duration-200" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.8} 
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" 
                  className="group-hover:animate-pulse"
                />
              </svg>
              {cartItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#123458] text-white text-[0.6rem] font-bold rounded-full h-4 w-4 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-200">
                  {cartItems}
                </span>
              )}
            </div>
            <span className="text-xs text-gray-600 hidden sm:inline group-hover:text-[#123458] transition-colors duration-200">Rs0.00</span>
          </a>

          
          <button 
            className="md:hidden text-gray-700 focus:outline-none relative w-6 h-5"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span 
              className={`absolute block w-6 h-0.5 bg-gray-700 transform transition-all duration-300 ease-in-out ${
                isMenuOpen ? "top-2 rotate-45" : "top-0"
              }`}
            />
            <span 
              className={`absolute top-2 block w-6 h-0.5 bg-gray-700 transition-all duration-200 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span 
              className={`absolute block w-6 h-0.5 bg-gray-700 transform transition-all duration-300 ease-in-out ${
                isMenuOpen ? "top-2 -rotate-45" : "top-4"
              }`}
            />
          </button>
        </div>
      </div>

      
      <div 
        className={`md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="px-4 space-y-3 text-sm">
          {mainLinks.concat(secondaryLinks).map((link, index) => (
            <a 
              key={link.name}
              href={link.href}
              className="block py-2 text-gray-700 hover:text-[#123458] transition-colors duration-200 transform hover:translate-x-2"
              style={{ 
                transitionDelay: `${index * 50}ms`,
                opacity: isMenuOpen ? 1 : 0,
                transform: isMenuOpen ? "translateX(0)" : "translateX(-10px)"
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
