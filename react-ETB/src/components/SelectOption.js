import React from 'react';
import createClass from 'create-react-class';

const SelectOption = createClass({
	handleMouseDown (event) {
		event.preventDefault();
		event.stopPropagation();
		this.props.onSelect(this.props.option, event);
	},
	handleMouseEnter (event) {
		this.props.onFocus(this.props.option, event);
	},
	handleMouseMove (event) {
		if (this.props.isFocused) return;
		this.props.onFocus(this.props.option, event);
	},
	render () {
		return (
			<div
        className={this.props.className}
        style={{top: '0px'}}
				onMouseDown={this.handleMouseDown}
				onMouseEnter={this.handleMouseEnter}
				onMouseMove={this.handleMouseMove}
				title={this.props.option.title}>
				{this.props.children}<span style={{display: 'inline-block', position: 'relative', width: '95%', height: '90%'}} className={this.props.option.className}></span>
			</div>
		);
	}
});

export default SelectOption;
