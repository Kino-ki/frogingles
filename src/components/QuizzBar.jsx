import Popup from "reactjs-popup";
import PopUpComponent from "./PopupComponent";

import PropTypes from "prop-types";

function QuizzBar({ filteredQuizz }) {
  return (
    <div className="flex flex-col">
      <Popup
        trigger={
          <div>
            <button
              className="icon"
              type="button"
              onClick={() => handleClick()}
            >
              <img src={rodo} alt="icon" />
              {question}
            </button>

            <button
              className="icon"
              type="button"
              onClick={() => handleClick()}
            >
              <img src={lutin} alt="icon" />
              {question}
            </button>
            <button
              className="icon"
              type="button"
              onClick={() => handleClick()}
            >
              <img src={gift} alt="icon" />
              {question}
            </button>
          </div>
        }
      >
        {(close) => (
          <div>
            <PopUp />
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
