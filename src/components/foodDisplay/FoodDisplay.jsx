import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../foodItem/FoodItem";
import { FaLongArrowAltRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FoodDisplay = ({ category, isHome = false }) => {
  const { food_list } = useContext(StoreContext);
  const homePageFoodItems = isHome ? food_list.slice(0, 8) : food_list;
  return (
    <div className="food-display-container mx-auto py-4 px-4 max-w-7xl">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { delay: 0.4 } }}
        className="text-6xl mb-20 font-serif leading-snug font-bold"
      >
        Top Dishes <br />
        <span className="ml-40 text-indigo-600 ">Near You</span>
      </motion.h2>
      <div className="food-dishes-container grid grid-cols-4 gap-5 mb-7">
        {homePageFoodItems.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
      {isHome === true ? (
        <div className="full-menu-btn flex items-center justify-center w-full mb-7">
          <Link to="/menu">
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { delay: 0.3 } }}
              onClick={() => window.scrollTo(0, 0)}
              className="px-8 py-3 gap-2 group flex transition items-center justify-center font-semibold font-display rounded-full text-white bg-indigo-600 hover:opacity-90"
            >
              <p>View Full Menu</p>
              <FaLongArrowAltRight className="group-hover:translate-x-1 transition duration-300 mt-1" />
            </motion.button>
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default FoodDisplay;
