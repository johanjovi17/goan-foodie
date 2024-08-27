import React from "react";
import simpleBetterPic from "../../assets/pics/simpleBetterPic.jpg";
import { Link } from "react-router-dom";

const SimpleTastesBetter = () => {
  return (
    <div className="simple-better-container min-h-screen p-20">
      <div className="simple-better-content items-center justify-between flex">
        <div className="simple-better-left px-20 py-10 flex-[0.9]">
          <h1 className="text-6xl mb-4 font-serif font-bold">Simple Tastes</h1>
          <span className="text-6xl font-serif font-bold text-indigo-600 mb-4">
            Better
          </span>
          <hr className="h-1 bg-indigo-600 w-24 my-6 border-rounded rounded-full"></hr>
          <p className="mt-10 text-base text-slate-500 mb-10">
            At GoanFoodie, we believe that grilling with family and friends is
            one of life's simple pleasures and that the products we use to grill
            should be simple too. That's why we created the country's best
            tasting line of food products using real, simple ingredients with
            names you can pronounce.
          </p>
          <Link to="/about">
            <button className="bg-indigo-600 rounded-full px-5 py-3 text-md font-display text-white hover:cursor-pointer hover:bg-indigo-700 transition">
              About GoanFoodie
            </button>
          </Link>
        </div>
        <div className="simple-better-right flex-1">
          <div className="items-center flex mt-8 justify-center">
            <img src={simpleBetterPic} alt="" className="rotate-6 shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleTastesBetter;
