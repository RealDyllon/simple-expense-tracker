import { useEffect, useState } from "react";
import {
  writeStorage as writeLocalStorage,
  useLocalStorage, // read from local storage
} from "@rehooks/local-storage";
import { v4 as uuidv4 } from "uuid";

import "./App.css";

import Header from "./components/header";
import AddExpenseModal from "./components/modals/addExpense";
import Expenses from "./components/expenses/main";

function App() {
  const [initExpensesLocalStorage] = useLocalStorage("expenses", []);

  const [isAddExpModalVisible, setAddExpModalVisible] = useState("");

  const [expenses, setExpenses] = useState(initExpensesLocalStorage);

  const addExpense = (expense) => {
    // update state and localstorage
    const newExpenses = [...expenses, { ...expense, uuid: uuidv4() }];
    setExpenses(newExpenses);
    // writeLocalStorage("expenses", JSON.stringify(newExpenses));
  };

  const removeExpense = (uuidToBeRemoved) => {
    // update state and localstorage
    const newExpenses = expenses.filter(
      (item) => item.uuid !== uuidToBeRemoved
    );
    setExpenses(newExpenses);
    // writeLocalStorage("expenses", JSON.stringify(newExpenses));
  };

  const editExpense = (uuid, newData) => {
    console.log("uuid", uuid);

    const indexOfChange = expenses.findIndex(
      (element) => element.uuid === uuid
    );

    console.log("indexOfChange", indexOfChange);

    if (indexOfChange === -1) return;

    const currentElement = expenses[indexOfChange];

    console.log("currentElement", currentElement);

    const newExpenses = expenses
      .slice(0, indexOfChange)
      .concat({
        ...currentElement,
        ...newData,
      })
      .concat(expenses.slice(indexOfChange + 1));

    console.log("expenses", expenses);
    console.log("newExpenses", newExpenses);

    setExpenses(newExpenses);
  };

  useEffect(() => {
    writeLocalStorage("expenses", JSON.stringify(expenses));
  }, [expenses]);

  return (
    <div className="App">
      <Header setAddExpModalVisible={setAddExpModalVisible} />
      <AddExpenseModal
        isVisible={isAddExpModalVisible}
        setVisible={setAddExpModalVisible}
        addExpense={addExpense}
      />
      <Expenses
        expenses={expenses}
        editExpense={editExpense}
        removeExpense={removeExpense}
      />
    </div>
  );
}

export default App;
