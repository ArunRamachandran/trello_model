import React, { Component } from 'react';
import Controller from './Controller';
import Column from './Column';
import './board.css';

class Board extends Component {

	constructor(props) {
		super(props);
		this.state = {
			data: localStorage.hasOwnProperty('userData') ? this.retrieveStateFromLocalStorage() : [],
			tMax: 15,
			tColMax: 5
		}
	}

	componentWillMount() {
		window.addEventListener(
      		"unload",
      		this.saveStateToLocalStorage(this.state.data)
    	);
	}

	componentWillUnmount() {
		window.removeEventListener(
	      "unload",
	      this.saveStateToLocalStorage(this.state.data)
	    );
	    this.saveStateToLocalStorage(this.state.data);
	}

	saveStateToLocalStorage = (data) => {
		localStorage.setItem('userData', JSON.stringify(data));
	}

	retrieveStateFromLocalStorage = () => {
		return JSON.parse(localStorage.getItem('userData'));
	}

	addNewCard = () => {
		let data = this.state.data.slice(0);
		if (data.length  < this.state.tMax) {
			data.push('New content');
			this.setState({
				data: data
			})
		} else {
			alert('You have reached the maximum limit of contents');
		}
	}

	createDataFragment = (data) => {
		let dataObj = {1: [], 2: [], 3: []};

		data.forEach((element, index) => {
			if (index < 5 ) dataObj[1].push(element);
			else if (index >= 5 && index < 10) dataObj[2].push(element);
			else dataObj[3].push(element);
		});

		return dataObj;
	}

	render() {
		let columns = this.createDataFragment(this.state.data);
		return (
		  <div>
		  	<Controller onClickHanlder={this.addNewCard}/>
		  	<div className="data-col-container">
		  		<Column data={columns[1]} index={1}/>
		  		<Column data={columns[2]} index={2}/>
		  		<Column data={columns[3]} index={3}/>
		  	</div>
		  </div>
		);
	}
}

export default Board;
