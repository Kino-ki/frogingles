import { useState, useEffect } from "react";
import QuizzBar from "./components/QuizzBar";

import rodo from "./assets/Rodolf1.png";
import lutin from "./assets/Lutins1.png";
import gift from "./assets/gift1.png";
import logo from "./assets/frogingles3.jpg";
import gif from "./assets/it's-time-mariah-carey-mariah-carey-unlocked.gif"

const quizz = [
  {
    id: 1,
    image: "./assets/Rodolf1.png",
    question: "Quel renne est célèbre pour avoir un nez rouge ?",
    choix: ["Dasher", "Prancer", "Rudolph", "Blitzen"],
    reponse: "Rudolph",
  },
  {
    id: 2,
    image: "./assets/Lutins1.png",
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
    image: "./assets/gift1.png",
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

  const handleClick = (index) => {
    setIndex(index);
    const button = document.querySelector("#triggerbutton");
    button.click();
  };

  useEffect(() => {
    if (index) {
      setFilteredQuizz(quizz.find((q) => q.id === index));
    }
  }, [index]);

  return (
    <div className="min-h-screen w-full bg-[url('./assets/mapfond1.png')] bg-no-repeat bg-cover bg-center">
      <img src={logo} alt="logo" className="rounded-full" />
      <div>
        <div>
          <>
            <button className="rodo translate-x-88 translate-y-ry" type="button">
              <img
                src={rodo}
                alt="icon"
                onClick={() => {
                  handleClick(1);
                }}
              ></img>
            </button>
            <img src= {gif}  alt="gif" className="translate-x-gx translate-y-32 h-96 rounded-full shadow-2xl " />

            <button className="translate-x-80 -translate-y-96" type="button">
              <img
                src={lutin}
                alt="icon"
                onClick={() => {
                  handleClick(2);
                }}
              />
            </button>

            <button className="translate-y-20 translate-x-cx" type="button">
              <img
                src={gift}
                alt="icon"
                onClick={() => {
                  handleClick(3);
                }}
              />
            </button>
          </>
        </div>
        {filteredQuizz && <QuizzBar quizz={filteredQuizz} />}
      </div>
    </div>
  );
}

export default App;
