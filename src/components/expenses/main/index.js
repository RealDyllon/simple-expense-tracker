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
      <ExpensesViz expenses={expenses} />
    </div>
  );
};

export default Expenses;

const styles = {
  wrapper: {
    flex: 1,
    display: "flex",
    flexDirection: "row", // if mobile this should be column

    overflow: "hidden",
    maxHeight: "calc(100% - 56px)",
  },
};
