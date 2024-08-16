import React from "react";
import SkillsBars from "./skillsbar";
import aboutfinalimage from "../public/assets/aboutfinalimage.png";
import Image from "next/image";

const About = () => {
  return (
    <>
      <div
        className="flex flex-row mt-60 justify-around mb-60"
        style={{
          // border: "1px solid black",
          letterSpacing: "0.08rem",
        }}
      >
        <div
          style={{
            // border: "1px solid black",
            width: "30%",
            height: "33rem"

          }}
        >
          <Image src={aboutfinalimage} width={'100%'} alt="My Image" style={{
            height: '95%',
            maxWidth: '100%',
            width: '100%'
          }}/>
        </div>
        <div
          style={{
            width: "35%",
            //  border: "1px solid black"
          }}
        >
          <h1
            className="text-5xl poppins font-normal"
            style={{ fontWeight: "500" }}
          >
            About me
          </h1>
          <p className="mt-8 poppins mb-5">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis
            tempus pharetra
          </p>
          <SkillsBars content="UX" scale="5" />
          <SkillsBars content="Web Design" scale="4" />
          <SkillsBars content="App Design" scale="5" />
          <SkillsBars content="Graphic Design" scale="4" />
        </div>
      </div>
    </>
  );
};

export default About;
