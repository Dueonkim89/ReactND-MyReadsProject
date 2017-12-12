import React from 'react';
import CreateListItems from './CreateListItems.js';
import PropTypes from 'prop-types';

class WantToReadBookShelf extends React.Component {
	static propTypes = {
		currentShelves: PropTypes.array.isRequired,
		updateShelf: PropTypes.func.isRequired
	}
	
	defaultValue = "wantToRead";
	
	render() {
		const {	currentShelves, updateShelf	} = this.props;	
		return (
			<div className="bookshelf"> 
			  <h2 className="bookshelf-title">Want to Read</h2>
			  <div className="bookshelf-books">
				<ol className="books-grid">
				
				{ currentShelves.filter((shelf) => shelf.shelf === this.defaultValue).map((eachShelf, index) => (
					<CreateListItems key={eachShelf.id} id={eachShelf.id} data={eachShelf}
					value={this.defaultValue} updateShelf={updateShelf}
					/>
				)) }				
							 				 
				</ol>
			  </div>
			</div> 
		)
	}
}



export default WantToReadBookShelf;