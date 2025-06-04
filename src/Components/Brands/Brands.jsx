import { useMemo, useState } from "react";
import style from "./Brands.module.css";
function Brands() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  function increament1() {
    setCounter1(counter1 + 1);
  }
  function increament2() {
    setCounter2(counter2 + 1);
  }

  let checkCount2Even = useMemo(() => {
    console.log("check Even fun");

    return counter2 % 2 === 0;
  },[counter2]);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h2 className="">Counter1</h2>
            <h6>{counter1}</h6>
            <button onClick={increament1} className="btn btn-primary">
              +
            </button>
          </div>
          <div className="col-6">
            <h2 className="">Counter2</h2>
            <h6>{counter2}</h6>
            <h5>{checkCount2Even ? "Even" : "Odd"}</h5>
            <button onClick={increament2} className="btn btn-primary">
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Brands;
