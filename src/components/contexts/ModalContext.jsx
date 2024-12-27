import React, { createContext, useState } from "react";
import { ThemeProvider } from "./theme";
// Create Context
export const ModalContext = createContext();

// Create Provider
export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const openModal = (data) => {
    setModalData(data); // Set data to display in the modal
    setIsModalOpen(true); // Open modal
  };

  const closeModal = () => {
    setModalData(null); // Clear modal data
    setIsModalOpen(false); // Close modal
  };

  return (
      <ModalContext.Provider
        value={{ isModalOpen, modalData, openModal, closeModal }}
      >
        {children}
      </ModalContext.Provider>
  );
};
