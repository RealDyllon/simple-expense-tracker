import { Input, Modal, Spacer } from "@geist-ui/react";
import React, { useState } from "react";
import ExpenseModalContent from "../expense";

const AddExpenseModal = ({ isVisible, setVisible, addExpense }) => {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const closeHandler = () => {
    setVisible(false);
  };

  const addHandler = () => {
    addExpense({
      name,
      cost,
      date: Date.now(),
    });

    closeHandler();
  };

  const handleChangeName = (e) => {
    // todo: prevent illegal characters here
    setName(e.target.value);
  };

  const handleChangeCost = (e) => {
    // todo: ensure only 2dp float is allowed
    setCost(e.target.value);
  };

  return (
    <Modal open={isVisible} onClose={closeHandler}>
      <Modal.Title>Add Expense</Modal.Title>
      {/* <Modal.Subtitle>This is a modal</Modal.Subtitle> */}
      <ExpenseModalContent
        handleChangeName={handleChangeName}
        handleChangeCost={handleChangeCost}
      />
      <Modal.Action passive onClick={closeHandler}>
        Cancel
      </Modal.Action>
      <Modal.Action onClick={addHandler}>Add</Modal.Action>
    </Modal>
  );
};

export default AddExpenseModal;
