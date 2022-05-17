import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enterdTitle, setEnteredTitle] = useState(""); // [names, function for update]
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [userInput, setUsetInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: ""
  // });

  const titleChangeHandler = (event) => {
    //document.getElementById("").addEventListener("click", (event) => {}) // defualt JavaScript behavior you get in the browser when you listen to events.
    //console.log(event.target.value); // we can see the value from user in value field in developer tools.

    setEnteredTitle(event.target.value);
    // setUsetInput({
    //     ...userInput,
    //     enteredTitle: event.target.value,
    // });

    //Another option:

    //     setUsetInput((pervState) => {
    //         return { ...pervState, enteredTitle: event.targer.value };
    //     });
    // };
  };

  const amountChangedHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUsetInput({
    //     ...userInput,
    //     enteredAmount: event.target.value,
    // });

    //Another option:

    // setUsetInput((pervState) => {
    //     return { ...pervState, enteredAmount: event.targer.value };
    // });
  };

  const dateChangedHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUsetInput({
    //     ...userInput,
    //     enteredDate: event.target.value,
    // });

    //Another option:

    // setUsetInput((pervState) => {
    //     return { ...pervState, enteredDate: event.targer.value };
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault(); // not refresh the browser

    const expenseData = {
      title: enterdTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>

      <div className="new-expense__controls">

        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enterdTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min={0.01}
            step={0.01}
            value={enteredAmount}
            onChange={amountChangedHandler}
          ></input>
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangedHandler}
          ></input>
        </div>

      </div>

      <div className="new-expense__actions">

        <button type="submit">Add Expense</button>

      </div>

    </form>
  );
};

export default ExpenseForm;
