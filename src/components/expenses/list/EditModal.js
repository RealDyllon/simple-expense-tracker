import { Modal } from "@geist-ui/react";
import React from "react";

const EditModal = ({ isVisible, setVisible }) => {
  const closeHandler = () => {
    setVisible(false);
  };

  return (
    <Modal open={isVisible} onClose={closeHandler}>
      <Modal.Title>Modal</Modal.Title>
      <Modal.Subtitle>This is a modal</Modal.Subtitle>
      <Modal.Content>
        <p>Some content contained within the modal.</p>
      </Modal.Content>
      <Modal.Action passive onClick={closeHandler}>
        Cancel
      </Modal.Action>
      <Modal.Action>Submit</Modal.Action>
    </Modal>
  );
};

export default EditModal;
