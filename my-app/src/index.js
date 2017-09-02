import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { connect } from "react-redux";

const initialState = ["Smells like spirit", "Enter Sandman"];

function playlist(state = initialState, action) {
  if (action.type === "ADD_TRACK") {
    return [...state, action.payload];
  }
  return state;
}

const store = createStore(playlist);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

// import { createStore } from "redux";

// const addTrackBtn = document.querySelectorAll(".addTrack")[0];
// const list = document.querySelectorAll(".list")[0];
// const trackInput = document.querySelectorAll(".trackInput")[0];

// function playlist(state = [], action) {
//   if (action.type === "ADD_TRACK") {
//     return [...state, action.payload];
//   }
//   return state;
// }

// const store = createStore(playlist);

// store.subscribe(() => {
//   list.innerHTML = "";
//   trackInput.value = "";
//   store.getState().forEach(track => {
//     const li = document.createElement("li");
//     li.textContent = track;
//     list.appendChild(li);
//   });
// });

// addTrackBtn.addEventListener("click", () => {
//   const trackName = document.querySelectorAll(".trackInput")[0].value;
//   store.dispatch({ type: "ADD_TRACK", payload: trackName });
// });
