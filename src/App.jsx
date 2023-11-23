import QuizzBar from "./components/QuizzBar";
import ModalProvider from "./ModalContext";

const quizz = [
  {
    id:1,
    question: "Quel renne est célèbre pour avoir un nez rouge ?",
    choix: ["Dasher", "Prancer", "Rudolph", "Blitzen"],
    reponse: "Rudolph"
  },
  {
    id:2,
    question: "Quel est le travail principal des lutins du Père Noël à l'atelier du Pôle Nord ?",
    choix: [
      "Cuisiner des biscuits",
      "Emballer des cadeaux",
      "S'occuper des rennes",
      "Chanter des chansons de Noël"
    ],
    reponse: "Emballer des cadeaux"
  },
  {
    id:3,
    question: "Quelle fête est traditionnellement associée à l'échange de cadeaux pendant la période de Noël ?",
    choix: ["Hanoucca", "Halloween", "Noël", "Jour de l'An"],
    reponse: "Noël"
  }
]


function App() {
  return (
    <div title="App">
    <div className="">
      <ModalProvider>
        <QuizzBar quizz={quizz} id={quizz.id} question={quizz.question} choix={quizz.choix} reponse={quizz.reponse} />
      </ModalProvider>
    </div>

    </div>
  );
}

export default App;
