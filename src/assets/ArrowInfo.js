import React, { useEffect, useState } from "react";

const ArrowInfo = () => {
  const [scrollX, setScrollX] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrollX(document.documentElement.clientWidth);
    };
    handleScroll();
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("resize", handleScroll);
    };
  }, [scrollX]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${scrollX >= 1024 ? "36" : "16"}`}
      height={`${scrollX >= 1024 ? "36" : "16"}`}
      fill="none"
      viewBox="0 0 36 41"
    >
      <path
        fill="#000"
        d="M29.472 40.087a2.5 2.5 0 002.787-2.174l2.758-22.33a2.5 2.5 0 00-4.962-.614l-2.452 19.85-19.849-2.452a2.5 2.5 0 00-.613 4.962l22.33 2.758zM.029 3.537l27.778 35.607 3.942-3.076L3.971.462.03 3.538z"
      ></path>
    </svg>
  );
};

export default ArrowInfo;
