// import PropTypes from "prop-types";
import { useState } from "react";
import MC from "../assets/MC.png";

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
        {selectedAnswer && !selectedAnswer.isCorrect && (
          <img
            src={MC}
            alt="Wrong Answer"
            className="mt-4 mx-auto"
          />
        )}
      </div>
    </div>
  );
}

// PopupComponent.propTypes = {
//   quizz: PropTypes.shape.isRequired,
// };

export default PopupComponent;
