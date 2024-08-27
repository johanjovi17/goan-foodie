import FoodDisplay from "../../components/foodDisplay/FoodDisplay";
import ExploreMenu from "../../components/exploreMenu/ExploreMenu";
import { useState } from "react";

const Menu = () => {
  const [category, setCategory] = useState("All");
  return (
    <div className="menu-container py-20">
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </div>
  );
};

export default Menu;
