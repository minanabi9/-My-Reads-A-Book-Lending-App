import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
// import BookShelf from './bookshelf'
import { getAll, search, update } from './BooksAPI'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './home'
import Search from './search'

class BooksApp extends React.Component {
  state = {
    all: [],
    currentlyReading: [],
    wantToRead: [],
    read: [],
    searchBooks: []
  }

  componentDidMount() {
    getAll().then(data => {
      this.setState({
        all: data,
        currentlyReading: data.filter(book => book.shelf === 'currentlyReading'),
        wantToRead: data.filter(book => book.shelf === 'wantToRead'),
        read: data.filter(book => book.shelf === 'read')
      })
    })
  }

  updateShelf = (book, shelf, prev) => {
    book.shelf = shelf
    update(book, shelf).then(() => {
      if (prev === 'currentlyReading') {
        this.setState({ currentlyReading: [...this.state.currentlyReading].filter(b => b.id !== book.id) })
      } else if (prev === 'wantToRead') {
        this.setState({ wantToRead: [...this.state.wantToRead].filter(b => b.id !== book.id) })
      } else if (prev === 'read') {
        this.setState({ read: [...this.state.read].filter(b => b.id !== book.id) })
      }
      if (book.shelf === 'currentlyReading') {
        this.setState({ currentlyReading: [...this.state.currentlyReading, book] })
      } else if (book.shelf === 'wantToRead') {
        this.setState({ wantToRead: [...this.state.wantToRead, book] })
      } else if (book.shelf === 'read') {
        this.setState({ read: [...this.state.read, book] })
      } else {
        this.setState({ all: [...this.state.all].filter(b => b.id !== book.id) })
      }
    })
  }

  searchB = (query) => {
    if (query === '') {
      this.clearSearchBooks()
    } else {
      search(query)
        .then((books) => {
          this.setState({
            searchBooks: books
          })
        })
        .catch((error) => this.clearSearchBooks())
    }
  }

  clearSearchBooks = () => this.setState({ searchBooks: [] })

  handleSearchUpdateShelf = (book, shelf, prev) => {
    book.shelf = shelf
    update(book, shelf).then(() => {
      shelf!=='none'&&this.setState({ searchBooks: [...this.state.searchBooks].filter(b => b.id !== book.id), all: [...[...this.state.all].filter(b => b.id !== book.id), book] })
      if ([...this.state.currentlyReading].filter(b => b.id === book.id).length !== 0) {
        this.setState({ currentlyReading: [...this.state.currentlyReading].filter(b => b.id !== book.id) })
      } else if ([...this.state.wantToRead].filter(b => b.id === book.id).length !== 0) {
        this.setState({ wantToRead: [...this.state.wantToRead].filter(b => b.id !== book.id) })
      } else if ([...this.state.read].filter(b => b.id === book.id).length !== 0) {
        this.setState({ read: [...this.state.read].filter(b => b.id !== book.id) })
      }
      if (book.shelf === 'currentlyReading') {
        this.setState({ currentlyReading: [...this.state.currentlyReading, book] })
      } else if (book.shelf === 'wantToRead') {
        this.setState({ wantToRead: [...this.state.wantToRead, book] })
      } else if (book.shelf === 'read') {
        this.setState({ read: [...this.state.read, book] })
      } else {
        this.setState({all: [...this.state.all].filter(b => b.id !== book.id)})
      }
    })
  }

  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home currentlyReading={this.state.currentlyReading} wantToRead={this.state.wantToRead} read={this.state.read} updateShelf={this.updateShelf} allbooks={this.state.all} />
            </Route>
            <Route exact path='/search'>
              <Search searchB={this.searchB} books={this.state.searchBooks} updateShelf={this.handleSearchUpdateShelf} clearSearchBooks={this.clearSearchBooks} allbooks={this.state.all} />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default BooksApp
