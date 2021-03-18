import React from "react";

import ExpensesList from "../list";
import ExpensesViz from "../visualizations";

const Expenses = ({ expenses, editExpenses, removeExpenses }) => {
  return (
    <div style={styles.wrapper}>
      <ExpensesList
        expenses={expenses}
        editExpenses={editExpenses}
        removeExpenses={removeExpenses}
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
