import React, { useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle Hamburger menu
  function handleMenu() {
    setMobileMenuOpen(!mobileMenuOpen);
  }

  return (
    <nav className="relative w-11/12 py-6 mx-auto flex justify-between items-center gap-8">
      {/* Brand Logo */}
      <div className="min-w-fit">
        <h4 className="text-xl font-bold">Brand Logo</h4>
      </div>

      {/* Nav Links */}
      <div className="hidden w-full lg:flex items-center justify-between">
        {/* Site Links */}
        <ul className="w-full flex gap-4 justify-center">
          <li>
            <a href="#" className="hover:text-blue-600">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">
              More
            </a>
          </li>
        </ul>

        {/* Cta */}
        <div className="min-w-fit space-x-3">
          <button className="btn">Login</button>
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </div>

      {/* Hamburger Menu Trigger */}

      <div onClick={handleMenu} className="lg:hidden text-3xl">
        {mobileMenuOpen ? <IoClose /> : <HiOutlineMenuAlt1 />}
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-screen bg-white  ">
          <div className="w-full flex flex-col items-center gap-8">
            {/* Site Links */}
            <ul className="w-full space-y-4">
              <li>
                <a href="#" className="hover:text-blue-600">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  More
                </a>
              </li>
            </ul>

            {/* Cta */}
            <div className="min-w-fit space-x-3">
              <button className="btn">Login</button>
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
