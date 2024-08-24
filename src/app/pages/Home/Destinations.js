import React from "react";

export default function Destinations() {
  return (
    <div className="flex flex-col items-center justify-center my-8 gap-4 relative text-center">
      <p className="font-semibold text-[#5E6282] poppins text-lg">
        Top Selling
      </p>
      <h1 className="font-bold Volhov text-[#14183E] text-5xl mb-8 sm:mb-16  ">
        Top Destinations
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-24 items-center ">
        <div className="flex flex-col gap-4 w-[315px] h-[457px] rounded-3xl shadow-xl overflow-hidden z-10">
          <img
            src="images/destinations/rome.png"
            className="w-full h-[327px] object-cover"
            alt="destination"
          />
          <div className="flex flex-col gap-4 p-4">
            <div className="flex flex-row justify-between items-center gap-4">
              <p className="poppins text-[#5E6282] text-lg ">Rome, Italy</p>
              <p className="text-[#5E6282] text-lg poppins">$5,42K</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18.0682 2.76033L11.1932 17.7603C11.1357 17.886 11.0381 17.989 10.9158 18.0533C10.7935 18.1177 10.6533 18.1396 10.5172 18.1158C10.3811 18.092 10.2567 18.0237 10.1635 17.9217C10.0703 17.8197 10.0135 17.6896 10.0021 17.5519L9.42083 10.579L2.44789 9.99771C2.31017 9.98627 2.18013 9.92951 2.0781 9.8363C1.97607 9.7431 1.90781 9.61871 1.88399 9.48258C1.86017 9.34646 1.88213 9.20628 1.94645 9.08397C2.01077 8.96166 2.11381 8.86411 2.23945 8.80658L17.2395 1.93158C17.3554 1.87844 17.4849 1.86205 17.6104 1.88461C17.736 1.90718 17.8516 1.96762 17.9418 2.05781C18.032 2.14801 18.0924 2.26365 18.115 2.38919C18.1375 2.51474 18.1212 2.64418 18.068 2.76014L18.0682 2.76033Z"
                  fill="#080809"
                />
              </svg>
              <p className="text-[#5E6282]  poppins text-base">10 Days Trip</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-[315px] h-[457px] rounded-3xl shadow-xl overflow-hidden z-10">
          <img
            src="images/destinations/london.png"
            className="w-full h-[327px] object-cover"
            alt="destination"
          />
          <div className="flex flex-col gap-4 p-4">
            <div className="flex flex-row justify-between items-center gap-4">
              <p className="poppins text-[#5E6282] text-lg">London, UK</p>
              <p className="text-[#5E6282] text-lg poppins">$4.2k</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18.0682 2.76033L11.1932 17.7603C11.1357 17.886 11.0381 17.989 10.9158 18.0533C10.7935 18.1177 10.6533 18.1396 10.5172 18.1158C10.3811 18.092 10.2567 18.0237 10.1635 17.9217C10.0703 17.8197 10.0135 17.6896 10.0021 17.5519L9.42083 10.579L2.44789 9.99771C2.31017 9.98627 2.18013 9.92951 2.0781 9.8363C1.97607 9.7431 1.90781 9.61871 1.88399 9.48258C1.86017 9.34646 1.88213 9.20628 1.94645 9.08397C2.01077 8.96166 2.11381 8.86411 2.23945 8.80658L17.2395 1.93158C17.3554 1.87844 17.4849 1.86205 17.6104 1.88461C17.736 1.90718 17.8516 1.96762 17.9418 2.05781C18.032 2.14801 18.0924 2.26365 18.115 2.38919C18.1375 2.51474 18.1212 2.64418 18.068 2.76014L18.0682 2.76033Z"
                  fill="#080809"
                />
              </svg>
              <p className="text-[#5E6282]  poppins text-base">12 Days Trip</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-[315px] h-[457px] rounded-3xl shadow-xl bg-white  overflow-hidden z-10">
          <img
            src="images/destinations/europe.png"
            className="w-full h-[327px] object-cover rounded-t"
            alt="destination"
          />
          <div className="flex flex-col gap-4 p-4 relative">
            <div className="flex flex-row justify-between items-center gap-4">
              <p className="poppins text-[#5E6282] text-lg">Full Europe</p>
              <p className="text-[#5E6282] text-lg poppins">$15k</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18.0682 2.76033L11.1932 17.7603C11.1357 17.886 11.0381 17.989 10.9158 18.0533C10.7935 18.1177 10.6533 18.1396 10.5172 18.1158C10.3811 18.092 10.2567 18.0237 10.1635 17.9217C10.0703 17.8197 10.0135 17.6896 10.0021 17.5519L9.42083 10.579L2.44789 9.99771C2.31017 9.98627 2.18013 9.92951 2.0781 9.8363C1.97607 9.7431 1.90781 9.61871 1.88399 9.48258C1.86017 9.34646 1.88213 9.20628 1.94645 9.08397C2.01077 8.96166 2.11381 8.86411 2.23945 8.80658L17.2395 1.93158C17.3554 1.87844 17.4849 1.86205 17.6104 1.88461C17.736 1.90718 17.8516 1.96762 17.9418 2.05781C18.032 2.14801 18.0924 2.26365 18.115 2.38919C18.1375 2.51474 18.1212 2.64418 18.068 2.76014L18.0682 2.76033Z"
                  fill="#080809"
                />
              </svg>
              <p className="text-[#5E6282]  poppins text-base">28 Days Trip</p>
            </div>
          </div>
        </div>
        <img
          src="images/destinations/Decore.svg"
          className="absolute -z-10 right-0 sm:right-6 bottom-0 "
          alt="usa"
        />
      </div>
    </div>
  );
}
