'use client'
import React from "react";
import Headerss from "./Headerss";
import Buttons from "./Buttons";

const Email = () => {
  const onButtonClick = () => {
    alert("Your email is Successfully Registered");
  };

  return (
    <>
      <div
        className="flex flex-col items-center mb-36"
        style={{
          width: "100%",
          //   border: "1px solid black",
          letterSpacing: "0.08rem",
        }}
      >
        <Headerss
          head={"Lets Design Together"}
          content={
            "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium"
          }
        />
        <div
          className="flex flex-row mt-11 justify-between"
          style={{
            width: "30%",
          }}
        >
          <input
            type="text"
            placeholder="Enter Your Email"
            style={{
              border: "1px solid #AFAFAF",
              backgroundColor: "#F8F8F8",
              fontSize: "0.8rem",
              padding: "0.5rem",
              width: "70%",
              borderRadius: "0.5rem",
              color: 'black'
            }}
          />
          <Buttons
            content={"Contact Me"}
            width={"28%"}
            bgcolor={"#FD6F00"}
            color={"white"}
            bradius={"0.5rem"}
            height={"2.5rem"}
            fweight={"400"}
            onClick={onButtonClick}
          />
        </div>
      </div>
    </>
  );
};

export default Email;
