import logo from './logo.svg';
import React from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
 const expenses = [
   {
     id:'e1',
     title: 'Car Insurance',
    amount: 55.12,
    date: new Date(2020,8,15)
  },

  {
    id:'e2',
    title: 'New Tv',
   amount: 225.12,
   date: new Date(2020,10,11)
 },

 {
  id:'e3',
  title: 'Toilet Paper',
 amount: 12.12,
 date: new Date(2020,2,2)
},

 ]

//  return React.createElement('div',{},React.createElement('h2',{},"Get Started"),
//  React.createElement(Expenses, {items: expenses}));
  
  return (
    <div>
      <p>Get Started</p>
      <NewExpense/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
