import React from "react";

export default function Hero() {
  return (
    <div className="flex flex-col ">
      <div>
        <svg
          width={704}
          height={724}
          style={{ zIndex: -50 }}
          className="absolute right-0 top-0"
          viewBox="0 0 704 724"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M22.3069 222C-18.0931 153.2 5.4736 13.3333 22.3069 -48L701.807 -149L766.307 122.5L727.807 723.5C649.14 724.5 473.707 717 401.307 679C310.807 631.5 351.807 555 276.807 515C201.807 475 244.807 369.5 218.807 329.5C192.807 289.5 72.8069 308 22.3069 222Z"
            fill="#FFF1DA"
          />
        </svg>
        <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-[#D5AEE4] blur-[150px] translate-x-[-90%] "></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 my-8 items-center">
        <div className="flex flex-col gap-6 max-w-[545px]">
          <p className="text-[#DF6951] font-bold text-[20px] ">
            Best Destinations around the world
          </p>
          <h1
            className="Volhov text-[#181E4B] relative font-bold  leading-[89px] text-[84px]"
            style={{ letterSpacing: "-4px" }}>
            Travel, enjoy{" "}
            <img
              src="/images/Decore.png"
              className="absolute right-0"
              alt="leaf"
            />
            and live a new and full life
          </h1>
          <p className="text-[#5E6282] text-[16px] ">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
          <div className="flex flex-row gap-4 items-center">
            <button className="bg-[#F1A501] border border-[#F1A501] text-white py-3 px-6 boxShadow  rounded-lg transition duration-300 hover:shadow-2xl">
              Find out more
            </button>
            <button className="flex ms-4 bg-[#DF6951] text-white h-12 w-12  shadow-red-200 shadow-lg font-semibold transition duration-300  rounded-full hover:bg-[#F1A501] hover:text-white">
              <svg
                className="w-4 h-4 m-auto "
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 6.5L0.749999 12.9952L0.75 0.00480889L12 6.5Z"
                  fill="white"
                />
              </svg>
            </button>
            <span className="text-[#686D77]">Play Demo</span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center absolute opacity-50 sm:opacity-100 -z-10 sm:z-10 sm:relative">
          <img src="/images/Traveller 1.png" alt="intro-image" />
          <img
            src="/images/plane.png"
            alt="intro-image"
            className="absolute top-11/13 right-0"
          />
          <img
            src="/images/plane.png"
            alt="intro-image"
            className="absolute top-20 left-20"
          />
        </div>
      </div>
    </div>
  );
}
