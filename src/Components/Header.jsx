import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';4
import logo from '../assets/little-lemon.svg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className=" text-white px-10 py-6 bg-gray-900">
      <nav className="flex justify-between items-center w-full h-18 rounded px-10 relative">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="logo.png" className="h-10" />
        </div>

        {/* Burger Menu Icon (Visible on Mobile) */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`absolute top-16 left-0 w-full bg-gray-900 text-white p-4 space-y-2 font-semibold transition-transform duration-300
          ${isOpen ? "block" : "hidden"} md:flex md:space-x-4 md:static md:p-0 md:w-auto md:bg-transparent`}
        >
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/About" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/Menu" onClick={() => setIsOpen(false)}>Menu</Link></li>
          <li><Link to="/Reservation" onClick={() => setIsOpen(false)}>Reservation</Link></li>
          <li><Link to="/OrderOnline" onClick={() => setIsOpen(false)}>Order Online</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
