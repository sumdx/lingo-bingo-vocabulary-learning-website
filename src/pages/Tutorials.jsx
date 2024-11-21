import React from "react";
import { Link } from "react-router-dom";

const Tutorials = () => {
  return (
    <div>
      <div className="py-12 bg-custom-gradient rounded-2xl">
        <h1 className="text-5xl font-bold text-center text-white">
          Tutorials <br />
          Dive Into New Words
        </h1>
        <p className=" text-center font-base font-light mt-6 text-primaryBg">
          "To learn a language is to have one more window from which to look at
          the world."
          <br />
          <span className="font-semibold"> — Chinese Proverb</span>
        </p>
      </div>
      <div className=" mt-32 grid md:grid-cols-3 gap-6 container mx-auto">
        <iframe
          width="400"
          height="400"
          src="https://www.youtube.com/embed/s6DKRgtVLGA?autoplay=1&mute=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <iframe
           width="400"
          height="400"
          src="https://www.youtube.com/embed/z4qh8BVrb3w?autoplay=1&mute=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <iframe
           width="400"
          height="400"
          src="https://www.youtube.com/embed/HwCVV1773zg?autoplay=1&mute=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <iframe
           width="400"
          height="400"
          src="https://www.youtube.com/embed/29wmQnLYSiA?autoplay=1&mute=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <iframe
           width="400"
          height="400"
          src="https://www.youtube.com/embed/ce9CkV2pwVM?autoplay=1&mute=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <iframe
           width="400"
          height="400"
          src="https://www.youtube.com/embed/I-yqZ-vKaFo?autoplay=1&mute=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div className="text-center my-16">
      <Link to={"/start-learning"} className="px-4 bg-primaryAccent text-white rounded-xl py-2">Learn Vocabularies</Link>
      </div>
     
    </div>
  );
};

export default Tutorials;
