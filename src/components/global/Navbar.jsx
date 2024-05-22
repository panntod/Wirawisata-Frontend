import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

import Logo from "../atomic/Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent backdrop-blur-xl py-4 md:px-12 px-4">
      <div className="container flex justify-between items-center">
        <Logo color="main-darker" />

        {/* Content */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-gray-900 font-semibold hover:text-gray-800"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-900 font-semibold hover:text-gray-800"
          >
            About
          </Link>
          <Link
            to="/services"
            className="text-gray-900 font-semibold hover:text-gray-800"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="text-gray-900 font-semibold hover:text-gray-800"
          >
            Contact
          </Link>
        </div>
        {/* End Content */}

        {/* Button */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="text-white"
          >
            {isOpen ? (
              <IoClose className="text-black" size={24} />
            ) : (
              <IoMenu size={24} className="text-black" />
            )}
          </button>
        </div>
        {/* End Button */}

        {/* Handphone Content */}
        <div className="hidden md:block">
          <Link
            to="/login"
            className="text-white py-2 px-6 bg-main rounded-full"
          >
            Login
          </Link>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-transparent backdrop-blur-xl ">
          <Link
            to="/"
            className="block text-gray-900 font-semibold px-4 py-2 hover:bg-gray-800"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block text-gray-900 font-semibold px-4 py-2 hover:bg-gray-800"
          >
            About
          </Link>
          <Link
            to="/services"
            className="block text-gray-900 font-semibold px-4 py-2 hover:bg-gray-800"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="block text-gray-900 font-semibold px-4 py-2 hover:bg-gray-800"
          >
            Contact
          </Link>
          <Link
            to="/login"
            className="block text-white py-1 text-center bg-main rounded-full"
          >
            Login
          </Link>
        </div>
      )}
      {/* End Handphone Content */}
    </nav>
  );
}
