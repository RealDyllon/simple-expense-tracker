import React from "react";
import EditModal from "./EditModal";
import ListItem from "./ListItem";

const ExpensesList = ({ expenses, editExpenses, removeExpenses }) => {
  return (
    <div style={styles.wrapper}>
      {expenses?.map((expense) => (
        <ListItem
          key={expense.uuid}
          expense={expense}
          editExpenses={editExpenses}
          removeExpenses={removeExpenses}
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
