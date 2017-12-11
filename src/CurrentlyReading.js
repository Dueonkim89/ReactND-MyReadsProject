import React from 'react';
import CreateListItems from './CreateListItems.js';
import PropTypes from 'prop-types';

class CurrentlyReadingBookShelf extends React.Component {
	static propTypes = {
		currentShelves: PropTypes.array.isRequired,
		updateShelf: PropTypes.func.isRequired
	}
	
	defaultValue = "currentlyReading";
	
	render() {
		const {	currentShelves, updateShelf	} = this.props;		
		return (
		   <div className="bookshelf">  
			  <h2 className="bookshelf-title">Currently Reading</h2>
			  <div className="bookshelf-books">
				<ol className="books-grid">
				
				{/* Put in CreatListitems  here
					Will filter this.props.currentShelves based on default value and then map
					over new array to create the appropriate list items.		
				*/}
				{ currentShelves.filter((shelf) => shelf.shelf === this.defaultValue).map((eachShelf, index) => (
					<CreateListItems key={index} id={eachShelf.id} data={eachShelf} 
						value={this.defaultValue} updateShelf={updateShelf}
					/>
				)) }
												 			  
				</ol>
			  </div>
			</div> 		
		)
	}				
}


export default CurrentlyReadingBookShelf;