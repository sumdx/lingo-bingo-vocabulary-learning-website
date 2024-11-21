import React from "react";
import AboutUsImg from "./../assets/about-us.svg";

const About = () => {
  return (
    <div>
      <div className="py-12 bg-custom-gradient rounded-2xl">
        <h1 className="text-5xl font-bold text-center text-white">About Us</h1>
        <p className=" text-center font-base font-light mt-6 text-primaryBg">
          "We believe we will create a learning path" <br />
          <span className="font-semibold"> — Frank Smith</span>
        </p>
      </div>
      <div  className="container md:flex mt-10 sm:mx-auto">
          <div
            data-aos="fade-right"
            className=" md:w-1/2 flex flex-col items-start"
          >
            <img className="" src={AboutUsImg} alt="" />
          </div>
          <div
            data-aos="fade-left"
            className="md:w-1/2 sm:justify-center flex flex-col md:items-end"
          >
            <h2 className="text-primaryAccent sm:text-center sm:mx-auto md:text-right  bg-buttonBgClr rounded-2xl px-4 py-2 inline-block ">
              About Us
            </h2>
            <h1 className="text-bodyText  sm:text-center mt-4 font-medium text-4xl">
              Welcome to{" "}
              <span className="text-primaryAccent">Lingo Bingo!</span>
            </h1>
            <p className="text-bodyText sm:text-center md:text-right w-3/4 mt-4">
              At Lingo Bingo, we believe that learning a new language should be
              fun, engaging, and accessible to everyone. Our mission is to
              simplify vocabulary building and help users improve their
              communication skills in a unique and interactive way.
            </p>
          </div>
        </div>
    </div>
  );
};

export default About;
