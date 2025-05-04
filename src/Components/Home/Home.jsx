import { useContext } from "react";
import style from "./Home.module.css";
import { counterContext } from "../Context/CounterContext";
function Home() {
  const { changeCounter } = useContext(counterContext);
  return (
    <>
      <h2>Home</h2>
      <button
        onClick={() => {
          changeCounter();
        }}
        className="btn btn-dark"
      >
        changeCounter
      </button>
    </>
  );
}

export default Home;
