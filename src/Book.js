import React, { Component } from 'react';

class Book extends Component {

    render() {
        const authorsList = [];
        if (this.props.book.authors) {
            for (const author of this.props.book.authors) {
                authorsList.push(author)
            }
        }

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        width: 128, height: 193,
                        backgroundImage: `url('${this.props.book.imageLinks && this.props.book.imageLinks.thumbnail}')`
                    }}></div>
                    <div className="book-shelf-changer">
                        <select
                            onChange={(event) => (
                                this.props.moveShelf(this.props.book, event.target.value)
                            )}
                            value={this.props.currentShelf}
                        >
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{
                    authorsList.map(author => (
                        <div key={author}>{author}</div>
                    ))}</div>
            </div>
        )
    }
}

export default Book;