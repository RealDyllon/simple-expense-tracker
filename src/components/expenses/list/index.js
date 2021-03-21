import React from "react";
import EditModal from "../../modals/EditModal";
import ListItem from "./ListItem";

const ExpensesList = ({ expenses, editExpense, removeExpense }) => {
  return (
    <div style={styles.wrapper}>
      {expenses?.map((expense) => (
        <ListItem
          key={expense.uuid}
          expense={expense}
          editExpense={editExpense}
          removeExpense={removeExpense}
        />
      ))}
    </div>
  );
};

export default ExpensesList;

const styles = {
  wrapper: {
    maxWidth: 400,
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
  },
};
