import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Navlink from "./Navlink";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleCloseMenu = (event) => {
    if (event.target.id === "overlay") {
      setIsMenuOpen(false);
    }
  };
  return (
    <>
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center bg-indigo-600 p-5 relative">
        <div className="text-white text-xl font-bold">
          <Link to="/">Logo</Link>
        </div>
        <ul className="hidden max-lg:flex space-x-6 text-white text-lg font-extrabold">
          <Navlink route="/" name="Home" />
          <Navlink
            route="/educational-resources"
            name="Educational Resources"
          />
          <Navlink route="/chat-bot" name="Chat Bot" />
          <Navlink route="/story-blog" name="Story Blog" />
          <Navlink route="about" name="About us" />
        </ul>

        <div className="md:block">
          <a href="#" className="bg-teal-500 text-white py-2 px-4 rounded-lg">
            Sign Up
          </a>
        </div>

        <div className="max-lg:hidden absolute top-[75px] right-[10px]">
          <div
            className="bg-white p-2 rounded-lg"
            onClick={() => setIsMenuOpen(true)}
          >
            <div className="w-5 h-0.5 bg-black mb-1"></div>
            <div className="w-5 h-0.5 bg-black mb-1"></div>
            <div className="w-5 h-0.5 bg-black"></div>
          </div>
        </div>
      </nav>

      {/* Overlay Menu */}
      {isMenuOpen && (
        <div
          id="overlay"
          className="fixed inset-0 z-50 bg-indigo-600 bg-opacity-95 w-fit min-w-[300px] top-[68px] left-auto max-lg:hidden"
          onClick={handleCloseMenu}
        >
          <div className="flex justify-end p-5">
            <span
              className="text-4xl text-white cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              &times;
            </span>
          </div>

          <ul className="flex flex-col items-center space-y-6 text-white text-2xl font-bold">
            <Navlink
              route="/"
              name="Home"
              onclickfun="onClick={() => setIsMenuOpen(false)}"
            />
            <Navlink
              route="/educational-resources"
              name="Educational Resources"
              onclickfun="onClick={() => setIsMenuOpen(false)}"
            />
            <Navlink
              route="/chat-bot"
              name="Chat Bot"
              onclickfun="onClick={() => setIsMenuOpen(false)}"
            />
            <Navlink
              route="/story-blog"
              name="Story Blog"
              onclickfun="onClick={() => setIsMenuOpen(false)}"
            />
            <Navlink
              route="about"
              name="About us"
              onclickfun="onClick={() => setIsMenuOpen(false)}"
            />
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
