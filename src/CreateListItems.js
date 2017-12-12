import React from 'react';
import PropTypes from 'prop-types';

class CreateListItems extends React.Component {
	static propTypes = {
		data: PropTypes.object.isRequired,
		id: PropTypes.string.isRequired,
		value: PropTypes.string.isRequired,
		updateShelf: PropTypes.func.isRequired		
	}		
	
	state = {
		value: ''
	}
	
	noThumbNailURL = "http://via.placeholder.com/128x192?text=No%20Cover";
	
	componentDidMount() {
		this.setState({ value: this.props.value });
	}	

	handleChange = (newValue, data) => {
	//first set this.state.value to new value.
		this.setState({ value: newValue });
		//run second func which we will get as a prop from app.js
		this.props.updateShelf(data, newValue);
	}	
	
	render() {	
		const { data } = this.props;
		return (	
				<li>
					<div className="book">
					<div className="book-top">
											
						{ data.imageLinks !== undefined ? (
							<div className="book-cover" style={{ width: 128, height: 192, 
								backgroundImage: `url(${data.imageLinks.thumbnail})` }}>	
							</div>		
						) : (
							<div className="book-cover" style={{ width: 128, height: 192, 
								backgroundImage: `url(${this.noThumbNailURL})` }}>
							</div>	
						)}	
																			
						
						<div className="book-shelf-changer">
						<select value={this.state.value} onChange={(event) => this.handleChange(event.target.value, data)}>
							<option value="none" disabled>Move to...</option>
							<option value="currentlyReading">Currently Reading</option>
							<option value="wantToRead">Want to Read</option>
							<option value="read">Read</option>
							<option value="none">None</option>
						</select>
						</div>
					</div>
					<div className="book-title">{data.title}</div>
						{/* Short circuit expression, if authors is not undefined, then list it*/}
					<div className="book-authors"> {data.authors !== undefined && (data.authors.join(', ')) }
					</div>
					</div>
				</li>			
		)	
	}	
}

export default CreateListItems;