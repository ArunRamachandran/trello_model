import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Questions extends Component {
	constructor(props) {
		super(props);
		this.state = {
			questions: null
		};
	}

	async componentDidMount() {
		const q = (await axios.get('http://localhost:8090/'));
		console.log("response : ", q);
		let questions = q.data;
		this.setState({
			questions,
		});
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					{ this.state.questions === null && <p>Loading questions..</p> }					
					{ 
						this.state.questions && this.state.questions.length ? 
							this.state.questions.map(( question) => (
								<div key={question.id} className="col-sm12 col-md-4 col-lg-3">
									<Link to={`/question/${question.id}`}>
										<div className="card text-white bg-success mb-3">
											<div className="card-header">Answers: {question.answers}</div>
											<div className="card-body">
												<h4 className="card-title">{question.title}</h4>
												<p className="card-text">{question.description}</p>
											</div>
										</div>	
									</Link>	
								</div>
							))	
						: <h3>We couldn't find anything for you .. Let me check it again</h3>
					}
				</div>
			</div>
		);
	}
}