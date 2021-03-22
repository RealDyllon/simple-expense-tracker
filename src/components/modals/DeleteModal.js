import { Modal } from "@geist-ui/react";
import React from "react";

const DeleteModal = ({ isVisible, setVisible, handleDelete }) => {
  const closeHandler = () => {
    setVisible(false);
  };

  return (
    <Modal open={isVisible} onClose={closeHandler}>
      <Modal.Title>Delete?</Modal.Title>
      <Modal.Subtitle>
        Are you sure you want to delete this expense?
      </Modal.Subtitle>
      <Modal.Content></Modal.Content>
      <Modal.Action passive onClick={closeHandler}>
        Cancel
      </Modal.Action>
      <Modal.Action onClick={handleDelete}>Delete</Modal.Action>
    </Modal>
  );
};

export default DeleteModal;
