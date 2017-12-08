import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import CurrentlyReadingBookShelf from './CurrentlyReading.js';
import WantToReadBookShelf from './WantToRead.js';
import ReadBookShelf from './Read.js';
import { Link, Route } from 'react-router-dom';
import SearchPage from './searchPage.js';

class BooksApp extends React.Component {
	state = {
		bookList: [],
		searchWord: ''
	}
	
	updateInput = (word) => {
		if (!word) {
			this.setState({ bookList: [], searchWord: '' });
		} else {
			this.setState({ searchWord: word });
			this.findBooks(word);				
		}					
	}
	
	findBooks = (word) => {
		BooksAPI.search(word).then((searchResults) => {
			console.log(searchResults);
			this.setState({ bookList: searchResults});
		})
	}		
	
	/*To load info from server when mounted */
	componentDidMount() {
		console.log('page mounted');
		/*Use booksAPI.getAll() here */
	}
			
	/* Method to generate <li> for each book result (must be agnostic)*/
	
	/* Method to update bookshelf bind to change event 
		from BooksApi.update method
		Pass to searchPage, and the 3 bookshelfs
	*/
							
	render() {
		return (
			<div className="app"> 
				<Route exact path="/" render={() => (
					<div className="list-books">
						<div className="list-books-title">
						<h1>MyReads</h1>
						</div>
						<div className="list-books-content"> 
						<div>
							<CurrentlyReadingBookShelf />				
							<WantToReadBookShelf />
							<ReadBookShelf />
						</div>
						</div>
						<div className="open-search">
						<Link to='/search'>
							Add a book
						</Link>
						</div>
					</div>
				)}/>
				<Route exact path="/search" render={() => (
					<SearchPage bookList={this.state.bookList} searchWord={this.state.searchWord} 
						updateInput={this.updateInput}
					/>
				)}/>			
			</div>
		)
	}
}

export default BooksApp
