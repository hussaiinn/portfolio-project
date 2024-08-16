import React from "react";
import twitter from "../public/assets/twitter.png";
import insta from "../public/assets/insta.png";
import linkedIn from "../public/assets/linkedIn.png";
import facebook from "../public/assets/facebook.png";
import twitterwhite from "../public/assets/twitterwhite.png";
import instawhite from "../public/assets/instawhite.png";
import linkedInwhite from "../public/assets/linkedInwhite.png";
import facebookwhite from "../public/assets/facebookwhite.png";
import Image from "next/image";

const Footerr = ({ ng }) => {
  return (
    <div
      className="footers flex flex-col items-center pt-16 justify-between"
      style={{
        backgroundColor: `${ng == true ? "#1E1E1E" : "#F8F8F8"}`,
        height: "25rem",
      }}
    >
      <div
        className="navbarr1"
        style={{
          display: "flex",
          flexDirection: "row",
          width: "12%",
          // border: "1px solid black",
          justifyContent: "space-around",
        }}
      >
        <div
          className="logo corvetta w-11 h-11 justify-center"
          style={{
            background: "#FD6F00",
            borderRadius: "50%",
            width: "3rem",
            height: "3rem",
            padding: ".2rem",
            fontSize: "1.5rem",
            color: "white",
          }}
        >
          mu
        </div>
        <p
          className="montserrat"
          style={{
            fontSize: "30px",
            fontWeight: "normal",
            color: `${ng == true ? "white" : "gray"}`,
            letterSpacing: "0.2rem",
          }}
        >
          <b
            style={{
              fontWeight: "bold",
              color: `${ng == true ? "white" : "black"}`,
            }}
          >
            M
          </b>
          umair
        </p>
      </div>
      <div
        className="navbarr2 poppins"
        style={{
          // border: "1px solid black",
          width: "50%",
          letterSpacing: "0.09rem",
        }}
      >
        <ul
          style={{
            display: "flex",
            justifyContent: "space-around",
            padding: "1rem",
            //   border: "1px black solid"
          }}
        >
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div
        className="navbarr2 poppins"
        style={{
          // border: "1px solid black",
          width: "20%",
          letterSpacing: "0.09rem",
        }}
      >
        <ul
          style={{
            display: "flex",
            justifyContent: "space-around",
            padding: "1rem",
            //   border: "1px black solid"
          }}
        >
          <li>
            <Image src={ng == true ? facebookwhite : facebook} alt="facebook" />
          </li>
          <li>
            <Image src={ng == true ? twitterwhite : twitter} alt="twitter" />
          </li>
          <li>
            <Image src={ng == true ? instawhite : insta} alt="insta" />
          </li>
          <li>
            <a
              href="https://github.com/hussaiinn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={ng == true ? linkedInwhite : linkedIn}
                alt="linkedIn"
              />
            </a>
          </li>
        </ul>
      </div>
      <div
        className=" flex flex-row justify-center poppins pt-4 text-white"
        style={{
          width: "100%",
          height: "3rem",
          backgroundColor: `${ng == true ? "black" : "#545454"}`,
          fontWeight: "200",
          fontSize: "0.9rem",
          letterSpacing: "0.08rem",
        }}
      >
        <h1>
          © 2023{" "}
          <span
            style={{
              fontWeight: "700",
              color: "#FD6F00",
            }}
          >
            Mumair
          </span>{" "}
          All Rights Reserved , Inc.
        </h1>
      </div>
    </div>
  );
};

export default Footerr;
