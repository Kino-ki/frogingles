import questions from "../questions.json"
import { useModal } from "../ModalContext";
import { useState } from "react";
import Popup from "reactjs-popup";
import PopUp from "./popup";



function QuizzBar({quizz, id, choix, question, reponse}  ) {

  const [count, setCount] = useState(1);

  const handleClick = () => {
    setCount(count+1)

  }

  return (
      quizz.map((q)=>(
    <div key={q.id}  className="flex flex-col">
      <Popup trigger= {<button onClick= {handleClick} > BOUTON </button>} >
        {close => (
          <div>
            <PopUp/>
            <a title="clase" onClick={close}>
              close
            </a>
          </div>
        )}
      </Popup >

    </div>

      ) )
  )
}

export default QuizzBar;

  // const { isModalOpen, setIsModalOpen, currentQuestion, setCurrentQuestion } =
  //   useModal();

  // const handleClick = (data) => {
  //   setCurrentQuestion(data);
  //   setIsModalOpen(true);
  // };

  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  // };

  // return (
  //   <div>
  //     {questions.map((q, index) => (
  //       <button key={index} onClick={() => handleClick(q)}>
  //         bouton {index + 1}
  //       </button>
  //     ))}
  //     {isModalOpen && (
  //       <div>
  //         <PopUp/>
  //       </div>
  //     )}
  //   </div>