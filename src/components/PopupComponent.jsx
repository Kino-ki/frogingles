  import PropTypes from "prop-types";

function PopupComponent({ quizz }) {
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
          <>
            <h3
              // key={e.id}
              className=" hover:bg-green-800 text-center text-2xl rounded-xl py-3"
            >
              {/*
            
              MAP SUR LE TABLEAU DE CHOIX

           
              {e.choix[0]}
            </h3>
            <h3
              key={e.id}
              className=" hover:bg-green-800 text-center text-2xl rounded-xl py-3"
            >
              {e.choix[1]}
            </h3>
            <h3
              key={e.id}
              className=" hover:bg-green-800 text-center text-2xl rounded-xl py-3"
            >
              {e.choix[2]}
            </h3>
            <h3
              key={e.id}
              className=" hover:bg-green-800 text-center text-2xl rounded-xl py-3"
            >
              {e.choix[3]} */}
            </h3>
          </>
        </div>
      </div>
    </div>
  );
}

PopupComponent.propTypes = {
  quizz: PropTypes.string.isRequired,
};

export default PopupComponent;
