import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "./book";

export default class Search extends Component {
    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/'>{<div className="close-search" onClick={this.props.clearSearchBooks}></div>}</Link>
                    <div className="search-books-input-wrapper">

                        <input type="text" placeholder="Search by title or author" onChange={event => this.props.searchB(event.target.value)} />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.props.books.length > 0 && (
                            this.props.books.map(book =>
                                <li key={book.id}>
                                    <Book book={book} allbooks={this.props.allbooks} updateShelf={this.props.updateShelf} />
                                </li>)
                        )}
                    </ol>
                </div>
            </div>
        )
    }
}