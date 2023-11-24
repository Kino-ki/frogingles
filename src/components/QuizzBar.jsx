import Popup from "reactjs-popup";
import PopUpComponent from "./PopupComponent";

function QuizzBar({ filteredQuizz }) {

  return (
    <div className="flex flex-col">
      <Popup
        trigger={filteredQuizz}>
            {filteredQuizz && <PopUpComponent quizz={filteredQuizz} />}
      </Popup>
    </div>
  );
}
export default QuizzBar;
