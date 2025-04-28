import React, { createContext, useState, useCallback } from "react";

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;