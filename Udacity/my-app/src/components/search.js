import React from "react";
import {Link} from "react-router-dom";
import Books from "./books";

const Search = ({handlesearch,search,booklist_for_search,change_shelf_book}) => {
    return(
            <div className="search-books">
              <div className="search-books-bar">
                <Link to="/" className="close-search">Close</Link>
                <div className="search-books-input-wrapper">
                  <input
                    type="text"
                    placeholder="Search by title, author, or ISBN"
                    onChange={handlesearch}
                  />
                </div>
              </div>
              <div  className="search-books-results">
                <ol className="books-grid">
                    {
                      booklist_for_search.map((Book)=>(
                        <Books key={Book.id} Book={Book} change_shelf_book={change_shelf_book} />
                      ))
                    }
                </ol>
              </div>
            </div>
          )    
}

export default Search; 
