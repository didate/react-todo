import React, { Component } from 'react';
import TotoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
	render() {
		return this.props.todos.map((todo) => (
			<TotoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} />
		));
	}
}

Todos.propTypes = {
	todos: PropTypes.array.isRequired
};

export default Todos;
