"use client";
import Image from "next/image";
import Navbar from "../../components/navbar";
import Introbox from "../../components/Introbox";
import About from "../../components/About";
import Services from "../../components/Services";
import Projects from "../../components/Projects";
import Testimonials from "../../components/Testimonials";
import Email from "../../components/Email";
import Footerr from "../../components/Footer";
import { useState, useEffect } from "react";

export default function Home() {
  const [nightEffect, setNightEffect] = useState(false);

  const manageNightEffect = () => {
    setNightEffect((prev) => !prev);
  };

  useEffect(() => {
    if (nightEffect) {
      document.body.classList.add("night-mode");
    } else {
      document.body.classList.remove("night-mode");
    }
  }, [nightEffect]);
  return (
    <>
      <Navbar ngEffect={manageNightEffect} ng={nightEffect} />
      <div id="home">
        <Introbox ng={nightEffect} />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services ng={nightEffect} />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="testimonials">
        <Testimonials ng={nightEffect} />
      </div>
      <div id="contact">
        <Email />
      </div>
      <Footerr ng={nightEffect} />
    </>
  );
}
