import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component {
	state = {
		todos: [
			{
				id: 1,
				title: 'First Tastk',
				completed: false
			},
			{
				id: 2,
				title: 'Second Tastk',
				completed: true
			},
			{
				id: 3,
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

	render() {
		return (
			<div className="App">
				<Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />
			</div>
		);
	}
}

export default App;
