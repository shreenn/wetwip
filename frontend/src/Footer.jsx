import { forwardRef } from "react";

const Footer = forwardRef((props, ref) => {
  return (
    <footer ref={ref} className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          
          <div>
            <h3 className="text-xl font-bold text-white">CONTACT US</h3>
            <p className="mt-2">For inquiries, email us at:</p>
            <a href="mailto:sales@yourwebsite.com" className="text-red-400 hover:underline">sales@website.com</a>
            <p className="mt-2 font-semibold text-white">📞 +91 99999 88888</p>
            <div className="flex mt-3 space-x-3">
              <a href="#" className="text-gray-400 hover:text-white text-xl">🔵</a>
              <a href="#" className="text-gray-400 hover:text-white text-xl">🐦</a>
              <a href="#" className="text-gray-400 hover:text-white text-xl">▶️</a>
            </div>
          </div>

          
          <div>
            <h3 className="text-xl font-bold text-white">LOCATION</h3>
            <p className="mt-2">Wet Wipes and Co</p>
            <p>Rohini, Shahbad Daulatpur</p>
            <p>NEW DELHI, DELHI, India 110042</p>
            <p className="mt-2">Monday - Saturday: 9 AM - 6 PM</p>
          </div>

          
          <div>
            <h3 className="text-xl font-bold text-white">QUICK LINKS</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-red-400">About</a></li>
              <li><a href="#" className="hover:text-red-400">Products</a></li>
              <li><a href="#" className="hover:text-red-400">Blog</a></li>
              <li><a href="#" className="hover:text-red-400">Contact</a></li>
            </ul>
          </div>

        
          <div>
            <h3 className="text-xl font-bold text-white">NEWSLETTER</h3>
            <p className="mt-2">Subscribe for updates.</p>
            <div className="mt-3 flex">
              <input type="email" placeholder="Your Email"
                className="p-2 rounded-l-md w-full bg-gray-700 border-none outline-none text-gray-300" />
              <button className="bg-red-500 px-4 py-2 rounded-r-md text-white font-semibold hover:bg-red-600">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        
        <div className="text-center border-t border-gray-700 mt-6 pt-4">
          <p className="text-gray-500">© 2025 Wet Wipes. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
