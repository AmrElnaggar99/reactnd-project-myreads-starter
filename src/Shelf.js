import React, { Component } from 'react';
import Book from './Book';

class Shelf extends Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.filter((book) => (book.shelf === this.props.value)).map((book) => (
                            <li key={book.id}>
                                <Book book={book} moveShelf={this.props.moveShelf} currentShelf={this.props.value} />
                            </li>
                        ))}

                    </ol>
                </div>
            </div>
        )
    }
}


export default Shelf