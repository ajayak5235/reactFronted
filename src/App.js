import Expenses from './components/Expenses/Expenses'

import './App.css';

const  App = () => {
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
   
   <Expenses items={expenses}/>

   </div>

  )
}

export default App;
