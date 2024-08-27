import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../foodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="food-display-container mx-auto py-4 px-4 max-w-7xl">
      <h2 className="text-6xl mb-20 font-serif leading-snug font-bold">
        Top Dishes <br />
        <span className="ml-40 text-indigo-600 ">Near You</span>
      </h2>
      <div className="food-dishes-container grid grid-cols-4 gap-5">
        {food_list.map((item, index) => {
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
    </div>
  );
};

export default FoodDisplay;
