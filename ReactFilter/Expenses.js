import React ,{useState} from 'react'
import ExpenseItems from "./ExpenseItems";
import Card from '../UI/Card'
import "./Expenses.css";
import ExpensesFilter from './Expensesfilter';


const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2021');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

const filteredExpenses = props.items.filter(expense =>{
  return expense.date.getFullYear().toString() === filteredYear;
})
let expenseContent = <p>No Expenses Found</p>
if(filteredExpenses.length>0){
  expenseContent = filteredExpenses.map((expense) => (
    <ExpenseItems
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ))
}

return (
    <Card className="expenses">
      <ExpensesFilter selected=  {filteredYear} onChangeFilter={filterChangeHandler}/>
      {expenseContent}
      
   
    </Card>
  );
}
export default Expenses;

