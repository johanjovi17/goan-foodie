import React from "react";
import { GiCorn } from "react-icons/gi";
import { LuTestTubes } from "react-icons/lu";
import { GiFern } from "react-icons/gi";
import { FaDna } from "react-icons/fa6";

const goodStuff = () => {
  return (
    <div className="min-h-screen p-20">
      <div className="goodStuff-content flex flex-col items-center">
        <h1 className="goodStuff text-6xl mb-6 font-serif font-bold">
          Only The{" "}
          <span className="text-6xl font-serif font-bold text-indigo-600 mb-4">
            Good
          </span>{" "}
          Stuff
        </h1>
        <hr className="h-1 bg-indigo-600 w-24 mb-8 border-rounded rounded-full "></hr>
        <div className="goodStuff-icon-container flex justify-evenly w-full mt-10">
          <div className="goodStuff-box h-[200px] w-[200px] items-center flex flex-col justify-center">
            <GiCorn className="p-1 text-9xl text-indigo-600 rounded-full border-4 border-indigo-600 mb-3" />
            <p className="goodStuff-icon-text text-center text-lg text-indigo-600 text-base">
              No High Fructose Corn Syrup
            </p>
          </div>
          <div className="goodStuff-box h-[200px] w-[200px] items-center flex flex-col justify-center">
            <LuTestTubes className="p-1 text-9xl text-indigo-600 rounded-full border-4 border-indigo-600 mb-3" />
            <p className="goodStuff-icon-text text-center text-lg text-indigo-600 text-base">
              No Artificial Flavors, Colors or Preservatives
            </p>
          </div>
          <div className="goodStuff-box h-[200px] w-[200px] items-center flex flex-col justify-center">
            <GiFern className="p-1 text-9xl text-indigo-600 rounded-full border-4 border-indigo-600 mb-3" />
            <p className="goodStuff-icon-text text-center text-lg text-indigo-600 text-base">
              Gluten <br /> Free
            </p>
          </div>
          <div className="goodStuff-box h-[200px] w-[200px] items-center flex flex-col justify-center">
            <FaDna className="p-1 text-9xl text-indigo-600 rounded-full border-4 border-indigo-600 mb-3" />
            <p className="goodStuff-icon-text text-center text-lg text-indigo-600 text-base">
              Non <br /> GMO
            </p>
          </div>
        </div>
        <h1 className="text-3xl font-serif font-bold mt-20">
          SIMPLE INGREDIENTS. NO JUNK.
        </h1>
      </div>
    </div>
  );
};

export default goodStuff;
