import Popup from "reactjs-popup";
import PopUpComponent from "./PopupComponent";

import PropTypes from "prop-types";

function QuizzBar({ quizz }) {
  return (
    <div className="flex flex-col">
      <Popup trigger={<button id="triggerbutton"></button>}>
        {(close) => (
          <div>
            <PopUpComponent quizz={quizz}/>
            <a title="clase" onClick={close} >
              close
            </a>
          </div>
        )}
      </Popup>
    </div>
  );
}

// QuizzBar.propTypes = {
//   quizz: PropTypes.array.isRequired,
// };

export default QuizzBar;
