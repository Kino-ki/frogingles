import questions from "../questions.json"
import { useModal } from "../ModalContext";

function QuizzBar() {
  const { isModalOpen, setIsModalOpen, currentQuestion, setCurrentQuestion } =
    useModal();

  const handleClick = (data) => {
    setCurrentQuestion(data);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {questions.map((q, index) => (
        <button key={index} onClick={() => handleClick(q)}>
          bouton {index + 1}
        </button>
      ))}
      {isModalOpen && (
        <div>
          <button onClick={handleCloseModal}>Fermer</button>
        </div>
      )}
    </div>
  );
}

export default QuizzBar;
