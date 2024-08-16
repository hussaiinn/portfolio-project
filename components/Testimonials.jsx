import React from "react";
import TestimonialsCards from "./TestimonialsCards";
import Buttons from "./Buttons";
import Headerss from "./Headerss";

const Testimonials = ({ng}) => {
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
        {/* Headers component it's reusable, it takes head and content as parameters */}
        <Headerss
          head={"Testimonials"}
          content={
            "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium"
          }
        />
        <div
          className="flex flex-row mt-16 justify-around w-full poppins"
          style={{
            // border: "1px solid black",
            width: "100%",
          }}
        >
          {/* <TestimonialsCards bgcolor={'white'} trasnlatee='translateX(-15rem)' display={false}/> */}
          {/* Testemonial Cards to display tetimonies */}
          <TestimonialsCards bgcolor={"#F8F8F8"} ng={ng} />
          {/* <TestimonialsCards bgcolor={'white'} trasnlatee='translateX(15rem)' display={false}/> */}
        </div>
        <div className="flex flex-row justify-center w-full mt-14">
          <div
            className="flex flex-row justify-between"
            style={{ width: "13%" }}
          >
            <Buttons
              width={"3rem"}
              height={"0.8rem"}
              bgcolor={"#D9D9D9"}
              bradius={"1rem"}
              borders={"1px solid #EDECEC"}
            />
            <Buttons
              width={"3rem"}
              height={"0.8rem"}
              bgcolor={"#D9D9D9"}
              bradius={"1rem"}
              borders={"1px solid #EDECEC"}
            />
            <Buttons
              width={"3rem"}
              height={"0.8rem"}
              bgcolor={"#FD6F00"}
              bradius={"1rem"}
              borders={"1px solid #EDECEC"}
            />
            <Buttons
              width={"3rem"}
              height={"0.8rem"}
              bgcolor={"#D9D9D9"}
              bradius={"1rem"}
              borders={"1px solid #EDECEC"}
            />
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Testimonials;
