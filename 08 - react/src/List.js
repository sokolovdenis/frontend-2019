import React from 'react';
import ListItem from './ListItem';
import './List.css';

class List extends React.PureComponent {

	handleSubmit(event) {
		event.preventDefault();

		let value = this.textInput.value;
		this.props.onItemAdd(value);

		this.textInput.value = '';
	}

	render() {
		return (
			<div className="list">
				<h1>{ this.props.title }</h1>
				<form onSubmit={ (event) => this.handleSubmit(event) }>
					<input type="text" placeholder="Enter new item" ref={ input => this.textInput = input } />
					<input type="submit" value="Add" />
				</form>
				<ol>
					{ 
						this.props.items.map(item => 
							// В key должно лежать уникальное в рамках перечисления значение.
							// Это помогает механизмам react правильно вычислять разницу между новым и старым virtual dom.
							<ListItem key={item} value={item} />
						) 
					}
				</ol>
				<div>Count: { this.props.items.length } </div>
			</div>
		);
	}
}

export default List;