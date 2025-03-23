import React from "react";
import { Link } from "react-router-dom";
import { Instagram,Facebook,Twitter,Linkedin } from "lucide-react";
import footerLogo from "../assets/footerLogo.svg";

const Footer = () => {
  return (
    <footer className="flex items-center bg-gray-800 text-white px-10 py-10">
      <div className="grid grid-cols-3 gap-8 w-full">
        {/* Logo Section */}
        <div>
          <img src={footerLogo} alt="Footer Logo" className="h-40 w-40 object-contain" />
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-3">Reach Out to Us</h1>
          <div className="text-sm space-y-1">
            <p>1234 Main Street</p>
            <p>City, State, 12345</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: john.mckinley@examplepetstore.com</p>
          </div>
        </div>

        {/* Socials Section */}
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-3">Our Socials</h1>
          <div className="flex justify-center space-x-4">
            <Link to="#" className="hover:text-gray-400"><Instagram /></Link>
            <Link to="#" className="hover:text-gray-400"><Facebook/></Link>
            <Link to="#" className="hover:text-gray-400"><Twitter/></Link>
            <Link to="#" className="hover:text-gray-400"><Linkedin /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
