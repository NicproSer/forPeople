import React from "react";
import "./Preloader.css";

export default function Preloader() {
  setTimeout(() => {
    document.getElementById("preloader").classList.add("hidden");
  }, 2000);

  return (
    <div id="preloader">
      <div className="cssload"></div>
    </div>
  );
}
