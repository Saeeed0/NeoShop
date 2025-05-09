import { useContext } from "react";
import style from "./Home.module.css";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import CategorySlider from "../CategorySlider/CategorySlider";
function Home() {
  return (
    <>
      <CategorySlider />
      <FeaturedProducts></FeaturedProducts>
    </>
  );
}

export default Home;
