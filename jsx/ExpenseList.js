import React from 'react';
import ExpenseItems from './ExpenseItems';
import './ExpenseList.css';

const ExpenseList = (props) =>{
if(props.items.length === 0){
    return <h2 className='expenses-list__fallback'>Expenses Not Found</h2>
}else if(props.items.length === 1){
    return (
        <div>
             <ul>
         {props.items.map((expense) => (
    <ExpenseItems
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ))}
    </ul>
    <h2 className='expenses-list__fallback'>Only single Expense here. Please add more...</h2>
    </div>)
}
return (
    <ul>
         {props.items.map((expense) => (
    <ExpenseItems
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ))}
    </ul>
)
}

export default ExpenseList;