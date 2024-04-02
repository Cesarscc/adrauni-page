"use client";
import React, { useEffect, useState } from "react";

export const Substrack = () => {
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
      width={`${scrollX >= 780 ? "86" : "40"}`}
      height={`${scrollX >= 780 ? "86" : "40"}`}
      fill="none"
      viewBox="0 0 86 86"
    >
      <path
        fill="#0080ff"
        fillRule="evenodd"
        d="M43 86c23.748 0 43-19.252 43-43S66.748 0 43 0 0 19.252 0 43s19.252 43 43 43zm-8.958-62.708l31.354 20.604-31.354 18.812V23.292z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};
