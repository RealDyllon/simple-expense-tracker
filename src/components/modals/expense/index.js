import { Input, Modal, Spacer } from "@geist-ui/react";
import React from "react";

const ExpenseModalContent = ({
  name,
  cost,
  handleChangeName,
  handleChangeCost,
}) => {
  return (
    <Modal.Content>
      {/* <p>Some content contained within the modal.</p> */}

      <Input
        label="Name"
        placeholder="Big Mac"
        width="100%"
        onChange={handleChangeName}
        value={name}
      />
      <Spacer y={0.5} />
      <Input
        label="Cost ($)"
        placeholder="123.00"
        width="100%"
        onChange={handleChangeCost}
        value={cost}
      />
    </Modal.Content>
  );
};

export default ExpenseModalContent;
