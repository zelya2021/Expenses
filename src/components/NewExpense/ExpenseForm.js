import React, {useState} from "react";
import './ExpenseForm.css'

const ExpenseForm = () =>{
    const[EnteredTitle, setentEredTitle] = useState('');
    const[EnteredAmount, setentEredAmount] = useState('');
    const[EnteredDate, setentEredDate] = useState('');

    // const [userInput, setUserInput] =  useState({
    //     EnteredTitle:'',
    //     EnteredAmount:'',
    //     EnteredDate:''
    // })


    const titleChangeHandler =(event)=>{
        setentEredTitle(event.target.value); 

        // setUserInput({
        //     ...userInput,
        //     EnteredTitle:event.target.value,
        // })

        // setUserInput((prevState) =>{
        //     return{...prevState, EnteredTitle:event.target.value};
        // });
    };

    const amountChangeHandler = (event)=>{
        setentEredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     EnteredAmount:event.target.value,
        // })
    };

    const dateChangeHandler = (event)=>{
        setentEredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     EnteredDate:event.target.value,
        // })
    };

    const submitHandler = (event) =>{
        event.preventDefault();

        const expenseData = {
            title: EnteredTitle,
            amount: EnteredAmount,
            date: new Date(EnteredDate)
        }
    };

    return (<form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" onChange = {titleChangeHandler}/>
            </div>

            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" onChange ={amountChangeHandler}/>
            </div>

            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2020-01-01" max="2023-12-31" onChange={dateChangeHandler }/>
            </div>

            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>

        </div>
    </form>
    );
};

export default ExpenseForm;