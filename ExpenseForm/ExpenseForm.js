import React, {useState} from 'react';


import './ExpenseForm.css';

const ExpenseForm = (props) =>{

const [changeTitle, setEnteredTitle] = useState('')
const [changeAmount, setEnteredAmount] = useState('')
const [changeDate, setEnteredDate] = useState('')

// const [userInput, setUserInput] = useState({
//   enterTitle:'',
//   enterAmount:'',
//   enterDate:''
// })
 
  const titleChangeHandler = (event) =>{
    setEnteredTitle(event.target.value)
  // setUserInput((prevState) =>{
  //   return {...prevState,enterTitle: event.target.value}
  // })
  }
    
  const amountChangeHandler = (event) =>{
     setEnteredAmount(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   enterAmount:event.target.value,
    // })
  }

  const dateChangeHandler = (event) => {
     setEnteredDate(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   enterDate:event.target.value,
    // })
  }

  const submitHandler = (event) => {
  event.preventDefault();

  const expenseData = {
    title:changeTitle,
    amount:changeAmount,
    date: new Date(changeDate)
  }
  props.onSaveExpenseData(expenseData);
  setEnteredTitle('');
  setEnteredAmount('');
  setEnteredDate('');
  }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'> 
            <div className='new-expense__control'>
             <label>Title</label>
              <input type="text" value={changeTitle} onChange={titleChangeHandler} />
            </div>
            <div className='new-expense__control'>
             <label>Amount</label>
              <input type='number' min="0.01" step="0.01" value={changeAmount} onChange={amountChangeHandler}/>
            </div>
            <div className='new-expense__control'>
             <label>Date</label>
              <input type="date" min="2019-01-01" step="2024-01-01" value={changeDate} onChange={dateChangeHandler}/>
            </div>
            <div className='new-expense__actions'>
            <button type="submit">Add Expense</button>
            </div>
            </div>
            
        </form>
    )
        
}

export default ExpenseForm



