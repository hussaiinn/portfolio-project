import React from "react";
import Buttons from "./Buttons";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div
        className="navbarr"
        style={{
          display: "flex",
          //   border: "1px solid black",
          paddingTop: "3rem",
          justifyContent: "space-around",
          position: "fixed",
          width: "100%",
          backgroundColor: "white",
          zIndex: "3",
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
          className="navbarr2 poppins "
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
              alignItems: "center",
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
            <li>
              <a
                href="https://hussain-portfolio-ten.vercel.app/resume"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Buttons
                  height="2.5rem"
                  width="9rem"
                  color="white"
                  fontSize="0.9rem"
                  bgcolor="#FD6F00"
                  content="Download CV"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
