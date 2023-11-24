import QuizzBar from "./components/QuizzBar";
import ModalProvider from "./ModalContext";
import PropTypes from "prop-types";


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

function App() {
  return (
    <div className="h-screen w-full bg-[url('./assets/mapfond1.png')] bg-no-repeat bg-cover bg-center z-0">
      <div>
        <ModalProvider>
          <QuizzBar
            quizz={quizz}
            id={quizz.id}
            image={quizz.image}
            question={quizz.question}
            choix={quizz.choix}
            reponse={quizz.reponse}
          />
        </ModalProvider>
      </div>
    </div>
  );
}

QuizzBar.propTypes = {
  quizz: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  choix: PropTypes.string.isRequired,
  reponse: PropTypes.string.isRequired,
};

export default App;
