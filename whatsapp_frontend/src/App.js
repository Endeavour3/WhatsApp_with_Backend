import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";

// interface AppState {

// }

export default function App() {
  return (
    <Provider store={store} >
      <RouterProvider router={router} />
    </Provider>
  );
}