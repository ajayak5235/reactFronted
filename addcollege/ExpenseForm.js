import React from 'react';
import './ExpenseForm.css'
const ExpenseForm = () =>{
    return (
        <form>
            <div className='new-expense__controls'> 
            <div className='new-expense__control'>
             <label>Title</label>
              <input type="text" />
            </div>
            <div className='new-expense__control'>
             <label>Amount</label>
              <input type="number" />
            </div>
            <div className='new-expense__control'>
             <label>Date</label>
              <input type="date" />
            </div>
            <button>AddExpense</button>
            </div>
        </form>
    )
        
}

export default ExpenseForm