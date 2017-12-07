import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import CurrentlyReadingBookShelf from './CurrentlyReading.js';
import WantToReadBookShelf from './WantToRead.js';
import ReadBookShelf from './Read.js';
import { Link, Route } from 'react-router-dom';


class BooksApp extends React.Component {
	state = {
		searchWord: ''
	}
	
	updateSearchWord = (word) => {
		this.setState({ searchWord: word.trim() });
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
							<input value={this.state.searchWord} type="text" 
								placeholder="Search by title or author" 
								onChange={(event) => {this.updateSearchWord(event.target.value)}}
							/>
						</div>
						</div>
						<div className="search-books-results">
						<ol className="books-grid">
						{/* Create LI generating component*/}
						
						</ol>
						</div>
					</div>				
				)}/>			
			</div>
		)
	}
}

export default BooksApp
