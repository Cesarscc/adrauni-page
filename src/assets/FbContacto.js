"use client";

import { useEffect, useState } from "react";

const FbContacto = () => {
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
      width={`${scrollX >= 1024 ? "89" : scrollX >= 768 ? "66" : scrollX >= 640 ? "46" : "26"}`}
      height={`${scrollX >= 1024 ? "88" : scrollX >= 768 ? "65" : scrollX >= 640 ? "45" : "25"}`}
      viewBox="0 0 89 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M46.6667 51.075H57.619L62 38.875H46.6667V32.775C46.6667 29.6335 46.6667 26.675 55.4286 26.675H62V16.427C60.5718 16.2959 55.1789 16 49.4836 16C37.5893 16 29.1429 21.0538 29.1429 30.335V38.875H16V51.075H29.1429V77H46.6667V51.075Z"
        fill="#F97700"
      />
    </svg>
  );
};

export default FbContacto;
