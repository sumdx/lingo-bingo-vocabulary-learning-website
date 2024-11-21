import React from "react";
import "./../Css/Lesson.css";

const Lesson = ({ word }) => {
    // console.log(word)
    const speakWord = new SpeechSynthesisUtterance(word.word)
    speakWord.lang = 'ja-JP'
    const speak =()=>window.speechSynthesis.speak(speakWord)
  return (
    <div>
        <div
      onClick={speak}
      className={`${word.difficulty} text-center p-5 rounded-2xl flex flex-col justify-between`}
    >
      <h1 className="font-bold text-xl text-subheading">{word.word}</h1>
      <h1 className="mb-3 text-heading font-normal text-lg">
        ({word.pronunciation})
      </h1>
      <h1 className="font-light text-sm">Meaning : {word.meaning}</h1>
      <h1 className="font-light text-sm">
        Parts of Speech : {word.part_of_speech}
      </h1>
      <button
        onClick={() => document.getElementById(`my_modal_${word.id}`).showModal()}
        className={`${word.difficulty}-btn font-normal text-lg bg-stone-300 px-6 rounded-full py-1 mt-3`}
      >
        When To say
      </button>

      
    </div>
    <div>
      <dialog id={`my_modal_${word.id}`} className="modal">
        {
            console.log(word)
        }
        <div
          className={`${word.difficulty} gap-2 modal-box flex flex-col justify-center items-center text-center`}
        >
          <h1 className="font-bold text-xl text-subheading">{word.word}</h1>
          <h1 className="mb-3 text-heading font-normal text-lg">
            ({word.pronunciation})
          </h1>
          <h1 className="font-light text-sm"><span className="font-semibold">Meaning :</span> <br />{word.meaning}</h1>
          <h1 className="font-light text-sm">
          <span className="font-semibold"> When to Say </span>: <br /> {word.when_to_say}
          </h1>
          <h1 className="font-light text-sm">
          <span className="font-semibold"> Example :</span> <br/> {word.example}
          </h1>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                className={`${word.difficulty}-btn px-6 py-1 rounded-full`}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
    </div>
    
  );
};

export default Lesson;
