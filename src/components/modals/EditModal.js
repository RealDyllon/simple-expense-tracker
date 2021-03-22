import { Modal } from "@geist-ui/react";
import React, { useState } from "react";
import ExpenseModalContent from "./expense";

const EditModal = ({ expense, isVisible, setVisible, handleEdit }) => {
  const closeHandler = () => {
    setVisible(false);
  };

  const [newName, setNewName] = useState(expense?.name || "");
  const [newCost, setNewCost] = useState(expense?.cost || "");

  const handleChangeName = (e) => {
    // todo: prevent illegal characters here
    setNewName(e.target.value);
  };

  const handleChangeCost = (e) => {
    // todo: ensure only 2dp float is allowed
    setNewCost(parseFloat(e.target.value));
  };

  const modalEditHandler = () => {
    handleEdit({
      name: newName,
      cost: newCost,
    });
    closeHandler();
  };

  return (
    <Modal open={isVisible} onClose={closeHandler}>
      <Modal.Title>Edit Expense</Modal.Title>

      <ExpenseModalContent
        name={newName}
        cost={newCost}
        handleChangeName={handleChangeName}
        handleChangeCost={handleChangeCost}
      />
      <Modal.Action passive onClick={closeHandler}>
        Cancel
      </Modal.Action>
      <Modal.Action onClick={modalEditHandler}>Submit</Modal.Action>
    </Modal>
  );
};

export default EditModal;
