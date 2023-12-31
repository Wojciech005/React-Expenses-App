import React, {useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

  const [ isEditing, setIsEditing ] = useState(false)
  // let showForm = false;
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false)
    console.log(expenseData);
  };

  const startEditingHandler = () => {
    setIsEditing(true)
  }
  const stopEditingHandler = () => {
    setIsEditing(false)
  }


  return (
    <div className="new-expense">
      { !isEditing && <button onClick={startEditingHandler}>Add new expense</button> }
      { isEditing &&  <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} onCancel={stopEditingHandler}/>}
    </div>
  );
};

export default NewExpense;
