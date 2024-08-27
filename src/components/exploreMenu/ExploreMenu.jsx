import React from "react";
import { menu_list } from "../../assets/data.js";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu-container mx-auto py-4 px-4 max-w-7xl mt-8">
      <h2 className="explore-menu-title text-left text-6xl mb-10 font-serif font-bold">
        Explore Our <span className="text-indigo-600">Menu</span>
      </h2>
      <p className="explore-menu-desc text-base text-slate-500 w-1/2 mb-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
        voluptatem cum quos laudantium consectetur molestias quas iusto, commodi
        dolorem officia!
      </p>
      <div className="explore-menu-list-container border-b border-slate-400 flex justify-between pb-8">
        {menu_list.map((item, index) => {
          return (
            <button
              key={index}
              onClick={() =>
                setCategory((prev) => (prev === item ? "All" : item))
              }
              className={`bg-indigo-600 rounded-full px-8 py-5 text-lg font-display text-white hover:cursor-pointer hover:bg-indigo-700 transition ${
                category === item ? "focus:-translate-y-3 focus:shadow-2xl" : ""
              }`}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ExploreMenu;
