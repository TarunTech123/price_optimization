import React from "react";
import "./Loader.css";
import { LoaderProps } from "../../utils/types/Types";

const Loader: React.FC<LoaderProps> = ({ isVisible }) => {
  if (!isVisible) return null; // Hide loader when not needed

  return (
    <div className="loader-overlay">
      <div className="loader"></div>
    </div>
  );
};

export default Loader;