import React from 'react';
import ListItems from './CreateListItems.js';

class ReadBookShelf extends React.Component {
	
	defaultValue = "read";
	
	render() {
		const {	currentShelves	} = this.props;
		return (
			<div className="bookshelf"> 
			  <h2 className="bookshelf-title">Read</h2>
			  <div className="bookshelf-books">
				<ol className="books-grid">

				{ currentShelves.filter((shelf) => shelf.shelf === this.defaultValue).map((eachShelf, index) => (
					<ListItems key={index} id={eachShelf.id} data={eachShelf} value={eachShelf.shelf}/>
				)) }				
				
				</ol>
			  </div>
			</div> 				
		)
	}
}		
		
export default ReadBookShelf;