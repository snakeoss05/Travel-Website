import React from "react";

export default function Testimonials() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 sm:gap-8 ">
      <div className="flex flex-col gap-4">
        <p className="text-lg text-[#5E6282] popins">Testimonials</p>
        <p className="text-5xl text-[#14183E] Volhov font-bold mb-12">
          What people say about Us.
        </p>
        <div className="flex flex-row gap-8">
          <span className="h-4 w-4 rounded-full bg-[#39425D]"></span>
          <span className="h-4 w-4 rounded-full bg-[#E5E5E5]"></span>
          <span className="h-4 w-4 rounded-full bg-[#E5E5E5]"></span>
        </div>
      </div>
      <div className="relative">
        <div className="absolute top-1/3 right-0 flex flex-col items-center justify-between  h-20 ">
          <svg
            width={16}
            height={10}
            viewBox="0 0 16 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 8.5L8 1.5L15 8.5"
              stroke="#BCB7C2"
              strokeWidth={2}
              strokeLinecap="round"
            />
          </svg>
          <svg
            width={16}
            height={10}
            viewBox="0 0 16 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 1L8 8L15 1"
              stroke="#3E2E4D"
              strokeWidth={2}
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="relative bg-white rounded-lg shadow-lg max-w-[504px] max-h-auto sm:max-h-[245px] p-8 z-30">
          <img
            src="images/testimonials/person.png"
            alt="hero"
            className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2"
          />
          <p className="text-[#4E4E73] popins leading-8">
            “On the Windows talking painted pasture yet its express parties use.
            Sure last upon he same as knew next. Of believed or diverted no.”
          </p>
          <p className="text-[#5E6282] popins font-semibold text-lg mt-6">
            Mike taylor
          </p>
          <p className="text-[#5E6282] popins leading-8">Lahore, Pakistan</p>
        </div>
        <div className="relative bg-white rounded-lg shadow-inner max-w-[504px] max-h-auto sm:max-h-[245px]  p-8 -translate-y-1/2 translate-x-12 z-10 border">
          <img
            src="images/testimonials/person.png"
            alt="hero"
            className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2"
          />

          <p className="text-[#4E4E73] popins leading-8">
            “On the Windows talking painted pasture yet its express parties use.
            Sure last upon he same as knew next. Of believed or diverted no.”
          </p>
          <p className="text-[#5E6282] popins font-semibold text-lg mt-6">
            Mike taylor
          </p>
          <p className="text-[#5E6282] popins leading-8">Lahore, Pakistan</p>
        </div>
      </div>
    </div>
  );
}
