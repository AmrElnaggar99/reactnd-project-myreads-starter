import React, { Component } from 'react';
import Book from './Book';
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom';

class SearchPage extends Component {
    state = {
        query: '',
        shownBooks: []
    }

    updateQuery = (query) => {
        this.setState({
            query: query,
        })
        this.updateShownBooks(query);
    }

    updateShownBooks = (query) => {
        if (query) {
            BooksAPI.search(query).then((shownBooks) => {
                if (shownBooks.error) {
                    this.setState({ shownBooks: [] })
                } else {
                    this.setState({ shownBooks })
                }
            })
        } else {
            this.setState({ shownBooks: [] })
        }
    }
    render() {

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">

                        <input
                            value={this.state.query}
                            onChange={(e) => this.updateQuery(e.target.value)}
                            type="text" placeholder="Search by title or author" />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {
                            this.state.shownBooks && this.state.shownBooks.map(
                                (book) => {
                                    let shelf = "none";
                                    this.props.books.map(original_book => {
                                        if (book.id === original_book.id) {

                                            shelf = original_book.shelf;
                                        }
                                    }

                                    )
                                    return (
                                        <Book key={book.id} book={book} currentShelf={shelf} moveShelf={this.props.moveShelf} />
                                    )
                                }
                            )
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchPage;