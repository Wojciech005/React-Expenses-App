import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
//   const [enteredTitle, setEnteredTitle] = useState("");
//   const [enteredAmount, setEnteredAmout] = useState("");
//   const [enteredDate, setEnteredfDate] = useState("");

const [userInput, setUserInput] = useState({
    enteredTitle:'',
    enterAmount: '',
    enteredDate: '',
})

  const titleChangeHandler = (e) => {
    setUserInput({
        ...userInput, 
        enteredTitle: e.target.value,
    })
  };

  const amountChangeHandler = (e) => {
    setUserInput({
        ...userInput, 
        enteredAmount: e.target.value,
    })
  };

  const dateChangeHandler = (e) => {
    setUserInput({
        ...userInput, 
        enteredDate: e.target.value,
    })
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2023-01-01" max="2026-12-31" />
        </div>
        <div className="new-expense__actions">
          <button type="submit" onClick={dateChangeHandler}>
            Add Expense
          </button>
        </div>
      </div>
      <h1>{enteredTitle}</h1>
    </form>
  );
};

export default ExpenseForm;
