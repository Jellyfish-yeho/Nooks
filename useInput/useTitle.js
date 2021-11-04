import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};
const App = () => {
  const titleUpdater = useTitle("loading...");
  setTimeout(() => titleUpdater("Home"), 3000);
  return (
    <div className="App">
      <h1>Superhooks!</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
