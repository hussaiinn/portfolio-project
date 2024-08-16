import React from "react";

const Buttons = ({
  width,
  height,
  color,
  fontSize,
  bgcolor,
  content,
  borders,
  bradius,
  fweight,
  onClick
}) => {
  return (
    <>
      <button
        className="poppins"
        onClick={onClick}
        style={{
          height: height,
          width: width,
          color: color,
          fontSize: fontSize,
          backgroundColor: bgcolor,
          borderRadius: `${bradius ? bradius : "0.2rem"}`,
          border: borders,
          fontWeight: `${fweight ? fweight : "100"}`,
          // padding: "0.4rem 0 0 0"
        }}
      >
        {content}
      </button>
    </>
  );
};

export default Buttons;
