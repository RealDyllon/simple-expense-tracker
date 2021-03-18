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
    const newExpenses = expenses
      .filter((expense) => expense.uuid !== uuid)
      .concat({
        uuid,
        ...newData,
      });
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
