import React from 'react';
import ListItems from './CreateListItems.js';
import PropTypes from 'prop-types';

class CurrentlyReadingBookShelf extends React.Component {
	static propTypes = {
		currentShelves: PropTypes.array.isRequired
	}
	
	defaultValue = "currentlyReading";
	
	render() {
		const {	currentShelves	} = this.props;		
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
					<ListItems key={index} id={eachShelf.id} data={eachShelf} currentShelves={currentShelves}
						value={this.defaultValue}
					/>
				)) }
												 			  
				</ol>
			  </div>
			</div> 		
		)
	}				
}


export default CurrentlyReadingBookShelf;