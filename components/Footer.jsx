import React from "react";
import twitter from "../public/assets/twitter.png";
import insta from "../public/assets/insta.png";
import linkedIn from "../public/assets/linkedIn.png";
import facebook from "../public/assets/facebook.png";
import Image from "next/image";

const Footerr = () => {
  return (
    <div
      className="footers flex flex-col items-center pt-16 justify-between"
      style={{
        backgroundColor: "#F8F8F8",
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
            padding: "rem",
            fontSize: "2rem",
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
            color: "gray",
            letterSpacing: "0.2rem",
          }}
        >
          <b style={{ fontWeight: "bold", color: "black" }}>M</b>umair
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
            <Image src={facebook} />
          </li>
          <li>
            <Image src={twitter} />
          </li>
          <li>
            <Image src={insta} />
          </li>
          <li>
            <Image src={linkedIn} />
          </li>
        </ul>
      </div>
      <div
        className=" flex flex-row justify-center poppins pt-4 text-white"
        style={{
          width: "100%",
          height: "3rem",
          backgroundColor: "#545454",
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
