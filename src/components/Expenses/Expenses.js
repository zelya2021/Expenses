import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import React, { useState } from "react";

function Expenses(props) {
  const[filteredYear, setfilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear=>{
    setfilteredYear(selectedYear);
  }


  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter selected = {filteredYear} onChangeFilter = {filterChangeHandler} />
        {props.items.map((item) => {
          return (
            <ExpenseItem
              key={item.title}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          );
        })}
      </Card>
    </div>
  );
}

export default Expenses;
