import React from 'react';
import ListItems from './CreateListItems.js';
import PropTypes from 'prop-types';

class ReadBookShelf extends React.Component {
	static propTypes = {
		currentShelves: PropTypes.array.isRequired,
		updateShelf: PropTypes.func.isRequired
	}
	
	defaultValue = "read";
	
	render() {
		const {	currentShelves, updateShelf	} = this.props;	
		return (
			<div className="bookshelf"> 
			  <h2 className="bookshelf-title">Read</h2>
			  <div className="bookshelf-books">
				<ol className="books-grid">

				{ currentShelves.filter((shelf) => shelf.shelf === this.defaultValue).map((eachShelf, index) => (
					<ListItems key={index} id={eachShelf.id} data={eachShelf} 
					value={this.defaultValue} updateShelf={updateShelf}
					/>
				)) }				
				
				</ol>
			  </div>
			</div> 				
		)
	}
}		
		
export default ReadBookShelf;