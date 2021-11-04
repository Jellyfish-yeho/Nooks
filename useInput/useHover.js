import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
const useClick = (onClick)=>{
  const element = useRef();

  
  useEffect(()=>{
    if(typeof onClick !== "function"){
      return;
    }
    if(element.current){
      element.current.addEventListener("mouseEnter",onHover);
    }
    return ()=>{
      if(element.current){  
        element.current.removeEventListener("mouseEnter",onHover);
      }
    };
  }, []);
  return element;
};
const App = () => {
  const sayHello=()=>console.log("say hello");
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Superhooks!</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
