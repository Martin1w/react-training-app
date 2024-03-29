import React, { useState } from 'react'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpenseChart from './ExpensesChart'
import './Expenses.css'

const Expenses = props => {
	const [filteredYear, setFilteredYear] = useState('2021')

	const filterChangeHandler = selectedYear => {
		setFilteredYear(selectedYear)
	}

	const filteredExpenses = props.items.filter(expense => {
		return expense.date.getFullYear().toString() === filteredYear
	})

	return (
		<div>
			<Card className='expenses'>
				<ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
				<ExpenseChart expenses={filteredExpenses} />
				<ExpensesList itemse={filteredExpenses}/>

				{/* <ExpenseItem
					title={props.items[0].title}
					amount={props.items[0].amount}
					datw={props.items[0].dato}></ExpenseItem>
				<ExpenseItem
					title={props.items[1].title}
					amount={props.items[1].amount}
					datw={props.items[1].date}></ExpenseItem>   STATYCZNIE DODANE ,a powyżej za pomocą metody - dynamicznie
				<ExpenseItem
					title={props.items[2].title}
					amount={props.items[2].amount}
					datw={props.items[2].date}></ExpenseItem>
				<ExpenseItem
					title={props.items[3].title}
					amount={props.items[3].amount}
					datw={props.items[3].date}></ExpenseItem> */}
			</Card>
		</div>
	)
}

export default Expenses
