import React, { Component } from 'react';
import Controller from './Controller';
import Column from './Column';
import './board.css';

class Board extends Component {

	constructor(props) {
		super(props);
		this.state = {
			data: [],
			tMax: 15,
			tColMax: 5,
		}

    	window.addEventListener( 'beforeunload' , () => {
    		this.saveStateToLocalStorage(this.state.data)
    	}); 

	}

	componentWillMount = async () => {
		let localStorageData = await this.retrieveStateFromLocalStorage();
		this.setState({
			data: localStorageData
		});
	}

	saveStateToLocalStorage = async (data) => {
		await localStorage.setItem('userData', JSON.stringify(data));
	}

	retrieveStateFromLocalStorage = async () => {
		try {
			return await JSON.parse(localStorage.getItem('userData'));
		} catch(error) {
			console.error(error);
		}
	}

	addNewCard = () => {
		let data = JSON.parse(JSON.stringify(this.state.data));
		if (data.length  < this.state.tMax) {
			data.push('Content placeholder');
			this.setState({
				data: data
			})
		} else {
			alert('You have reached the maximum limit of contents');
		}
	}

	deleteCard = () => {
		let data = JSON.parse(JSON.stringify(this.state.data));
		data.pop();
		this.setState({
			data: data
		})
	}

	updateUserInput = (event, index) => {
		let value = event.target.innerText;
		let data = JSON.parse(JSON.stringify(this.state.data));
		data[ index ] = value;
		this.setState({
			data: data
		})
	}

	deleteSpecificCard = (index) => {
		let data = JSON.parse(JSON.stringify(this.state.data));
		data.splice(index, 1);
		this.setState({
			data: data
		})
	}

	render() {
		let columns = JSON.parse( JSON.stringify(this.state.data));

		return (
		  <div>
		  	<Controller onClickHanlder={this.addNewCard} onDeleteHandler={this.deleteCard}/>
		  	<div className="data-col-container">
		  		<Column data={columns} index={1} updateUserInput={this.updateUserInput} deleteSpecificCard={this.deleteSpecificCard}/>
		  	</div>
		  </div>
		);
	}
}

export default Board;
