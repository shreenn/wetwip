


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
import GetInTouch from './GetInTouch';
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  useEffect(() => {
    document.title = "Embuer | Premium Hygiene Solutions";
  }, []);

  const footerRef = useRef(null);
  const categoriesRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar 
            footerRef={footerRef}
            categoriesRef={categoriesRef}
            blogRef={blogRef}
            contactRef={contactRef}
          />

          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Categories ref={categoriesRef} />
                <Dashboard />
                <Blog ref={blogRef} />
                <Testimonials />
                <GetInTouch ref={contactRef} />
              </>
            } />

            <Route path="/inventory" element={<InventoryPage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />

            <Route path="*" element={
              <div className="container mx-auto p-4 min-h-[60vh] flex items-center justify-center">
                <h1 className="text-4xl font-bold">Page Not Found</h1>
              </div>
            } />
          </Routes>

          <Footer ref={footerRef} />
        </div>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
