import { useState } from "react";
import Popup from "reactjs-popup";
import PopUpComponent from "./popup";
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
    <div>
      <Popup
        trigger={
            <button
              className="translate-y-96"
              type="button"
              onClick={() => handleClick()}
            >
              <img className=" " src={rodo} alt="icon" />
            </button>}>
            <PopUpComponent/>;
        </Popup>
      <Popup
        trigger={
            <button
              className="translate-y-96"
              type="button"
              onClick={() => handleClick()}
            >
              <img className=" " src={lutin} alt="icon" />
            </button>}>
            <PopUpComponent/>;
        </Popup>
      <Popup
        trigger={
            <button
              className="translate-y-96"
              type="button"
              onClick={() => handleClick()}
            >
              <img className=" " src={gift} alt="icon" />
            </button>}>
            <PopUpComponent/>;
        </Popup>
    </div>
    )
  }


QuizzBar.propTypes = {
  question: PropTypes.string.isRequired,
};

export default QuizzBar;
