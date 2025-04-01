// import { useRef, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./Navbar";
// import Dashboard from "./Dashboard";
// import Products from "./Product";
// import Testimonials from "./Testimonials";
// import Footer from "./Footer";
// import InventoryPage from "./Inventory";
// import Categories from './Categories';
// import Hero from './hero';

// function App() {
//   useEffect(() => {
//     document.title = "Wet Wipes Store";
//   }, []);

//   const footerRef = useRef(null);
//   const productsRef = useRef(null);
//   const categoriesRef = useRef(null);

//   return (
//     <Router>
//       <div className="flex flex-col min-h-screen">
//         <Navbar 
//           footerRef={footerRef} 
//           productsRef={productsRef} 
//           categoriesRef={categoriesRef} 
//         />
        
//         <Routes>
//           {/* Public routes */}
//           <Route path="/" element={
//             <>
//               <Hero />
//               <Categories ref={categoriesRef} />
//               <Dashboard />
//               <Products ref={productsRef} />
//               <Testimonials />
//             </>
//           } />
          
//           {/* Inventory route */}
//           <Route path="/inventory" element={<InventoryPage/>} />
          
//           {/* 404 page */}
//           <Route path="*" element={
//             <div className="container mx-auto p-4 min-h-[60vh] flex items-center justify-center">
//               <h1 className="text-4xl font-bold">Page Not Found</h1>
//             </div>
//           } />
//         </Routes>

//         <Footer ref={footerRef} />
//       </div>
//     </Router>
//   );
// }

// export default App;
import { useRef, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import InventoryPage from "./Inventory";
import Categories from './Categories';
import Hero from './hero';
import Blog from './Blog';
import GetInTouch from './GetInTouch'; // New import

function App() {
  useEffect(() => {
    document.title = "Embuer | Premium Hygiene Solutions";
  }, []);

  const footerRef = useRef(null);
  const categoriesRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null); // New ref for contact section

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar 
          footerRef={footerRef} 
          categoriesRef={categoriesRef}
          blogRef={blogRef}
          contactRef={contactRef} // Added to Navbar props
        />
        
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Categories ref={categoriesRef} />
              <Dashboard />
              <Blog ref={blogRef} />
              <Testimonials />
              <GetInTouch ref={contactRef} /> {/* Added above Footer */}
            </>
          } />
          
          <Route path="/inventory" element={<InventoryPage/>} />
          
          <Route path="*" element={
            <div className="container mx-auto p-4 min-h-[60vh] flex items-center justify-center">
              <h1 className="text-4xl font-bold">Page Not Found</h1>
            </div>
          } />
        </Routes>

        <Footer ref={footerRef} />
      </div>
    </Router>
  );
}

export default App;