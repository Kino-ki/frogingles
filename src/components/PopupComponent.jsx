// import PropTypes from "prop-types";
import { useState } from "react";
import gif from "../assets/it's-time-mariah-carey-mariah-carey-unlocked.gif";
import musique from "../assets/all-i-want-for-christmas-is-you.mp3"

function PopupComponent({ quizz, reponse }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerClick = (answer) => {
    const isCorrect = answer === quizz.reponse;
    setSelectedAnswer({ answer, isCorrect });
  };


  console.log(quizz);
  return (
    <div
      title="contenant"
      className="bg-red-800 flex flex-col w-5/12 rounded-3xl shadow-lg border-2 border-lime-900 text-white"
    >
      <div
        key={quizz.id}
        title="contenu"
        className="flex flex-col justify-center gap-20 m-10 mt-18 "
      >
        <h2 title="question" className="font-bold text-3xl text-center flex-wrap ">
          {quizz.question}
        </h2>
        <div
          key={quizz.id}
          title="Réponses"
          className="grid grid-cols-2 gap-10 place-content-stretch text-xl"
        >
          {quizz.choix.map((q) => (
            <h3
              key={q.id}
              className={`hover:bg-green-800 text-center text-2xl rounded-xl py-3 ${
                selectedAnswer && q === quizz.reponse
                  ? "bg-blue-500"
                  : selectedAnswer && q === selectedAnswer.answer
                  ? "bg-black" 
                  : ""
              }`}
              onClick={() => handleAnswerClick(q)}
            >
              {q}
            </h3>
          ))}
        </div>
      </div>
      {selectedAnswer && !selectedAnswer.isCorrect && (
        <>
        <img
          src={gif}
          alt="Wrong Answer"
          className="rounded-full"
        />
        <audio autoPlay src={musique} />
        </>
        )}
    </div>
  );
}

// PopupComponent.propTypes = {
//   quizz: PropTypes.shape.isRequired,
// };

export default PopupComponent;
