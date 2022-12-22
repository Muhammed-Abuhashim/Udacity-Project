import React from "react";
import {Link} from "react-router-dom";
import Bookshelf from "./book_shelf";

const ListBooks = ({booklist,change_shelf_book}) => {
    return(
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div> 
              <Bookshelf shelf={"Currently Reading"} booklist={booklist} shelfname={"currentlyReading"} change_shelf_book={change_shelf_book}/>
              <Bookshelf shelf={"Want to Read"} booklist={booklist} shelfname={"wantToRead"} change_shelf_book={change_shelf_book}/>
              <Bookshelf shelf={"Read"} booklist={booklist} shelfname={"read"} change_shelf_book={change_shelf_book}/>
            </div>
          </div>
          <div className="open-search">
            <Link to="/search">
                Add a book
            </Link>
          </div>
        </div>
    )
}

export default ListBooks;

