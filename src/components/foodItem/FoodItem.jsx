import { useState, useContext } from "react";
import { IoMdStar, IoMdStarHalf } from "react-icons/io";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { MdCurrencyRupee } from "react-icons/md";
import { StoreContext } from "../../context/StoreContext";
import { motion } from "framer-motion";

const FoodItem = ({ id, name, price, image, description }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { delay: 0.4 } }}
      className="food-item-card shadow-lg h-100 rounded-lg hover:-translate-y-2 transition hover:shadow-xl "
    >
      <div className="img-container relative">
        <img
          src={image}
          alt={name}
          className="w-full h-[300px] display-block rounded-t-xl"
        />
        {!cartItems[id] ? (
          <AiFillPlusCircle
            className="text-4xl bg-white rounded-full p-0 absolute text-indigo-600 cursor-pointer right-1 bottom-2"
            onClick={() => addToCart(id)}
          />
        ) : (
          <div className="item-count-container gap-2 items-center flex bg-white rounded-full absolute right-1 bottom-2 ">
            <AiFillMinusCircle
              className="text-4xl text-indigo-600 cursor-pointer"
              onClick={() => removeFromCart(id)}
            />
            <p className="text-lg font-display">{cartItems[id]}</p>
            <AiFillPlusCircle
              className="text-4xl text-indigo-600 cursor-pointer"
              onClick={() => addToCart(id)}
            />
          </div>
        )}
      </div>
      <div className="food-item-info p-3 bg-white">
        <div className="food-item-top-container flex text-indigo-600 items-center justify-between mb-2">
          <p className="food-name text-xl font-serif">{name}</p>
          <div className="stars-container flex text-base">
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStarHalf />
          </div>
        </div>
        <p className="description text-sm text-slate-500 leading-snug mb-3">
          {description}
        </p>
        <p className="price font-consolas flex text-xl items-center text-indigo-600">
          <MdCurrencyRupee className="text-base" /> {price}
        </p>
      </div>
    </motion.div>
  );
};

export default FoodItem;
