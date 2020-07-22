import React from 'react';
import SearchPage from './SearchPage';
import MainPage from './MainPage';
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom';
import './App.css'

// App would host the list of books in its state and pass it to the MainPage and SearchPage.
// So, App would also host the methods that edit that state like moveShelf.
class BooksApp extends React.Component {
  state = {
    books: []
  }

  moveShelf = (book, shelf) => {
    // This function is defined using fat arrow notation to avoid binding the "this" keyword.
    BooksAPI.update(book, shelf)

      .then(BooksAPI.getAll)
      .then((books) => {
        this.setState({ books }) // means {books:books}
      })

  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books }) // means {books:books}
    })
  }
  render() {
    return (
      <div className="app">
        <Route path='/' exact render={() => (
          <MainPage books={this.state.books} moveShelf={this.moveShelf} />
        )} />
        <Route path='/search' render={() => (
          <SearchPage books={this.state.books} moveShelf={this.moveShelf} />
        )} />
      </div>
    )
  }
}

export default BooksApp
