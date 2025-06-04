import { useEffect, useRef } from "react";
import style from "./Categories.module.css";
function Categories() {
  const myh2 = useRef();
  useEffect(() => {
    myh2.current.innerHTML = "Hi h2 we can change your text by <br> myh2.current.innerHTML";
    console.log(myh2);
  }, []);

  return (
    <>
      <h2 ref={myh2}>Categories</h2>
    </>
  );
}

export default Categories;
