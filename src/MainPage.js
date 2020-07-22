import React, { Component } from 'react';
import Book from './Book';
import Shelf from './Shelf';
import { Link } from 'react-router-dom';

// MainPage is having the list of books and needed methods to edit that list as passed from App.
class MainPage extends Component {
    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <Shelf value='currentlyReading' title='Currently Reading' books={this.props.books} moveShelf={this.props.moveShelf} />
                    <Shelf value='wantToRead' title='Want to Read' books={this.props.books} moveShelf={this.props.moveShelf} />
                    <Shelf value='read' title='Read' books={this.props.books} moveShelf={this.props.moveShelf} />
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        )
    }
}

export default MainPage;