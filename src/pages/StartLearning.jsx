import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import StartLearningBg from "./../assets/start-learning.svg";

const StartLearning = () => {
  const lessonDatas = useLoaderData();

  const lessons = [];
  lessonDatas.map((data) => {
    if (!lessons.includes(parseInt(data.lesson_no))) {
      lessons.push(parseInt(data.lesson_no));
    }
  });
  return (
    <div>
      <div className="py-12 bg-custom-gradient rounded-2xl">
        <h1 className="text-5xl font-bold text-center text-white">
          Your Vocabulary Journey <br /> Starts Here
        </h1>
        <p className=" text-center font-base font-light mt-6 text-primaryBg">
          "One language sets you in a corridor for life. Two languages open
          every door along the way." <br />
          <span className="font-semibold"> — Frank Smith</span>
        </p>
      </div>

      <div className="container mx-auto">
        <div className="my-6 text-primaryAccent">
          <h1>Lessons</h1>
        </div>
        <div className="grid grid-cols-4 gap-10">
          {lessons.map((lesson) => {
            return (
              <Link to={`/lessons/${lesson}`}>
                <div className="bg-primaryAccent rounded-2xl h-20 w-40 flex items-center justify-center">
                  {/* <div className="bg-primaryBg m-4 rounded-2xl overflow-hidden ">
                            <img className=" mx-auto p-4 h-40 object-cover " src={StartLearningBg} alt="" />
                        </div> */}
                  <h1 className="text-center text-white font-semibold text-2xl my-4">
                    Lesson : {lesson}
                  </h1>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="py-10 text-center bg-custom-gradient my-12 rounded-xl text-white">
          <h1>Tutorial</h1>
        </div>
        <div className="justify-center flex gap-6 mb-10">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/wDpsF90DoeI?si=Rpb3QYDWR7Ehglq4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/nuI4OgsJv_Q?si=ih8taXixQSiXpD6l"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="text-center mb-20">
        <Link to={"/tutorials"} className="px-4 bg-primaryAccent text-white rounded-xl py-2">View More</Link>
        </div>
        
      </div>
    </div>
  );
};

export default StartLearning;
