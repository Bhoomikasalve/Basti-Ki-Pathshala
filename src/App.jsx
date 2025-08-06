import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import VolunteerForm from "./components/VolunteerForm";

import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/volunteer" element={<VolunteerForm />} />
        </Routes>
      </div>
       <footer className="bg-black text-white px-6 md:px-16 py-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        {/* Logo and Branding */}
        <div>
          <h1 className="text-2xl font-semibold mb-4">Basti Ki Pathshala</h1>
        </div>

        {/* Links: Home */}
        <div>
          <h2 className="text-sm font-semibold mb-4">Home</h2>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#about" className="hover:text-white">About us</a></li>
            <li><a href="#team" className="hover:text-white">Team</a></li>
            <li><a href="#whatwedo" className="hover:text-white">What we do</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Links: More */}
        <div>
          <h2 className="text-sm font-semibold mb-4">More</h2>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#projects" className="hover:text-white">Projects</a></li>
            <li><a href="#events" className="hover:text-white">Events</a></li>
            <li><a href="#donate" className="hover:text-white">Donate</a></li>
            <li><a href="#blog" className="hover:text-white">Blog</a></li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h2 className="text-sm font-semibold mb-4">Subscribe to get latest updates</h2>
          <form className="flex items-center mt-4">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 text-black rounded-l-md focus:outline-none"
            />
            <button
              type="submit"
              className="bg-white text-black px-4 py-2 rounded-r-md hover:bg-gray-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
        © 2025 Basti Ki Pathshala Foundation
      </div>
    </footer>
    </>
  );
}

export default App;
