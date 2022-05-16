import React from "react";
import logo from "./logo.svg";
import Expenses from "./components/Expenses/Expenses";
import "./App.css";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";
import ExpenseForm from "./components/Expenses/NewExpense/ExpenseForm";


const App = () => {
  //const para = document.createElement('p');
  //para.textContent = "This is another way to insert text to web page!"
  //document.getElementById('root').append(para);
  

  const expense = [ // Array of expenses
    {
      id: "e1",
      title: "Car Insurace",
      amount: 3500,
      date: new Date(2022, 6-1, 30),
    },

    {
      id: "e2",
      title: "Dental Care",
      amount: 3200,
      date: new Date(2022, 5-1, 20),
    },

    {
      id: "e3",
      title: "Yuvals Present",
      amount: 2800,
      date: new Date(2022, 6-1, 15),
    },
    
  ];



  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement("h2", {}, "My expense table:"),
  //   React.createElement(Expenses, {items: expense})
  // );

  return (
    <div className="App">
      <NewExpense />
      <Expenses items={expense} />
    </div>
  );

  }
  
export default App;
