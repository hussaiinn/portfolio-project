import React from "react";
import Image from "next/image";

const ProjectsCard = ({image1, image2, head, content}) => {
  return (
    <>
      <div
        className="card flex flex-col justify-between"
        style={{
          width: "30%",
          height: "25rem",
        //   border: "1px solid black"
        }}
      >
        <div
          className="pl-6 pt-0 flex items-center" // Add flexbox and center alignment
          style={{
            width: "100%",
            height: "80%",
            backgroundColor: "#FFEBDB",
            borderRadius: "0.5rem",
            display: "flex", // Apply flexbox layout
            flexDirection: "row", // Arrange items in a row
            alignItems: "center", // Center align items vertically
            gap: "0rem", // Optional: space between images
          }}
        >
          <Image
            src={image1} alt="Project Image"
            style={{
              maxWidth: "70%",
              width: "70%",
              height: "80%",
              zIndex: 2,
            //   transform: "translateX(4rem)",
              transform: "translateY(2.2rem)",
            }}
          />
          <Image
            src={image2} alt="Project Image"
            style={{
              maxWidth: "100%",
              width: "70%",
              height: "100%",
              transform: "translateX(-6rem)",
              zIndex: 1,
            }}
          />
        </div>
        <h1 className="poppins" style={{color: "#FD6F00", fontSize: "0.8rem"}}>{head}</h1>
        <p className="poppins font-bold">{content}</p>
      </div>
    </>
  );
};

export default ProjectsCard;
