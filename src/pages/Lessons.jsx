import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Lesson from "../components/Lesson";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import ReactPlayer from 'react-player'

const Lessons = () => {
  const { lessonNumber } = useParams();
  const lessonDatas = useLoaderData();

  return (
    <div>
      <div className="py-12 bg-custom-gradient rounded-2xl">
        <h1 className="text-5xl font-bold text-center text-white">
          Lesson {lessonNumber} : <br />
          Dive Into New Words
        </h1>
        <p className=" text-center font-base font-light mt-6 text-primaryBg">
          "To learn a language is to have one more window from which to look at
          the world."
          <br />
          <span className="font-semibold"> — Chinese Proverb</span>
        </p>
      </div>
      <div className="container mx-auto flex justify-between mt-4 items-center">
        {parseInt(lessonNumber) > 1 ? (
          <Link to={`/lessons/${parseInt(lessonNumber) - 1}`}>
            <div className="flex items-center gap-2 bg-primaryAccent px-4 rounded-xl text-white py-2">
              <FaArrowLeft />
              <h2>Previous Lesson</h2>
            </div>
          </Link>
        ) : (
          <Link>
            <div className="flex opacity-30 items-center gap-2 bg-primaryAccent px-4 rounded-xl text-white py-2">
              <FaArrowLeft />
              <h2>Previous Lesson</h2>
            </div>
          </Link>
        )}

        <h1>Lessons</h1>
        {parseInt(lessonNumber) < 10 ? (
          <Link to={`/lessons/${parseInt(lessonNumber) + 1}`}>
            <div className="flex items-center gap-2 bg-primaryAccent px-4 rounded-xl text-white py-2">
              <h2>Next Lesson</h2>
              <FaArrowRight />
            </div>
          </Link>
        ) : (
          <Link>
            <div className="opacity-30 flex items-center gap-2 bg-primaryAccent px-4 rounded-xl text-white py-2">
              <h2>Next Lesson</h2>
              <FaArrowRight />
            </div>
          </Link>
        )}
      </div>
      <div className="mt-6 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10 container mx-auto">
        {lessonDatas.map((word) => {
          if (parseInt(word.lesson_no) === parseInt(lessonNumber)) {
            return <Lesson word={word}></Lesson>;
          }
        })}
      </div>

      <div className="container mx-auto">
        <div className="w-full bg-custom-gradient text-center h-20 items-center flex justify-center">
          <p className="text-white">Tutorial</p>
        </div>
        <div className="flex justify-around p-4 rounded-2xl">

        <ReactPlayer
        light={true}
        playing={true}
         url={'https://www.youtube.com/embed/wDpsF90DoeI?si=Rpb3QYDWR7Ehglq4'}
         />

        </div>
        <Link to={"/tutorials"}><a className="btn bg-primaryAccent hover:bg-buttonHover text-white">View More</a> </Link>
        
      </div>
    </div>
  );
};

export default Lessons;
