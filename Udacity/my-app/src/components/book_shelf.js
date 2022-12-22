import React from 'react'
import Books from './books';

const Bookshelf = ({shelf,booklist,shelfname,change_shelf_book}) => {

  const shelf_name = booklist.filter(
    (bookshelf)=>(bookshelf.shelf === shelfname))

    return(
        <div className="bookshelf">
                <h2 className="bookshelf-title">{shelf}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {shelf_name.map((Book)=>(
                      <Books key ={Book.id} Book={Book} change_shelf_book={change_shelf_book}/>
                    ))}
                  </ol>
                </div>
              </div>
    )
}

export default Bookshelf;