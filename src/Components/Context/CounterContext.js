import { createContext, useState } from "react";

export const counterContext = createContext();

export default function CounterContextProvider(props) {
  let [x, setX] = useState(0);
  function changeCounter() {
    setX(Math.floor(Math.random() * 10));
  }
  return (
    <counterContext.Provider value={{ x, changeCounter }}>
      {props.children}
    </counterContext.Provider>
  );
}
