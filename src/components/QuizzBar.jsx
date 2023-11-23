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