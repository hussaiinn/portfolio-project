import React from "react";
import Buttons from "./Buttons";
import introfinalimage from "../public/assets/introfinalimage.png";
import Image from "next/image";
import Link from "next/link";
import twitter from "../public/assets/twitter.png";
import insta from "../public/assets/insta.png";
import linkedIn from "../public/assets/linkedIn.png";
import facebook from "../public/assets/facebook.png";
import twitterwhite from "../public/assets/twitterwhite.png";
import instawhite from "../public/assets/instawhite.png";
import linkedInwhite from "../public/assets/linkedInwhite.png";
import facebookwhite from "../public/assets/facebookwhite.png";

const Introbox = ({ ng }) => {
  return (
    <>
    {/* Outer container of About block */}
      <div className="flex flex-row w-auto justify-around align-middle pt-40 flex-wrap">
        <div
          style={{
            width: "40%",
            display: "flex",
            justifyContent: "flex-end",
            // border: "1px solid black",
            paddingTop: "5rem",
            // height: "25rem"
          }}
        >
          {/* About me */}
          <div
            className="poppins"
            style={{
              fontWeight: "bold",
              width: "88%",
              //   border: "1px solid black",
              // lineHeight: "3rem"
              letterSpacing: "0.08rem",
            }}
          >
            <p>Hi I am</p>
            <p className="text-[#FD6F00] text-xl font-semibold mt-2 mb-3">
              Muhammad Umair
            </p>
            <h1 className="text-6xl font-bold mb-0">UI & UX</h1>
            <h1 className="text-6xl font-bold mt-0 ms-36 mb-10">Designer</h1>
            <p className=" font-normal mb-8" style={{ width: "90%" }}>
              Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
              nibh lectus netus in. Aliquet donec morbi convallis pretium.
              Turpis tempus pharetra
            </p>
            <a
              href="https://hussain-portfolio-ten.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Buttons
                color="white"
                content="Hire me"
                width="10rem"
                height="2.5rem"
                bgcolor="#FD6F00"
              />
            </a>
          </div>
        </div>
        {/* My Image */}
        <div
          className=""
          style={{
            // border: "1px solid black",
            width: "40%",
          }}
        >
          <div
            className=""
            style={{
              width: "70%",
              height: "100%",
              borderRadius: "50%",
              border: "linear",
            }}
          >
            <Image src={introfinalimage} alt="My Image" />
          </div>
          {/* Links to Connect insta facebook twitter linkedIn */}
          <ul
            style={{
              display: "flex",
              justifyContent: "space-around",
              paddingLeft: "8rem",
              // border: "1px black solid",
              width: "55%",
              alignSelf: "center",
              justifySelf: "center",
            }}
          >
            <li>
              <Image
                src={ng == true ? facebookwhite : facebook}
                alt="facebook"
              />
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
      </div>
    </>
  );
};

export default Introbox;
