import ExpenseDate from './ExpenseDate';
import './ExpenseItems.css'

function ExpenseItems(props){
    const month = props.date.toLocaleString('en-US', {month:'long'});
   
    return (

        <div className='expense-item'>  
         <ExpenseDate date={props.date}/>
        
         <div className='expense-item__description'>
         <h2>{props.title}</h2>
         <div className='expense-item__price'>${props.amount}</div>
         </div>
        </div>
    
    )
}

export default ExpenseItems;