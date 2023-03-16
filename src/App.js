import React from 'react'
import NewExpense from './components/NewExpense/NewExpense'
import Expenses from './components/Expenses/Expenses'

const App = () => {
	const expenses = [ // Tablica wydatkow
		{
			id: 'e1',
			title: 'Toilet Paper',
			amount: 94.12,
			dato: new Date(2022, 7, 14),
		},
		{ id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
		{
			id: 'e3',
			title: 'Car Insurance',
			amount: 294.67,
			date: new Date(2023, 1, 28),
		},
		{
			id: 'e4',
			title: 'New Desk (Wooden)',
			amount: 450,
			date: new Date(2023, 5, 12),
		},
	]

	// return React.createElement(
	// 	'div',
	// 	{},
	// 	React.createElement('h2', {}, "Let's get started!"),
	// 	React.createElement(Expenses, {items:expenses}),

	// )

	const addExpenseHandler = expense => {  // tutaj do parametru trafia expenseDatara z NewExpense
		console.log('in app js')
		console.log(expense)
	}

	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses items={expenses} />
		</div>
	)
}

export default App
