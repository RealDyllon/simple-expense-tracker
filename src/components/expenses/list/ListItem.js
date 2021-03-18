import { Button, Spacer, Text } from "@geist-ui/react";
import { Edit2, Power, Trash, Trash2 } from "@geist-ui/react-icons";
import React, { useState } from "react";
import EditModal from "./EditModal";

const ListItem = ({ expense, editExpenses, removeExpenses }) => {
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);

  // todo:
  // const handleEdit = () => {
  //   editExpenses(expense.uuid, {})
  // };

  const handleDelete = () => {
    removeExpenses(expense.uuid);
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.textContent}>
        <Text>{expense.name}</Text>
        <Spacer x={1} />
        <Text b> $ {expense.cost}</Text>
      </div>
      <Button
        iconRight={<Edit2 />}
        auto
        size="small"
        type="success"
        ghost
        style={styles.buttonStyle}
        onClick={() => setEditModalVisible(true)}
      />
      <Button
        iconRight={<Trash2 />}
        auto
        size="small"
        type="error"
        ghost
        style={styles.buttonStyle}
        onClick={() => setDeleteModalVisible(true)}
      />
      <EditModal
        expense={expense}
        isVisible={isEditModalVisible}
        setVisible={setEditModalVisible}
      />
    </div>
  );
};

export default ListItem;

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 16,
    paddingRight: 16,
  },
  textContent: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  buttonStyle: {
    marginRight: 8,
  },
};
