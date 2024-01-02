import logo from './logo.svg';

import ExpenseItems from './components/ExpenseItems';
import './App.css';

function App() {
  const expenses = [
    {
     id: 'e1', 
     title:'Car Insurance',
     amount:247.56, 
     date: new Date(2022, 5,20),
     },
    {
     id: 'e2', 
     title:'Car',
     amount:356.56, 
     date: new Date(2020, 10,12),
     },
    {
     id: 'e3', 
     title:' Paper',
     amount:100.56, 
     date: new Date(2023, 11,13),
     },
    {
     id: 'e4', 
     title:'home',
     amount:789.56, 
     date: new Date(2024, 1,4),
     },
]
  return (
   <div>
    <h1>Expense Items!</h1>
    {/* <ExpenseItems
    title={expenses[0].title} 
    amount={expenses[0].amount} 
    date={expenses[0].date}
    ></ExpenseItems>
    <ExpenseItems
    title={expenses[1].title} 
    amount={expenses[1].amount} 
    date={expenses[1].date}
    ></ExpenseItems>
    <ExpenseItems
    title={expenses[2].title} 
    amount={expenses[2].amount} 
    date={expenses[2].date}
    ></ExpenseItems>
    <ExpenseItems
    title={expenses[3].title} 
    amount={expenses[3].amount} 
    date={expenses[3].date}
    ></ExpenseItems> 
    */}
   {expenses.map((expense) => (
        <ExpenseItems
          key={expense.id} // Provide a unique key for each item in the list
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}

   </div>

  )
}

export default App;
