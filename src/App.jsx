import QuizzBar from "./components/QuizzBar";
import ModalProvider from "./ModalContext";

function App() {
  return (
    <div className="App">
      <ModalProvider>
        <QuizzBar />
      </ModalProvider>
    </div>
  );
}

export default App;
