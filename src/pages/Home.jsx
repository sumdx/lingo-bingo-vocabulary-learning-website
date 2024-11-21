import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import AboutUsImg from "./../assets/about-us.svg";
import CountUp from "react-countup";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { FaCheck } from "react-icons/fa";
import Head from "./../assets/head.svg"

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
            <div className="absolute top-0 left-0 w-full h-full bg-custom-gradient opacity-50"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl text-center">
              <h1 className="text-4xl text-white top-1/2">
                Welcome to Lingo Bingo!
              </h1>
            </div>
          </div>
          <div className="w-full h-[400px] ">
            <img className="w-full h-[500px] object-cover" src={Cover2} />
            <div className="absolute top-0 left-0 w-full h-full bg-custom-gradient opacity-60"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl text-center">
              <h1 className="text-4xl text-white top-1/2">
                Start Your Learning Here with <br />
                Lingo Bingo
              </h1>
            </div>
          </div>
          <div className="w-full h-[400px] ">
            <img className="w-full h-[500px] object-cover" src={Cover3} />
            <div className="absolute top-0 left-0 w-full h-full bg-custom-gradient opacity-50"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl text-center">
              <h1 className="text-4xl text-white top-1/2">
                Let's Play and Learn!
              </h1>
            </div>
          </div>
          <div className="w-full h-[400px] ">
            <img className="w-full h-[500px] object-cover" src={Cover4} />
            <div className="absolute top-0 left-0 w-full h-full bg-custom-gradient opacity-70"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl text-center">
              <h1 className="text-4xl text-white top-1/2">
                Lingo Bingo – Where Every Word Counts!
              </h1>
            </div>
          </div>
        </Carousel>
      </div>

      <div className="container mx-auto">
        {/* About Us */}
        <div className="md:flex mt-10 sm:mx-auto">
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

        <div className="mt-32">
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
            className="flex flex-col md:flex-row justify-between mt-10 gap-6"
          >
            <div className="flex flex-col items-center ">
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

        <div className="text-center mt-32">
          <h2 className="text-primaryAccent bg-buttonBgClr rounded-2xl px-4 py-2 inline-block">
            Pricing
          </h2>
          <h1 className="text-5xl font-medium mt-6">
            Simple, Flexible Pricing
          </h1>
          <p className="mt-4 font-light">
            We offer best discounts for students
          </p>
          <p className="mt-4 mb-6 font-light text-green-500">Save Upto 50%</p>

          <div className="flex sm:flex-col md:flex-row justify-evenly gap-10 mb-10">
            <div
              data-aos="fade-right"
              className="bg-primaryAccent text-white text-start p-10 rounded-xl md:w-[400px]"
            >
              <h3 className="font-semibold">Free</h3>
              <h3 className="font-light mt-2 mb-10">For Students</h3>
              <h1 className="text-5xl">$0</h1>
              <ul className="mt-10 ">
                <li className="flex items-center gap-2 mb-2">
                  <div className=" bg-white p-1 inline-block rounded-full">
                    <FaCheck className="text-primaryAccent text-xs" />
                  </div>{" "}
                  1 User
                </li>
                <li className="flex items-center gap-2 mb-2">
                  <div className=" bg-white p-1 inline-block rounded-full">
                    <FaCheck className="text-primaryAccent text-xs" />
                  </div>{" "}
                  Unlimited lesson
                </li>
                <li className="flex items-center gap-2 mb-2">
                  <div className=" bg-white p-1 inline-block rounded-full">
                    <FaCheck className="text-primaryAccent text-xs" />
                  </div>{" "}
                  24/7 Support
                </li>
              </ul>
            </div>
            <div>
              <div
                data-aos="fade-left"
                className="bg-white border border-gray-400 text-primaryAccent text-start p-10 rounded-xl md:w-[400px]"
              >
                <h3 className="font-semibold">Advanced</h3>
                <h3 className="font-light mt-2 mb-10">For Schools</h3>
                <h1 className="text-5xl">$70</h1>
                <ul className="mt-10 ">
                  <li className="flex items-center gap-2 mb-2">
                    <div className=" bg-primaryAccent p-1 inline-block rounded-full">
                      <FaCheck className=" text-white text-xs" />
                    </div>{" "}
                    Unlimited User
                  </li>
                  <li className="flex items-center gap-2 mb-2">
                    <div className=" bg-primaryAccent p-1 inline-block rounded-full">
                      <FaCheck className="text-white  text-xs" />
                    </div>{" "}
                    Unlimited lesson
                  </li>
                  <li className="flex items-center gap-2 mb-2">
                    <div className=" bg-primaryAccent p-1 inline-block rounded-full">
                      <FaCheck className="text-white  text-xs" />
                    </div>{" "}
                    24/7 Support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md flex p-10 overflow-hidden rounded-xl mt-32 mb-20">
          <div  data-aos="fade-right" className="w-1/2">
            <h2 className="text-primaryAccent bg-buttonBgClr rounded-2xl px-4 py-2 inline-block">
              Testimonial
            </h2>
            <h1 className="mt-6 font-semibold text-xl">What people say <br /> about us</h1>
          </div>
          <div className="flex flex-col gap-4">
            <div data-aos="fade-left" className="flex shadow-md items-center gap-2 bg-gray-50 rounded-2xl p-4">
              <img className="h-12" src={Head} alt="" />
              <div>
                <h1 className="text-2xl">Tanjim Hasan Sohan</h1>
                <p className="text-sm">Best support I got from them</p>
              </div>
            </div>
            <div  data-aos="fade-left" className="flex shadow-md items-center gap-2 bg-gray-50 rounded-2xl p-4">
              <img className="h-12" src={Head} alt="" />
              <div>
                <h1 className="text-2xl">Tanjim Hasan Sohan</h1>
                <p className="text-sm">Best support I got from them</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
