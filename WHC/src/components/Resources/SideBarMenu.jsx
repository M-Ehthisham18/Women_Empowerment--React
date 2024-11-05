// SideBarMenu.js
import React, { useState } from "react";

function SideBarMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      {/* SideBarMenu */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out bg-gray-800 text-white w-64 p-5`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-400 focus:outline-none hover:text-white mb-5"
        >
          ✖
        </button>
        <h2 className="text-2xl font-bold mb-8">Menu</h2>
        <nav>
          <ul>
            <li className="mb-4">
              <a href="#" className="hover:text-gray-300">Home</a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:text-gray-300">About</a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:text-gray-300">Services</a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:text-gray-300">Contact</a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-5 max-lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gray-800 text-white p-2 rounded-md focus:outline-none hover:bg-gray-700"
        >
          ☰ Open Menu
        </button>
       
      </div>
    </div>
  );
}

export default SideBarMenu;
