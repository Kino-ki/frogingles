import { useState } from "react";
import Popup from "reactjs-popup";
import PopUp from "./popup";
// import PropTypes from "prop-types";

function QuizzBar({ quizz }) {
  const [count, setCount] = useState(1);

  const handleClick = () => {
    setCount(count + 1);
  };

  return quizz.map((q) => (
    <div key={q.id} className="flex flex-col">
      <Popup
        trigger={
          <button onClick={handleClick}>
            <img src={q.image} alt="image" />
          </button>
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
  ));
}

// QuizzBar.propTypes = {
//   quizz: PropTypes.array({
//     image: PropTypes.string,
//     id: PropTypes.string,
//     choix: PropTypes.array.string,
//     question: PropTypes.string,
//     reponse: PropTypes.string,
//   }).isRequired,
// };

export default QuizzBar;
