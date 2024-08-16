import React from "react";
import ServicesBox from "./ServicesBox";
import uiux from "../public/assets/uiuxvector.png";
import webdesign from "../public/assets/webDesignVector.png";
import graphics from "../public/assets/graphicdesignVector.png";
import appdesign from "../public/assets/appdesignVector.png";
import Headerss from "./Headerss";

const Services = () => {
  return (
    <div
      className="flex flex-col items-center mb-60"
      style={{
        width: "100%",
        // border: "1px solid black",
        letterSpacing: "0.08rem",
      }}
    >
      <Headerss
        head={"Services"}
        content={
          "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium"
        }
      />
      <div
        className="flex flex-row mt-10 justify-around poppins"
        style={
          {
            // border: "1px solid black",
            width: "85%"

          }
        }
      >
        <ServicesBox
          icons={uiux}
          head={"UI/UX"}
          content={
            "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"
          }
        />
        <ServicesBox
          icons={webdesign}
          head={"Web Design"}
          content={
            "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"
          }
        />
        <ServicesBox
          icons={appdesign}
          head={"App Design"}
          content={
            "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"
          }
        />
        <ServicesBox
          icons={graphics}
          head={"Graphic Design"}
          content={
            "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"
          }
        />
      </div>
    </div>
  );
};

export default Services;
