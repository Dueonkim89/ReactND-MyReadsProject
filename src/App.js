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
			console.log(books);
			this.setState({ currentShelves: books });
		})
	}
			
	updateShelf = (book, shelf) => {
		/* run .update API function in here. we will receive a promise from this func.*/
		BooksAPI.update(book, shelf).then((books) => {
			console.log(books);
			// promise is an object with 3 arrays for each shelf 
			//	Lazy man's way, just call getAll() instead of updating this.state.currentShelves
			//Let React do the heavy lifting for us!
			BooksAPI.getAll().then((books) => {
				this.setState({ currentShelves: books });
			})		
		})			
	}
	
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
							
							<CurrentlyReadingBookShelf 
								currentShelves={this.state.currentShelves} updateShelf={this.updateShelf}								
							/>				
							<WantToReadBookShelf 
								currentShelves={this.state.currentShelves} updateShelf={this.updateShelf}								
							/>
							<ReadBookShelf 
								currentShelves={this.state.currentShelves} updateShelf={this.updateShelf}								
							/>
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
						updateShelf={this.updateShelf}
					/>
				)}/>			
			</div>
		)
	}
}

export default BooksApp
