import React from 'react';

export default function HeadingImage() {
  return (
    <div className="bg-hero-header bg-cover min-h-[200px] sm:min-h-[536px] flex items-center sm:px-[54px] px-3 w-full">
      <div className="text-md sm:text-[20px]">
        <h2 className="sm:text-[60px] text-[30px] leading-none font-bold">Featured Product</h2>
        <p className="sm:my-[15px] my-3 text-gray-200">Overlays,Alerts,Panels,Stingers Transition, and much more</p>
        <p className="text-[16px]">
          <button className="font-bold bg-white hover:opacity-80 rounded-lg text-black h-[39px] inline-flex justify-center items-center w-[100px] sm:w-[206px]">6FLOW</button>
          <button className="ml-2 font-bold border-2 border-white text-white rounded-lg h-[39px] inline-flex justify-center items-center w-[100px] sm:w-[206px] hover:bg-white hover:text-black">Get Started</button>
        </p>
      </div>
    </div>

  );
}

