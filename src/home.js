import React, { Component } from "react";
import { Link } from "react-router-dom";
import BookShelf from "./bookshelf";

export default class Home extends Component {
    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>

                        <BookShelf shelfTitle='Currently Reading' books={this.props.currentlyReading} allbooks={this.props.allbooks} updateShelf={this.props.updateShelf} />
                        <BookShelf shelfTitle='Want to Read' books={this.props.wantToRead} allbooks={this.props.allbooks} updateShelf={this.props.updateShelf} />
                        <BookShelf shelfTitle='Read' books={this.props.read} allbooks={this.props.allbooks} updateShelf={this.props.updateShelf} />

                    </div>
                </div>

                <Link to='/search'>{<div className="open-search"></div>}</Link>

            </div>
        )
    }
}