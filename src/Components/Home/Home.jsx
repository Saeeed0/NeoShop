import { useContext } from "react";
import style from "./Home.module.css";
import { counterContext } from "../Context/CounterContext";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
function Home() {
  const { changeCounter } = useContext(counterContext);
  
  return (
    <>
      <FeaturedProducts></FeaturedProducts>

      {/* <button
        onClick={() => {
          changeCounter();
        }}
        className="btn btn-dark"
      >
        changeCounter
      </button> */}
    </>
  );
}

export default Home;
