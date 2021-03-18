import { Modal } from "@geist-ui/react";
import React from "react";

const EditModal = ({ isVisible, setVisible }) => {
  const closeHandler = () => {
    setVisible(false);
  };

  return (
    <Modal open={isVisible} onClose={closeHandler}>
      <Modal.Title>Delete?</Modal.Title>
      <Modal.Subtitle>
        Are you sure you want to delete this expense?
      </Modal.Subtitle>
      <Modal.Content>
        <p>Some content contained within the modal.</p>
      </Modal.Content>
      <Modal.Action passive onClick={closeHandler}>
        Cancel
      </Modal.Action>
      <Modal.Action>Delete</Modal.Action>
    </Modal>
  );
};

export default EditModal;
