import React from "react";
import { useLoaderData } from "react-router-dom";
import StartLearningBg from "./../assets/start-learning.svg";


const StartLearning = () => {
    const lessonDatas = useLoaderData();
    
    const lessons = [];
    lessonDatas.map((data) =>{
        if(!lessons.includes(parseInt(data.lesson_no))){
            lessons.push(parseInt(data.lesson_no));
        }
    })
  return (
    <div>
      <div className="py-12 bg-custom-gradient rounded-2xl">
        <h1  className="text-5xl font-bold text-center text-white">
          Your Vocabulary Journey <br /> Starts Here
        </h1>
        <p className=" text-center font-base font-light mt-6 text-primaryBg">
          "One language sets you in a corridor for life. Two languages open
          every door along the way." <br /><span className="font-semibold"> — Frank Smith</span>
        </p>
      </div>

      <div className="container mx-auto">
        <div>
            <h1>Lessons</h1>
        </div>
        <div className="grid grid-cols-4 gap-10">
            {
                lessons.map(lesson =>{
                    return <div className="bg-primaryAccent rounded-2xl">
                        <div className="bg-primaryBg m-4 rounded-2xl overflow-hidden ">
                            <img className=" mx-auto p-4 h-40 object-cover " src={StartLearningBg} alt="" />
                        </div>
                        <h1 className="text-center text-white font-semibold text-2xl my-4">Lesson : {lesson}</h1>
                    </div>
                })
            }
        </div>
      </div>
    </div>
  );
};

export default StartLearning;
