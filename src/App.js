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
		searchList: [],
		searchWord: '',
		currentShelves: []
	}
	
	updateInput = (word) => {
		if (!word) {
			this.setState({ searchList: [], searchWord: '' });
		} else {
			this.setState({ searchWord: word });
			this.findBooks(word);				
		}					
	}
	
	findBooks = (word) => {
		BooksAPI.search(word).then((searchResults) => {
			this.setState({ searchList: searchResults });
		})
	}		
	
	/*To load info from server when mounted */
	componentDidMount() {
		BooksAPI.getAll().then((books) => {
			this.setState({ currentShelves: books });
		})
	}
			
	/* Method to update bookshelf bind to change event 
		from BooksApi.update method
		Pass to searchPage, and the 3 bookshelfs
		Also update this.setState for currentShelves
	*/
	
	/* DRY method to filter state.currentShelves based on shelf name 
		MAKE SURE THIS FUNC DOES NOT ACTUALLY ALTER THE STATE. WE DONT WANT!
	*/
	filterCurrentShelves = (name) => {
		this.state.currentShelves.filter((shelves) => shelves.shelf === name);
	}
	
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
							{/*Each bookshelf will receive state.currentShelves and filter it 
								accordingly to the specific bookshelf that component is handling*/}
							
							<CurrentlyReadingBookShelf currentShelves={this.state.currentShelves}/>				
							<WantToReadBookShelf currentShelves={this.state.currentShelves}/>
							<ReadBookShelf currentShelves={this.state.currentShelves}/>
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
					<SearchPage searchList={this.state.searchList} searchWord={this.state.searchWord} 
						updateInput={this.updateInput} currentShelves={this.state.currentShelves}
					/>
				)}/>			
			</div>
		)
	}
}

export default BooksApp
