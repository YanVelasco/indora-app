import React, { useEffect, useState } from "react";

import DoraIcon from "../../assets/images/doraimg/DORAPNG2.png";

import { useNavigate, useLocation } from "react-router-dom";

const DoraFloat = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    navigate("/dora");
  };

  // if (location.pathname !== "/") return null;

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      onClick={handleClick}
      className={`fixed bottom-8 left-8 z-50 cursor-pointer transition-all duration-500 group ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="relative bg-white font-bold text-pink-500 drop-shadow-[0_0_10px_#ff00ff] text-sm px-4 py-2 rounded-lg shadow-lg mr-3  transition-opacity duration-300 opacity-0 group-hover:opacity-100">
        Clique para conhecer a DORA
      </div>

      <img
        src={DoraIcon}
        alt="DORA"
        className="w-20 h-30 drop-shadow-[0_0_6px_#00f0ff] hover:scale-105 transition-transform"
      />
    </div>
  );
};

export default DoraFloat;
