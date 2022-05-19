import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditind, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData /*my name*/) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditind && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}

      {isEditind && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler} //this function stop editing handler function 
        ></ExpenseForm>
      )}
    </div>
  );
};

export default NewExpense;
