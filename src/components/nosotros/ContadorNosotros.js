"use client";
import "animate.css";
import React, { useEffect, useState } from "react";

const ContadorNosotros = () => {
  const [count, setCount] = useState("0");
  const [count2, setCount2] = useState("0");
  const [count3, setCount3] = useState("0");

  const observeElement = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains("fadeEffect1")) {
          let start = 0;
          const end = 41;
          if (start === end) return;
          let totalMilSecDur = 2;
          let incrementTime = (totalMilSecDur / end) * 1000;
          let timer = setInterval(() => {
            start += 1;
            setCount(String(start) + "41".substring(3));
            if (start === end) clearInterval(timer);
          }, incrementTime);

          entry.target.classList.add("animate__animated");
          entry.target.classList.add("animate__fadeInUp");
        }
        if (entry.target.classList.contains("fadeEffect2")) {
          let start = 0;
          const end = 12;
          if (start === end) return;
          let totalMilSecDur = 1.5;
          let incrementTime = (totalMilSecDur / end) * 1000;
          let timer = setInterval(() => {
            start += 1;
            setCount2(String(start) + "12".substring(3));
            if (start === end) clearInterval(timer);
          }, incrementTime);
          entry.target.classList.add("animate__animated");
          entry.target.classList.add("animate__fadeInUp");
        }
        if (entry.target.classList.contains("fadeEffect3")) {
          let start = 0;
          const end = 38;
          if (start === end) return;
          let totalMilSecDur = 2;
          let incrementTime = (totalMilSecDur / end) * 1000;
          let timer = setInterval(() => {
            start += 1;
            setCount3(String(start) + "38".substring(3));
            if (start === end) clearInterval(timer);
          }, incrementTime);
          entry.target.classList.add("animate__animated");
          entry.target.classList.add("animate__fadeInUp");
        }
      } else {
        entry.target.classList.remove("animate__animated", "animate__fadeInUp");
      }
    });
  };

  useEffect(() => {
    const fadeElements1 = document.querySelectorAll(".fadeEffect1");
    const fadeElements2 = document.querySelectorAll(".fadeEffect2");
    const fadeElements3 = document.querySelectorAll(".fadeEffect3");
    const observer = new IntersectionObserver(observeElement, {
      root: null,
    });

    fadeElements1.forEach((fadeElement1) => observer.observe(fadeElement1));
    fadeElements2.forEach((fadeElement2) => observer.observe(fadeElement2));
    fadeElements3.forEach((fadeElement3) => observer.observe(fadeElement3));
  }, []);

  return (
    <div className="flex justify-evenly bg-[#EAEFF3] lg:h-[332px] rounded-[32px] my-5 lg:my-20 mx-5 md:mx-20 py-5 md:py-10 md:pt-10">
      <div className={`fadeEffect1 opacity-0`}>
        <p className="text-center text-[#F97700] text-[24px] md:text-[28px] lg:text-[130px] font-baloo font-extrabold">
          {count}
        </p>
        <p className="text-black text-[11px] md:text-[12px] lg:text-[30px] text-center font-baloo font-extrabold">
          PERRITOS
        </p>
      </div>
      <div className={`fadeEffect2 opacity-0`}>
        <p className="text-center text-[#F97700] text-[24px] md:text-[28px] lg:text-[130px] font-baloo font-extrabold">
          {count2}
        </p>
        <p className="text-black text-[11px] md:text-[12px] lg:text-[30px] text-center font-baloo font-extrabold">
          GATITOS
        </p>
      </div>
      <div className={`fadeEffect3 opacity-0`}>
        <p className="text-center text-[#F97700] text-[24px] md:text-[28px] lg:text-[130px] font-baloo font-extrabold">
          {count3}+
        </p>
        <p className="text-black text-[11px] md:text-[12px] lg:text-[30px] text-center font-baloo font-extrabold">
          Districts
        </p>
      </div>
    </div>
  );
};

export default ContadorNosotros;
