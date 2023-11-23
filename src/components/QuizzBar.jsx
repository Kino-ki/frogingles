
import { useState } from "react";
import Popup from "reactjs-popup";
import PopUp from "./popup";
import rodo from "../assets/Rodolf.png";
import lutin from "../assets/Lutins.png";
import gift from "../assets/gift.png";

import PropTypes from "prop-types";

function QuizzBar({ question }) {
  const [count, setCount] = useState(1);

  const handleClick = () => {
    setCount(count + 1);
  };

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
  question: PropTypes.string.isRequired,
};

export default QuizzBar;

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
  

 quizz.forEach((element) => console.info(element.question))

  return (
    <div>
            <Popup trigger= {<button onClick= {handleClick} >BOUTONS </button> } >
        {close => (
          <div>
            <PopUp/>
            <a className="bg-black" title="clase" onClick={close}>
              close
            </a>
          </div>
        )}
      </Popup >
      <Popup trigger= {<button onClick= {handleClick} >BOUTONS </button> } >
        {close => (
          <div>
            <PopUp/>
            <a className="bg-black" title="clase" onClick={close}>
              close
            </a>
          </div>
        )}
      </Popup >
      <Popup trigger= {<button onClick= {handleClick} >BOUTONS </button> } >
        {close => (
          <div>
            <PopUp/>
            <a className="bg-black" title="clase" onClick={close}>
              close
            </a>
          </div>
        )}
      </Popup >

    </div>


  );
}
export default QuizzBar;