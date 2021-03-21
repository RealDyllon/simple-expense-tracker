import React from "react";

import ExpensesList from "../list";
import ExpensesViz from "../visualizations";

const Expenses = ({ expenses, editExpense, removeExpense }) => {
  return (
    <div style={styles.wrapper}>
      <ExpensesList
        expenses={expenses}
        editExpense={editExpense}
        removeExpense={removeExpense}
      />
      <ExpensesViz />
    </div>
  );
};

export default Expenses;

const styles = {
  wrapper: {
    flex: 1,
    display: "flex",
    flexDirection: "row", // if mobile this should be column
  },
};
