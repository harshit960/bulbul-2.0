import React from "react";
import { ContentWrapper } from "./ContentWrapper";

const Hero = () => {
  return (
    <div className="w-full min-h-screen ">
      <ContentWrapper>
        <div className="w-full h-screen flex items-center justify-center z-40">
          <div className="w-full flex flex-col items-center justify-center">
            <div className="text-center text-sm">
              Offering the Most Rideshare Options to Space
            </div>
            <h1 className="text-center exo-2 uppercase">
              Offering the Most Rideshare Options to Space
            </h1>
            <p className="w-4/5 text-gray-500 text-center">
              Laboris qui culpa minim est nostrud minim et nostrud
              reprehenderit. Anim fugiat sunt occaecat do aute incididunt ex
              pariatur nostrud. do aute incididunt ex pariatur nostrud.
            </p>
            <div className="flex items-center justify-center mt-7">
              <button className="bg-radical-red font-bold text-white px-6 py-3 border-none rounded-md cursor-pointer mr-4">
                Explore More
              </button>
              <button className="border-white font-bold text-white text-radical-red px-6 py-3 border rounded-md cursor-pointer">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Hero;
