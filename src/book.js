import React, { Component } from 'react'

export default class Book extends Component {
    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${typeof (this.props.book.imageLinks) !== "undefined" && typeof (this.props.book.imageLinks.thumbnail) !== "undefined" ? this.props.book.imageLinks.thumbnail : 'https://books.google.com/books?id=gfg13CM_kU8C&pg=PP1&img=1&zoom=5&sig=LsTwGVAsy_qWYMPM6HVDTPAMokg'})` }}></div>
                    <div className="book-shelf-changer">
                        <select value={this.props.allbooks.filter(b => b.id === this.props.book.id).length !== 0 ? this.props.allbooks.filter(b => b.id === this.props.book.id)[0].shelf : 'none'} onChange={event => this.props.updateShelf(this.props.book, event.target.value, this.props.book.shelf)}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.authors.join(', ')}</div>
            </div>
        )
    }
}