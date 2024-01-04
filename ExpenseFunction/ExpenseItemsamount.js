import React ,{useState} from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItems.css'

const  ExpenseItems = (props) => {
    const [amount, setTitle] = useState(props.amount);
    
    const updateAmount = ()=>{
        setTitle(100);
        console.log('successfully Deleted')
    }
    return (

        <Card className='expense-item'>  
         <ExpenseDate date={props.date}/>
        
         <div className='expense-item__description'>
         <h2>{props.title}</h2>
         <div className='expense-item__price'>${amount}</div>
         </div>
         <button onClick={updateAmount}>Update</button>
        </Card>
    
    )
}

export default ExpenseItems;



