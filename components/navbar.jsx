'use client'
import React from "react";
import Buttons from "./Buttons";
import Link from "next/link";
import moon from "../public/assets/moon.png";
import sun from "../public/assets/sun.png";
import Image from "next/image";

const Navbar = ({ngEffect, ng}) => {
  const onNightButtonClick = ()=>{
    document.body.classList.toggle('night-mode');
    console.log('clicked')
    ngEffect();
  }

  return (
    <>
      <div
        className="navbarr"
        style={{
          display: "flex",
          // border: "1px solid black",
          paddingTop: "3rem",
          paddingLeft: '10rem',
          paddingRight: '3rem',
          justifyContent: "space-between",
          position: "fixed",
          width: "100%",
          backgroundColor: `${ng==true?'#1E1E1E':'white'}`,
          zIndex: "3",
        }}
      >
        <div
          className="navbarr1"
          style={{
            display: "flex",
            flexDirection: "row",
            width: "15%",
            // border: "1px solid black",
            justifyContent: "space-around",
            padding: '1rem'
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
            width: "65%",
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
        <div
          className="navbarr"
          style={{
            // display: "flex",
            // border: "1px solid black",
            // paddingTop: "3rem",
            justifyContent: "space-around",
            // position: "fixed",
            width: "5%",
            backgroundColor: `${ng==true?'#1E1E1E':'white'}`,
            zIndex: "3",
            alignItems: "center",
            padding: "1rem",
          }}
        >
          <div
            style={{
              height: "2.5rem",
              width: "2.5rem",
              backgroundColor: "#FD6F00",
              color: "white",
              borderRadius: "50%",
              padding: "0.5rem",
              cursor: 'pointer',
              transition: 'ease-in'
              
            }}
            onClick={onNightButtonClick}
            
          >
            <Image src={ng==true?sun:moon} color="white" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
