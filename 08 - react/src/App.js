import React, { Component } from 'react';
import List from './List';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			lists: [
				{
					id: 1,
					title: 'Список дел',
					items: [
						'выучить реакт',
						'выучить джаваскрипт'
					]
				},
				{
					id: 2,
					title: 'Список покупок',
					items: [
						'хлеб',
						'молоко'
					]
				}
			]
		};
	}

	itemAddHandler(id, value) {
		// Если мы имеем дело с PureComponents, то такой код работать не будет.
		let list = this.state.lists.find(l => l.id === id);
		list.items.push(value);

		// Вызов setState запускает механизм обновления html:
		// 1. Вычисляется новый virtual dom, который представляет собой дерево из reactElement
		// 2. Сравниваются старый и новый virtual dom
		// 3. Вызыются методы DOM API, которые приведут DOM в соответствие с новым virtual dom
		this.setState({
			lists: this.state.lists
		});
	}

	render() {
		return (
			<div className="app">
				{this.state.lists.map(list =>
					// В key должно лежать уникальное в рамках перечисления значение.
					// Это помогает механизмам react правильно вычислять разницу между новым и старым virtual dom.
					<List
						key={list.id}
						title={list.title}
						items={list.items}
						onItemAdd={(value) => this.itemAddHandler(list.id, value)}
					/>
				)}
			</div>
		);
	}
}

export default App;
