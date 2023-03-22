import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = props => {
	const [enteredTitle, setEnteredTitle] = useState('')
	const [enteredAmount, setEnteredAmount] = useState('')
	const [enteredDate, setEnteredDate] = useState('')
	// const [userInput, setUserInput] = useState({
	// 	enteredTitle: '',
	// 	enteredAmount: '',
	// 	enteredDate: '',

	const titleChangeHandler = e => {
		setEnteredTitle(e.target.value)
		// setUserInput({
		// 	...userInput,
		// 	enteredTitle: e.target.value,
		// })
	}

	const amountChangeHandler = e => {
		setEnteredAmount(e.target.value)
		// setUserInput({
		// 	...userInput,
		// 	enteredAmount: e.target.value,
		// })
	}

	const dateChangeHandler = e => {
		setEnteredDate(e.target.value)
		// setUserInput({
		// 	...userInput,
		// 	enteredDate: e.target.value,
		// })
	}

	const submitHandler = e => {
		e.preventDefault() //strona nie zostanie ponownie załadowana

		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount, // z tego obiektu wyciagamy pary klucz-wartosc w NExpens
			date: new Date(enteredDate),
		}

		props.onSaveExpenseData(expenseData) //przekazuje do NewExpense i trafia expenseDate jako argument w parametrze enteredExpenseData
		setEnteredTitle('')
		setEnteredAmount('')
		setEnteredDate('')
	}

	return (
		<form onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input type='text' value={enteredTitle} onChange={titleChangeHandler} />
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler} />
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input type='date' min='2023-01-01' max='2026-12-31' value={enteredDate} onChange={dateChangeHandler} />
				</div>
			</div>
			<div className='new-expense__actions'>
				<button type='submit'>Add Expense</button>
			</div>
		</form>
	)
}

export default ExpenseForm
