import Hero from "../../components/hero/Hero";
import SimpleTastesBetter from "../../components/simpleTastesBetter/SimpleTastesBetter";
import GoodStuff from "../../components/goodStuff/goodStuff";
import FoodDisplay from "../../components/foodDisplay/FoodDisplay";
import ExploreMenu from "../../components/exploreMenu/ExploreMenu";
import BrowseProducts from "../../components/browseProducts/BrowseProducts";
import { useState } from "react";

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <>
      <Hero />
      <SimpleTastesBetter />
      <GoodStuff />
      <BrowseProducts />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} isHome={true} />
    </>
  );
};

export default Home;
