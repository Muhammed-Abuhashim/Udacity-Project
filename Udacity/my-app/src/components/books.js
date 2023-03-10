import React from 'react'
import PropTypes from 'prop-types'

const Books = ({Book,change_shelf_book}) => { 
    return (
        <li>
            <div className="book">
            <div className="book-top">
                <div
                className="book-cover"
                style={{
                    width: 128,
                    height: 193,
                    backgroundImage:
                    `url(${Book?.imageLinks?.smallThumbnail})`,
                }}
                ></div>
                <div className="book-shelf-changer">
                <select value={Book?.shelf? Book?.shelf:'none'} onChange={(e)=>change_shelf_book(Book,e.target.value)}>
                    <option value="Nothing" disabled>
                    Move to...
                    </option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
                </div>
            </div>
            <div className="book-title">{Book?.title}</div>
            <div className="book-authors">{Book?.authors}</div>
            <div className="book-authors">{Book?.shelf? Book?.shelf:'none'}</div>
            </div>
        </li>
    )
}

Books.propTypes = {
    Book: PropTypes.element.isRequired
  };

export default Books;
