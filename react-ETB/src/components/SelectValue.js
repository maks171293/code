import React from 'react';
import createClass from 'create-react-class';

const SelectValue = createClass({
	render () {
		// var gravatarStyle = {
		// 	borderRadius: 3,
		// 	display: 'inline-block',
		// 	marginRight: 10,
		// 	position: 'relative',
		// 	top: -2,
		// 	verticalAlign: 'middle',
		// };
		return (
			<div className="Select-value" title={this.props.value.title}>
				<span className="Select-value-label">
					{this.props.children}
				</span>
			</div>
		);
	}
});

export default SelectValue;
