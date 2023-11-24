// import PropTypes from "prop-types";

function PopupComponent({ quizz }) {
  console.log(quizz);
  return (
    <div
      title="contenant"
      className="bg-red-800 flex flex-col w-96 h-96 rounded-3xl shadow-lg border-2 border-lime-900 text-white"
    >
      <div
        key={quizz.id}
        title="contenu"
        className="flex flex-col justify-center gap-20 m-10 mt-18"
      >
        <h2 title="question" className="font-bold text-3xl text-center ">
          {quizz.question}
        </h2>
        <div
          key={quizz.id}
          title="Réponses"
          className="grid grid-cols-2 gap-10 place-content-stretch text-xl"
        >
          {quizz.choix.map((q) => (
            <>
              <h3
                key={q.id}
                className=" hover:bg-green-800 text-center text-2xl rounded-xl py-3"
              >
                {q}
              </h3>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

// PopupComponent.propTypes = {
//   quizz: PropTypes.shape.isRequired,
// };

export default PopupComponent;
