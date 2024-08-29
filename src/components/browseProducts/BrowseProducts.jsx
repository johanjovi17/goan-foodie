import React from "react";
import prawnVindaloo from "../../assets/pics/prawnVindaloo.jpg";
import rossOm from "../../assets/pics/rossOmlette.webp";
import butterChicken from "../../assets/pics/butterChicken.jpg";
import chorisPao from "../../assets/pics/chorisPao.jpg";
import FoodItem from "../foodItem/FoodItem";
import { motion } from "framer-motion";

const famousProducts = [
  {
    _id: "4",
    name: "Prawn Vindaloo",
    image: prawnVindaloo,
    price: 120,
  },
  {
    _id: "5",
    name: "Ross Omelette",
    image: rossOm,
    price: 80,
  },
  {
    _id: "3",
    name: "Butter Chicken",
    image: butterChicken,
    price: 150,
  },
  {
    _id: "6",
    name: "Choris Pao",
    image: chorisPao,
    price: 100,
  },
];

const BrowseProducts = () => {
  return (
    <div className="min-h-screen p-20 bg-indigo-600">
      <div className="flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { delay: 0.4 } }}
          className="text-6xl mb-6 font-serif font-bold text-white"
        >
          Our Top Dishes
        </motion.h1>
        <hr className="h-[2px] bg-white w-24 mb-8 border-rounded rounded-full "></hr>
        <div className="grid grid-cols-4 gap-5 w-full mt-10">
          {famousProducts.map((item, index) => {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                price={item.price}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BrowseProducts;
