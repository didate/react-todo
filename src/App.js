import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import uuid from 'uuid';

class App extends Component {
	state = {
		todos: [
			{
				id: uuid.v4(),
				title: 'First Tastk',
				completed: false
			},
			{
				id: uuid.v4(),
				title: 'Second Tastk',
				completed: false
			},
			{
				id: uuid.v4(),
				title: 'Third Tastk',
				completed: false
			}
		]
	};

	//Toggle Complete
	markComplete = (id) => {
		this.setState({
			todos: this.state.todos.map((todo) => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			})
		});
	};

	//Delete TotoItem
	deleteTodo = (id) => {
		this.setState({
			todos: [ ...this.state.todos.filter((todo) => todo.id !== id) ]
		});
	};

	//Add TodoItem
	addTodo = (title) => {
		const newTodo = { id: uuid.v4(), title: title, completed: false };
		this.setState({
			todos: [ ...this.state.todos, newTodo ]
		});
	};

	render() {
		return (
			<div className="App">
				<div className="container">
					<Header />
					<AddTodo addTodo={this.addTodo} />
					<Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />
				</div>
			</div>
		);
	}
}

export default App;
