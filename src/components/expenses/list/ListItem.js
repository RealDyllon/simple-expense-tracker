import { Button, Card, Spacer, Text } from "@geist-ui/react";
import { Edit2, Power, Trash, Trash2 } from "@geist-ui/react-icons";
import React, { useState } from "react";
import EditModal from "../../modals/EditModal";
import DeleteModal from "../../modals/DeleteModal";

const ListItem = ({ expense, editExpense, removeExpense }) => {
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);

  const handleEdit = (editData) => {
    editExpense(expense.uuid, editData);
  };

  const handleDelete = () => {
    removeExpense(expense.uuid);
  };

  return (
    <>
      <Card shadow style={styles.card}>
        <Card.Content
          style={{
            padding: 12,
          }}
        >
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
              handleEdit={handleEdit}
            />
            <DeleteModal
              // expense={expense}
              isVisible={isDeleteModalVisible}
              setVisible={setDeleteModalVisible}
              handleDelete={handleDelete}
            />
          </div>
        </Card.Content>
      </Card>
      <Spacer y={1} />
    </>
  );
};

export default ListItem;

const styles = {
  card: {
    width: 400,
  },
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
