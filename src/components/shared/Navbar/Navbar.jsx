import React from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

const Navbar = () => {
  return (
    <nav className="w-11/12 py-6 container mx-auto flex justify-between items-center gap-8">
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

      <div className="lg:hidden text-3xl">
        <HiOutlineMenuAlt1 />
      </div>
    </nav>
  );
};

export default Navbar;
