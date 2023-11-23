import QuizzBar from "./components/QuizzBar";
import ModalProvider from "./ModalContext";

function App() {
  return (
    <div className="min-h-screen w-full bg-[url('./assets/mapfond1.png')] bg-no-repeat bg-cover bg-center">
      <div>
        <ModalProvider>
          <QuizzBar />
        </ModalProvider>
      </div>
    </div>
  );
}

export default App;
