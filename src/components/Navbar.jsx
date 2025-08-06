import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-white fixed w-full z-30 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-10 w-10 object-contain" />
            <span className="text-xl font-bold text-blue-600">Basti Ki Pathshala</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 justify-center space-x-10">
            <Link to="/" onClick={handleLinkClick} className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
            <Link to="/about" onClick={handleLinkClick} className="text-gray-700 hover:text-blue-600 font-medium">About</Link>
            <Link to="/volunteer" onClick={handleLinkClick} className="text-gray-700 hover:text-blue-600 font-medium">Volunteer</Link>
            {/* <Link to="/contact" onClick={handleLinkClick} className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link> */}
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 shadow">
          <Link to="/" onClick={handleLinkClick} className="block py-2 text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/about" onClick={handleLinkClick} className="block py-2 text-gray-700 hover:text-blue-600">About</Link>
          <Link to="/volunteer" onClick={handleLinkClick} className="block py-2 text-gray-700 hover:text-blue-600">Volunteer</Link>
        </div>
      )}
    </nav>
  );
}
