import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import Router from "./Router";

const toastOptions = {
  position: 'top-center',
  autoClose: 1600,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ToastContainer
      position={toastOptions.position}
      autoClose={toastOptions.autoClose}
      hideProgressBar={toastOptions.hideProgressBar}
      closeOnClick={toastOptions.closeOnClick}
      pauseOnHover={toastOptions.pauseOnHover}
      draggable={toastOptions.draggable}
      progress={toastOptions.progress}
    />
    <Router />
  </BrowserRouter>
);
