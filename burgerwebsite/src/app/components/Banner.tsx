import React from "react";

export default function Banner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-black to-gray-700 font-sans px-6 py-12 mb-7">
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://img.freepik.com/premium-photo/juicy-hamburger-with-cheese-sauce-smoking-sizzling-placed-hot-surface-with-flames-licking-around-it_1352884-25327.jpg?w=740"
          alt="delicious burger banner"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 container mx-auto flex flex-col justify-center items-center text-center">
        <h2 className="text-white sm:text-5xl font-bold mb-4 shadow-lg">
          Discover Our Menu
        </h2>
        <p className="text-white text-lg text-center mb-6 max-w-xl">
          Shop Now for Exclusive Burgers Discounts
        </p>

        <button
          type="button"
          className="bg-cyan-500 text-white text-sm font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-blue-600 transition duration-300ms"
        >
          Exciting Deals Launch at 12PM
        </button>
      </div>
    </div>
  );
}
