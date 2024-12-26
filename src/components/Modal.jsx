import React, { useContext } from "react";
import { ModalContext } from "./contexts/ModalContext";

function Modal() {
  const { isModalOpen, modalData, closeModal } = useContext(ModalContext);

  if (!isModalOpen) return null; // Don't render anything if the modal is closed

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-md w-1/3">
        <h2 className="text-xl font-bold mb-4">User Details</h2>
        <p><strong>Name:</strong> {modalData?.firstName} {modalData?.lastName}</p>
        <p><strong>Email:</strong> {modalData?.email}</p>
        <p><strong>Phone:</strong> {modalData?.phone}</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
