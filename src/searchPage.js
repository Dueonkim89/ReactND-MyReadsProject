import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ListItems from './CreateListItems.js';

class SearchPage extends React.Component {
	static propTypes = {
		searchList: PropTypes.array.isRequired,
		updateInput: PropTypes.func.isRequired,
		searchWord: PropTypes.string.isRequired
	}
	
	/* Create method that will compare this.props.currentShelves
	to searchList and see if id exists, if so return .shelf 
	else return 'none'
	
	value prop will take this method. 
	*/
	
	render() {
		const { searchList, updateInput, searchWord, currentShelves  } = this.props;
		
		return (			
				<div className="search-books">
					<div className="search-books-bar"> 	
					<Link to="/" className="close-search">Close</Link>
					<div className="search-books-input-wrapper">
						{/*
						NOTES: The search from BooksAPI is limited to a particular set of search terms.
						You can find these search terms here:
						https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

						However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
						you don't find a specific author or title. Every search is limited by search terms.
						*/}
						<input value={searchWord} type="text" 
							placeholder="Search by title or author" 
							onChange={(event) => {updateInput(event.target.value)}}
						/>
					</div>
					</div>
					<div className="search-books-results">
					{/*Map in array of API data to create list items for OL */}
					<ol className="books-grid">								
						{searchList.length > 0 && searchList.map((eachBooks, index) => (
							<ListItems key={index} id={eachBooks.id} data={eachBooks} value='none'/>
						))}
					</ol>
					</div>
				</div>					
		)
	}
}

export default SearchPage;