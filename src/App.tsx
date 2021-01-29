import { CheckIcon, CloseIcon } from '@chakra-ui/icons'
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { CardTask } from './CardTask'
import { Navbar } from './NavBar'

export default function App() {
	const [array, setArray] = useState([])

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((response) => response.json())
			.then((json) => setArray(json))
	}, [])

	const listTodoCards = (
		todos: Array<{
			id: number
			title: string
			content: string
			completed: boolean
		}>,
	) => {
		if (todos !== null) {
			return todos.map((todo) => (
				<CardTask
					key={todo.id}
					title={todo.title}
					content={todo.content}
					icon={todo.completed ? <CheckIcon /> : <CloseIcon />}
				/>
			))
		}
	}

	return (
		<Router>
			<Navbar title='TODO App' />
			{listTodoCards(array)}
		</Router>
	)
}
