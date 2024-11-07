import React from "react";
import { FaHamburger, FaSearch, FaBolt, FaCartPlus } from "react-icons/fa";

export default function Navbar() {
  return (
  <div>
    <div className="p-5">
      <div className="grid xl:grid-cols-1 grid-cols-1">
        <div className="py-3 px-3 rounded-xl border w-full bg-gradient-to-r from-black to-gray-700">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              {/* Logo Burger */}
              <FaHamburger className="w-6 h-6 text-yellow-400 hover:text-cyan-300" />

              {/* Search Input with Icon */}
              <div style={{ position: "relative" }}>
                <input
                  className="rounded-3xl py-3 px-3 outline-none text-xs w-[350px] pr-10 hidden lg:block md:block"
                  placeholder="Search for your favorite burger from the menu"
                />
                <FaSearch className="w-5 h-5 text-lime-500 absolute right-3 top-1/2 transform -translate-y-1/2 hidden lg:block md:block" />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <FaBolt className="w-5 h-5 text-amber-400 hidden lg:block md:block" />
              <p className="text-xs text-white hidden lg:block md:block">
                Order now and get it fast in
                <span className="text-amber-400"> 10 Minutes</span>
              </p>

              {/* Cart Icon */}
              <FaCartPlus className="w-8 h-8 text-sky-400 rounded-full ring-2 p-1 hover:text-amber-400" />
              <img
                className="w-8 h-8 rounded-full ring-2 ring-sky-400 hover:text-amber-400"
                src="/images/capture.png"
                alt="user avatar"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
