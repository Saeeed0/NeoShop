import style from "./Home.module.css";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import CategorySlider from "../CategorySlider/CategorySlider";
import MainSlider from "../MainSlider/MainSlider";
import { Helmet } from "react-helmet";
function Home() {
  return (
    <>
      <Helmet>
        <title>Fresh Cart Home</title>
        <meta name="description" content="Fresch Cart Home" />
      </Helmet>
      <MainSlider />
      <CategorySlider />
      <FeaturedProducts></FeaturedProducts>
    </>
  );
}

export default Home;
