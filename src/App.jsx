import { useState, useEffect } from "react";
import QuizzBar from "./components/QuizzBar";
import ModalProvider from "./ModalContext";
import PropTypes from "prop-types";
import Maria from "./components/Maria";

import rodo from "./assets/Rodolf.png";
import lutin from "./assets/Lutins.png";
import gift from "./assets/gift.png";

const quizz = [
  {
    id: 1,
    image: "./assets/Rodolf.png",
    question: "Quel renne est célèbre pour avoir un nez rouge ?",
    choix: ["Dasher", "Prancer", "Rudolph", "Blitzen"],
    reponse: "Rudolph",
  },
  {
    id: 2,
    image: "./assets/Lutins.png",
    question:
      "Quel est le travail principal des lutins du Père Noël à l'atelier du Pôle Nord ?",
    choix: [
      "Cuisiner des biscuits",
      "Emballer des cadeaux",
      "S'occuper des rennes",
      "Chanter des chansons de Noël",
    ],
    reponse: "Emballer des cadeaux",
  },
  {
    id: 3,
    image: "./assets/gift.png",
    question:
      "Quelle fête est traditionnellement associée à l'échange de cadeaux pendant la période de Noël ?",
    choix: ["Hanoucca", "Halloween", "Noël", "Jour de l'An"],
    reponse: "Noël",
  },
];

//TODO  : Déplacer la logique depuis QuizzBar vers App.jsx
//TODO  : Modifier la props "Quizz" à envoyer au composant QuizzBar
//TODO  : Faire un map du tableau de choix dans PopupComponent

function App() {
  const [index, setIndex] = useState(null);
  const [filteredQuizz, setFilteredQuizz] = useState(null);

  const handleClick = (index) => setIndex(index);

  useEffect(() => {
    if (index) {
      setFilteredQuizz(quizz.find((q) => q.id === index));
    }
  }, [index]);
  return (
    <div className="min-h-screen w-full bg-[url('./assets/mapfond1.png')] bg-no-repeat bg-cover bg-center">
      <div>
        <div>
          {
            <>
              <button
                className="icon"
                type="button"
                onClick={() => {
                  handleClick(1);
                }}
              >
                <img src={rodo} alt="icon" />
              </button>

              <button
                className="icon"
                type="button"
                onClick={() => {
                  handleClick(2);
                }}
              >
                <img src={lutin} alt="icon" />
              </button>
              <button
                className="icon"
                type="button"
                onClick={() => {
                  handleClick(3);
                }}
              >
                <img src={gift} alt="icon" />
              </button>
            </>
          }
        </div>

        <Maria />
        <ModalProvider>
          <QuizzBar quizz={quizz} filteredQuizz={filteredQuizz} />
        </ModalProvider>
      </div>
    </div>
  );
}

QuizzBar.propTypes = {
  quizz: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  choix: PropTypes.string.isRequired,
  reponse: PropTypes.string.isRequired,
};

export default App;
