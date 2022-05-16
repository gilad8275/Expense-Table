import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import React, { useState } from "react";


const ExpenseItem = (props) => {
  // function clickHandler() {}
  const [title, setTitle] /* [value itself, function will call to change the new value ] */ = useState(props.title); // must be calld direcly inside such component functions
  console.log("ExpenseItem evaluated by React!");

  const clickHandker = () => {
    setTitle("Updated!");
    console.log(title);
  };


  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>{props.amount} NIS</div>
      </div>
      <button onClick={clickHandker}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
