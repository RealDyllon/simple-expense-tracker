import React from "react";
import TotalPie from "./graphs/TotalPie";

const ExpensesViz = ({ expenses }) => {
  return (
    <div style={styles.wrapper}>
      <TotalPie expenses={expenses} />
    </div>
  );
};

export default ExpensesViz;

const styles = {
  wrapper: {
    flex: 1,
    display: "flex",
    alignItems: "flex-start",
  },
};
