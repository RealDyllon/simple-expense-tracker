import { Text } from "@geist-ui/react";
import React from "react";
import EditModal from "../../modals/EditModal";
import ListItem from "./ListItem";

const ExpensesList = ({ expenses, editExpense, removeExpense }) => {
  return (
    <div style={styles.wrapper}>
      <Text h5>Your Expenses</Text>
      <div style={styles.contentContainer}>
        {expenses?.map((expense) => (
          <ListItem
            key={expense.uuid}
            expense={expense}
            editExpense={editExpense}
            removeExpense={removeExpense}
          />
        ))}
      </div>
    </div>
  );
};

export default ExpensesList;

const styles = {
  wrapper: {
    // maxWidth: 400,
    // maxHeight: 300,
    // flexGrow: 0,

    // height: "100%",

    // maxHeight: "100%",
    // backgroundColor: "red",
    // overflowY: "clip",

    // flexGrow: 1,
    display: "flex",
    flexDirection: "column",
  },
  contentContainer: {
    paddingLeft: 12,
    paddingRight: 12,
    // height: 400,
    flexGrow: 1,
    display: "flex",
    // overflowY: "scroll",
    // maxHeight: "calc(100%-12px)",

    flexDirection: "column",
    overflowY: "auto",
    paddingBottom: 4,
  },
};
