import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = props => {

	const [isEditing, setIsEditing] = useState(false)
	
	const saveExpenseDateHandler = enteredExpenseData => {
		//oczekuje na wprowadzone dane z ExpenseForm
		const expenseDatara = {
			...enteredExpenseData,
			id: Math.floor(Math.random() * 100),
		}
		props.onAddExpense(expenseDatara)
		setIsEditing(false)
	}
	
	const startEditingHandler = () => {
		setIsEditing(true)
	}
	
	const stopEditingHandler = () => {
		setIsEditing(false)
	}

	return (
		<div className='new-expense'>
			{!isEditing && <button onClick={startEditingHandler}>Add New Expenses</button>}
			{isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDateHandler} onCancel={stopEditingHandler} />} 
			{/* jesli isEditiing jest fałsz pokazuje formularz do wpisania */}
		</div>
	)
}

export default NewExpense
