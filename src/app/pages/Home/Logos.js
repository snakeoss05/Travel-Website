import React from "react";

export default function Logos() {
  return (
    <div className="flex flex-col sm:flex-row gap-8  items-center justify-between">
      <div className=" rounded-lg h-[86px] w-[241px] flex items-center justify-center contrast-0 transition-all ease duration-300 hover:contrast-100 hover:shadow-lg">
        <img src="/images/logos/1.png" alt="logo" />
      </div>
      <div className=" rounded-lg h-[86px] w-[241px] flex items-center justify-center contrast-0 transition-all ease duration-300 hover:contrast-100 hover:shadow-lg">
        <img src="/images/logos/2.png" alt="logo" />
      </div>
      <div className=" rounded-lg h-[86px] w-[241px] flex items-center justify-center  contrast-100 shadow-lg">
        <img src="/images/logos/3.png" alt="logo" />
      </div>
      <div className=" rounded-lg h-[86px] w-[241px] flex items-center justify-center contrast-0 transition-all ease duration-300 hover:contrast-100 hover:shadow-lg">
        <img src="/images/logos/4.png" alt="logo" />
      </div>
      <div className=" rounded-lg h-[86px] w-[241px] flex items-center justify-center contrast-0 transition-all ease duration-300 hover:contrast-100 hover:shadow-lg">
        <img src="/images/logos/5.png" alt="logo" />
      </div>
    </div>
  );
}
