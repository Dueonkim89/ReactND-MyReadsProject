import React from 'react';
import PropTypes from 'prop-types';

class ListItems extends React.Component {
	static propTypes = {
		currentShelves: PropTypes.array.isRequired,
		data: PropTypes.object.isRequired,
		id: PropTypes.string.isRequired
	}		
	
	state = {
		value: this.props.value
	}	
		
	render() {
		const { id, data, currentShelves, value} = this.props;
		return (	
				<li>
					<div className="book">
					<div className="book-top">
						<div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${data.imageLinks.thumbnail})` }}></div>
						<div className="book-shelf-changer">
						<select value={value}>
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

export default ListItems;