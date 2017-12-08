import React from 'react';

function ListItems(props) {
	return (
			<li>
				<div className="book">
				<div className="book-top">
					<div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${props.data.imageLinks.thumbnail})` }}></div>
					<div className="book-shelf-changer">
					<select defaultValue={props.value}>
						<option value="none" disabled>Move to...</option>
						<option value="currentlyReading">Currently Reading</option>
						<option value="wantToRead">Want to Read</option>
						<option value="read">Read</option>
						<option value="none">None</option>
					</select>
					</div>
				</div>
				<div className="book-title">{props.data.title}</div>
					{/* Short circuit expression, if authors is not undefined, then list it*/}
				<div className="book-authors"> { props.data.authors !== undefined && (props.data.authors.join(', ')) }
				</div>
				</div>
			</li>			
	)				
}

export default ListItems;