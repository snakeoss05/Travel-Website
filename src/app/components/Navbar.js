import React from "react";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-between items-center py-4 h-[74px] mt-4">
      <div>
        <img src="/images/logo.png" alt="logo" />
      </div>

      <div className="hidden sm:flex">
        <ul className="flex flex-row gap-8 ">
          <li className="nav-link active ">Destinations</li>
          <li className="nav-link">Hotels</li>
          <li className="nav-link">Flights</li>
          <li className="nav-link">Bookings</li>
        </ul>
      </div>

      <div className="hidden sm:flex flex-row gap-4">
        <button className="nav-button text-[#212832] py-2 px-6  font-bold color rounded-full transition duration-300 hover:bg-[#212832] hover:text-white">
          Log In
        </button>
        <button className="nav-button  text-[#212832] py-2 px-6 font-bold border border-[#212832] hover:bg-[#212832] hover:text-white  transition duration-300 rounded-full hover:shadow-2xl">
          Sign Up
        </button>
      </div>
      <div className="sm:hidden">
        <svg
          className="sm:hidden h-6 w-6 hover:text-[#212832] cursor-pointer"
          viewBox="0 0 32 32"
          version="1.1"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor">
          <g id="SVGRepo_bgCarrier" strokeWidth={0} />
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g id="SVGRepo_iconCarrier">
            {" "}
            <title>bars-sort</title>{" "}
            <path d="M30 7.249h-28c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h28c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0zM18 15.25h-16c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h16c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0zM8.053 23.25h-6.053c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h6.053c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0z" />{" "}
          </g>
        </svg>
      </div>
    </div>
  );
}
