import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = props => {
	const saveExpenseDateHandler = enteredExpenseData => { //oczekuje na wprowadzone dane z ExpenseForm
		const expenseDatara = {
			...enteredExpenseData,
			id: Math.random().toString,
		}
		props.onAddExpense(expenseDatara)
	}

	return (
		<div className='new-expense'>
			<ExpenseForm onSaveExpenseData={saveExpenseDateHandler} />
		</div>
	)
}

export default NewExpense
