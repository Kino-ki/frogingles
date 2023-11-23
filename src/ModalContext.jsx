import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

const ModalContext = createContext();

export default function ModalProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);

  const modalContextValue = useMemo(
    () => ({
      isModalOpen,
      setIsModalOpen,
      currentQuestion,
      setCurrentQuestion,
    }),
    [isModalOpen, setIsModalOpen, currentQuestion, setCurrentQuestion]
  );

  return (
    <ModalContext.Provider value={modalContextValue}>
      {children}
    </ModalContext.Provider>
  );
}

export const useModal = () => useContext(ModalContext);

ModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
