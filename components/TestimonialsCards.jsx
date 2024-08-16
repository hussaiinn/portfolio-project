import React from "react";
import test1 from "../public/assets/test1.png";
import Image from "next/image";

const TestimonialsCards = ({ bgcolor, imagee, trasnlatee, display,ng }) => {
    const trns = trasnlatee;
    console.log(trns);
  return (
    <>
      <div
        className="tescards flex flex-row justify-around pt-10 pl-3"
        style={{
          width: "40%",
          // border: "1px solid black",
          height: "14rem",
          background: bgcolor,
          borderRadius: "0.5rem",
          transform: `${trasnlatee?trasnlatee:""}`
        }}
      >
        <Image
          src={test1} alt="Photo"
          style={{
            maxWidth: "20%",
            height: "65%",
            filter: `${display==false?"brightness(10%) invert(0.2)":''}`,
          }}

        />

        <p
          style={{
            fontSize: "0.8rem",
            width: "75%",
            fontWeight: "400",
            color: `${ng==true?"black":'black'}`,
          }}
        >
          <span
            style={{
              fontSize: "1.2rem",
              color: "#FD6F00",
              
            }}
          >
            &quot;
          </span>
          Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan.
          Id leo urna velit neque mattis id tellus arcu condimentum. Augue
          dictum dolor elementum convallis dignissim malesuada commodo ultrices.{" "}
          <span
            style={{
              fontSize: "1.2rem",
              color: "#FD6F00",
            }}
          >
        ,,
          </span> <br /> <br />
          <span
           style={{
            fontWeight: "bold",
          }}>Name</span>  <br />
          <span style={{
            fontWeight: "400"
          }}>CEO</span>
        </p>
      </div>
    </>
  );
};

export default TestimonialsCards;
