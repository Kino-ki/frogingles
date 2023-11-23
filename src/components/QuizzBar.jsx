import Popup from "reactjs-popup";
import questions from "../questions.json";
import { useModal } from "../ModalContext";

function QuizzBar() {
  const { isModalOpen, setIsModalOpen, currentQuestion, setCurrentQuestion } =
    useModal();

  const handleClick = (data) => {
    setCurrentQuestion(data);
    setIsModalOpen(true);
  };

  return (
    <div>
      {questions.map((q, id) => (
        <Popup key={q.id} trigger={<button>bouton {id + 1}</button>}>
          <div>{q.question}</div>
          <div>{q.choix}</div>
          <button onClick={() => handleClick(q)}></button>
        </Popup>
      ))}
    </div>
  );
}

export default QuizzBar;
