"use client";
import React, { useEffect, useState } from "react";

const BackInfo = () => {
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
      width={`${scrollX >= 768 ? "40" : "25"}`}
      height={`${scrollX >= 768 ? "40" : "25"}`}
      fill="none"
      viewBox="0 0 44 52"
    >
      <path
        fill="#FF9F00"
        d="M1.525 23.525a3.5 3.5 0 000 4.95L23.8 50.749a3.5 3.5 0 104.95-4.95L8.949 26l19.8-19.799a3.5 3.5 0 10-4.95-4.95L1.525 23.525zM44 22.5H4v7h40v-7z"
      ></path>
    </svg>
  );
};

export default BackInfo;
