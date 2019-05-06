import React from 'react';

class ListItem extends React.PureComponent {
	render() {
		return (
			<li>{ this.props.value }</li>
		);
	}
}

export default ListItem;