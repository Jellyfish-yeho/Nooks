import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

// https://developer.mozilla.org/en-US/docs/Web/API/notification
import "./styles.css";

const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotif;
};

const App = () => {
  const triggerNotif = useNotification("can i steal your kimchi?", {
    body: "I love kimchi"
  });
  return (
    <div>
      <h1>Superhooks!</h1>
      <button onClick={triggerNotif}>Hello</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
