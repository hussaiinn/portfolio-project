import React from "react";

const SkillsBars = ({ content, scale }) => {
  return (
    <>
      <div className="poppins font-bold mb-4" style={{ fontSize: "1.2rem" }}>
        {content}
      </div>
      <div
        className="skillbars mt-2 flex flex-row justify-start mb-7"
        style={{
          width: "100%",
          height: "0.8rem",
          backgroundColor: "#EDECEC",
          borderRadius: "0.8rem",
          position: "relative",
        }}
      >
        <div
          style={{
            width: `${
              scale == "5"
                ? "95%"
                : scale == "4"
                ? "85%"
                : scale == "3"
                ? "70%"
                : "50%"
            }`,
            height: "100%",
            backgroundColor: "#FD6F00",
            borderRadius: "0.8rem",
          }}
        ></div>
        <div
          className=""
          style={{
            width: "1.8rem",
            height: "1.8rem",
            borderRadius: "50%",
            backgroundColor: "#EDECEC",
            border: "4px solid #FD6F00",
            position: "absolute", // Position the circle absolutely
            right: `${scale=='5'?"1rem":scale=="4"?"4rem":""}`, // Adjust to align it with the end of the bar
            top: "50%", // Center the circle vertically with the bar
            transform: "translateY(-50%)", // Adjust vertical alignment
            // transform: "translateX(-50%)", // Adjust vertical alignment
          }}
        ></div>
      </div>
    </>
  );
};

export default SkillsBars;
