import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import AboutUsImg from "./../assets/about-us.svg";
import CountUp from "react-countup";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import Cover1 from "./../assets/Cover1.jpg";
import Cover2 from "./../assets/Cover2.jpg";
import Cover3 from "./../assets/Cover3.jpg";
import Cover4 from "./../assets/Cover4.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, easing: "ease-in-sine" });
  });

  return (
    <div className="">
      <div className="w-full rounded-2xl overflow-hidden">
        <Carousel
          autoPlay={true}
          showThumbs={false}
          infiniteLoop={true}
          showStatus={false}
          interval={3000}
          swipeable={true}
        >
          <div className="w-full h-[400px] relative">
            <img className="w-full h-[500px] object-cover" src={Cover1} />
            <div className="absolute top-0 left-0 w-full h-full bg-custom-gradient opacity-50">
            
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl text-center">
                <h1 className="text-4xl text-white top-1/2">Welcome to Lingo Bingo!</h1>
            </div>
          </div>
          <div className="w-full h-[400px] ">
            <img className="w-full h-[500px] object-cover" src={Cover2} />
            <div className="absolute top-0 left-0 w-full h-full bg-custom-gradient opacity-60">
            
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl text-center">
                <h1 className="text-4xl text-white top-1/2">Start Your Learning Here with <br />Lingo Bingo</h1>
            </div>
          </div>
          <div className="w-full h-[400px] ">
            <img className="w-full h-[500px] object-cover" src={Cover3} />
            <div className="absolute top-0 left-0 w-full h-full bg-custom-gradient opacity-50">
            
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl text-center">
                <h1 className="text-4xl text-white top-1/2">Let's Play and Learn!</h1>
            </div>
          </div>
          <div className="w-full h-[400px] ">
            <img className="w-full h-[500px] object-cover" src={Cover4} />
            <div className="absolute top-0 left-0 w-full h-full bg-custom-gradient opacity-70">
            
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl text-center">
                <h1 className="text-4xl text-white top-1/2">Lingo Bingo – Where Every Word Counts!</h1>
            </div>
          </div>
        </Carousel>
      </div>

      <div className="container mx-auto">
        {/* About Us */}
        <div className="md:flex mt-10">
          <div
            data-aos="fade-right"
            className="w-1/2 flex flex-col items-start"
          >
            <img className="" src={AboutUsImg} alt="" />
          </div>
          <div data-aos="fade-left" className="w-1/2 flex flex-col items-end">
            <h2 className="text-primaryAccent text-right bg-buttonBgClr rounded-2xl px-4 py-2 inline-block">
              About Us
            </h2>
            <h1 className="text-bodyText mt-4 font-medium text-4xl">
              Welcome to{" "}
              <span className="text-primaryAccent">Lingo Bingo!</span>
            </h1>
            <p className="text-bodyText text-right w-3/4 mt-4">
              At Lingo Bingo, we believe that learning a new language should be
              fun, engaging, and accessible to everyone. Our mission is to
              simplify vocabulary building and help users improve their
              communication skills in a unique and interactive way.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <div
            data-aos="flip-left"
            className="text-center flex flex-col items-center"
          >
            <h2 className="text-primaryAccent bg-buttonBgClr rounded-2xl px-4 py-2">
              Success
            </h2>
            <p className="sm:3/4 md:w-1/2 text-center text-bodyText mt-4">
              Every day, our community grows stronger, as learners from around
              the world embrace new languages and break down communication
              barriers. Join us and be part of this incredible journey towards
              mastering a new language—one word at a time!
            </p>
          </div>
          <div
            data-aos="fade-zoom-in"
            className="md:flex justify-between mt-10"
          >
            <div className="flex flex-col items-center">
              <div className="flex">
                <CountUp className="text-5xl" end={300} duration={2} />
                <h2 className="text-5xl text-primaryAccent">+</h2>
              </div>
              <h2 className="text-2xl mt-2 font-medium">Active Users</h2>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex">
                <CountUp className="text-5xl" end={200} duration={2} />
                <h2 className="text-5xl text-primaryAccent">+</h2>
              </div>
              <h2 className="text-2xl mt-2 font-medium">Lessons</h2>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex">
                <CountUp className="text-5xl" end={225} duration={2} />
                <h2 className="text-5xl text-primaryAccent">+</h2>
              </div>
              <h2 className="text-2xl mt-2 font-medium">Vocubulary Library</h2>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex">
                <CountUp className="text-5xl" end={140} duration={2} />
                <h2 className="text-5xl text-primaryAccent">+</h2>
              </div>
              <h2 className="text-2xl mt-2 font-medium">Tutorials</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
