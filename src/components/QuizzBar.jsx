import Popup from "reactjs-popup";
import PopUpComponent from "./PopupComponent";

function QuizzBar({ quizz }) {

  return (
    <div className="flex flex-col">
      <Popup
        trigger={
          
        }
      >
        {(close) => (
          <div>
            {filteredQuizz && <PopUpComponent quizz={filteredQuizz} />}
            <a title="clase" onClick={close}>
              close
            </a>
          </div>
        )}
      </Popup>
    </div>
  );
}
export default QuizzBar;
