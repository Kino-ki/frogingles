import Popup from "reactjs-popup";
import PopUpComponent from "./PopupComponent";

import PropTypes from "prop-types";

function QuizzBar({ filteredQuizz }) {
  return (
    <div className="flex flex-col">
      <Popup trigger={<button>quizz</button>}>
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

QuizzBar.propTypes = {
  filteredQuizz: PropTypes.array.isRequired,
};

export default QuizzBar;
