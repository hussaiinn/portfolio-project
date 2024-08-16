"use client";
import React, { useState } from "react";
import Buttons from "./Buttons";
import ProjectsCard from "./ProjectsCard";
import wd1 from "../public/assets/wd1.png";
import wd2 from "../public/assets/wd2.png";
import wd3 from "../public/assets/wd3.png";
import wd4 from "../public/assets/wd4.png";
import wd5 from "../public/assets/wd5.png";
import wd6 from "../public/assets/wd6.png";
import Headerss from "./Headerss";

const Projects = () => {
  // Function to change projects according to what user selected
  const [buttonName, setButtonName] = useState("wd");
  const onButtonClick = (name) => {
    return () => {
      console.log(name);
      setButtonName(name);
    };
  };
  return (
    <>
      {/* Outer layer of projects block */}
      <div
        className="flex flex-col items-center mb-60"
        style={{
          width: "100%",
          //   border: "1px solid black",
          letterSpacing: "0.08rem",
        }}
      >
        {/* Header a reusable component */}
        <Headerss
          head={"My Projects"}
          content={
            "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium"
          }
        />
        <div
          className="flex flex-row justify-around
          "
          style={{
            width: "45%",
            margin: "5rem auto",
          }}
        >
          {/* Buttons component it's reusable*/}
          {/* It has various paramters to design our button */}
          <Buttons
            width={"4rem"}
            height={"2rem"}
            bgcolor={`${buttonName == "all" ? "#FD6F00" : "#F8F8F8"}`} //this is how the color of buttons are changed as per the selection
            content={"All"}
            borders={`${buttonName == "all" ? "" : "1px solid #545454"}`} //this is how the borders color of buttons are changed as per the selection
            bradius={"0.5rem"}
            color={`${buttonName == "all" ? "white" : "#000000"}`} //this is how the text color of buttons are changed as per the selection
            fweight={"400"}
            onClick={onButtonClick("all")}
          />
          <Buttons
            width={"5rem"}
            height={"2rem"}
            bgcolor={`${buttonName == "uiux" ? "#FD6F00" : "#F8F8F8"}`}
            content={"UI/UX"}
            borders={`${buttonName == "uiux" ? "" : "1px solid #545454"}`}
            bradius={"0.5rem"}
            color={`${buttonName == "uiux" ? "white" : "#000000"}`}
            fweight={"400"}
            onClick={onButtonClick("uiux")}
          />
          <Buttons
            width={"9rem"}
            height={"2rem"}
            bgcolor={`${buttonName == "wd" ? "#FD6F00" : "#F8F8F8"}`}
            content={"Web Design"}
            borders={`${buttonName == "wd" ? "" : "1px solid #545454"}`}
            bradius={"0.5rem"}
            color={`${buttonName == "wd" ? "white" : "#000000"}`}
            fweight={"400"}
            onClick={onButtonClick("wd")}
          />
          <Buttons
            width={"9rem"}
            height={"2rem"}
            bgcolor={`${buttonName == "ad" ? "#FD6F00" : "#F8F8F8"}`}
            content={"App Design"}
            bradius={"0.5rem"}
            color={`${buttonName == "ad" ? "white" : "#000000"}`}
            borders={`${buttonName == "ad" ? "" : "1px solid #545454"}`}
            fweight={"400"}
            onClick={onButtonClick("ad")}
          />
          <Buttons
            width={"11rem"}
            height={"2rem"}
            bgcolor={`${buttonName == "gd" ? "#FD6F00" : "#F8F8F8"}`}
            content={"Graphic Design"}
            bradius={"0.5rem"}
            color={`${buttonName == "gd" ? "white" : "#000000"}`}
            borders={`${buttonName == "gd" ? "" : "1px solid #545454"}`}
            fweight={"400"}
            onClick={onButtonClick("gd")}
          />
        </div>
        <div
          className="flex flex-row justify-around pt-5"
          style={{
            //   border: "1px solid black",
            width: "60%",
            margin: "0 auto",
          }}
        >
          {/* Projects card to display projects with project image and desc. it's a reusable component */}
          {/* It takes two images and a head and content as paramteres */}
          <ProjectsCard
            image1={
              buttonName == "wd" //Images are changed as per the user selection
                ? wd1
                : buttonName == "ad" //Images are changed as per the user selection
                ? wd2
                : buttonName == "gd" //Images are changed as per the user selection
                ? wd3
                : buttonName == "all" //Images are changed as per the user selection
                ? wd4
                : wd5
            }
            image2={
              buttonName == "wd"
                ? wd2
                : buttonName == "ad"
                ? wd3
                : buttonName == "gd"
                ? wd4
                : buttonName == "all"
                ? wd5
                : wd6
            }
            head={"Web Design"}
            content={"AirCalling Landing Page Design"}
          />
          <ProjectsCard
            image1={
              buttonName == "wd"
                ? wd3
                : buttonName == "ad"
                ? wd4
                : buttonName == "gd"
                ? wd5
                : buttonName == "all"
                ? wd6
                : wd1
            }
            image2={
              buttonName == "wd"
                ? wd4
                : buttonName == "ad"
                ? wd5
                : buttonName == "gd"
                ? wd6
                : buttonName == "all"
                ? wd1
                : wd2
            }
            head={"Web Design"}
            content={"Business Landing Page Design"}
          />
          <ProjectsCard
            image1={
              buttonName == "wd"
                ? wd5
                : buttonName == "ad"
                ? wd6
                : buttonName == "gd"
                ? wd1
                : buttonName == "all"
                ? wd2
                : wd3
            }
            image2={
              buttonName == "wd"
                ? wd6
                : buttonName == "ad"
                ? wd1
                : buttonName == "gd"
                ? wd2
                : buttonName == "all"
                ? wd3
                : wd4
            }
            head={"Web Design"}
            content={"Ecom Web Page Design"}
          />
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Projects;
