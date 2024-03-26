import React, { Component } from 'react'
import Book from './book'


export default class BookShelf extends Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.map(book =>
                            <li key={book.id}>
                                <Book book={book} allbooks={this.props.allbooks} updateShelf={this.props.updateShelf} />
                            </li>)
                        }
                    </ol>
                </div>
            </div>
        )
    }
}