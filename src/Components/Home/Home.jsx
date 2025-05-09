import { useContext } from "react";
import style from "./Home.module.css";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
function Home() {
  return (
    <>
      <FeaturedProducts></FeaturedProducts>
    </>
  );
}

export default Home;
