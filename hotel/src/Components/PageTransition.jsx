import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const PageTransition = ({ children }) => {
  const [isExiting, setIsExiting] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsExiting(false); // Reset when the location changes
  }, [location]);

  return (
    <div
      className={`transition-wrapper ${
        isExiting ? "animate-slideOut" : "animate-slideIn"
      }`}
    >
      {children}
    </div>
  );
};

export default PageTransition;
