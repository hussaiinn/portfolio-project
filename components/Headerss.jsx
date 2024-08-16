import React from "react";

const Headerss = ({head ,content}) => {
  return (
    <div
      className="poppins"
      style={{
        width: "85%",
        //   border: "1px solid black",
      }}
    >
      <h1 className="text-5xl text-center font-bold mb-6">{head}</h1>
      <p
        className="text-center poppins"
        style={{
          width: "50%",
          margin: "0 auto", // Center the paragraph horizontally
          // border: "1px solid black",
        }}
      >
        {content}
      </p>
    </div>
  );
};

export default Headerss;
