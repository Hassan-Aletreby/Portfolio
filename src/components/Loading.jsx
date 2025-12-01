import React from "react";
import "../style/Loading.css";

export default function Loading({ fadeOut }) {
  return (
    <div className={`loading-overlay ${fadeOut ? "fade-out" : ""}`}>
      <h1 className="loading-text">Welcome to My Portfolio</h1>
    </div>
  );
}
