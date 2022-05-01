import React from "react";
import loading from "./96x96.gif";

const Spinner = () => {
  return (
    <div className="text-center my-3">
      <img src={loading} alt="spinner" />
    </div>
  );
};

export default Spinner;
