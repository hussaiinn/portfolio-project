import React from "react";
import Image from "next/image";

const ServicesBox = ({ head, content, icons, ng }) => {
  return (
    <>
      <div
        className="serviceBox pt-10 pb-10 pr-3 pl-4"
        style={{
          width: "20%",
          backgroundColor: "#F8F8F8",
          borderRadius: "0.8rem",
          color: `${ng == true ? "black" : "black"}`,
        }}
      >
        <Image src={icons} />
        <h1 className="mt-6 text-2xl poppins font-bold">{head}</h1>
        <p className="mt-4 poppins">{content}</p>
      </div>
    </>
  );
};

export default ServicesBox;
