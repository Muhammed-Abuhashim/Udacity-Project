import React, { useEffect } from 'react'
import { useState } from "react";
import { Routes } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import "./App.css";
import {Route} from "react-router-dom";
import Search from './components/search';
import ListBooks from './components/list_books';



function App() {
  const [booklist,setbooklist] = useState([]);
  const [search,setsearch] = useState([]);
  const [booklist_for_search,setbooklist_for_search] = useState([]);

  //useEffect to handle to loading books
  useEffect(() => {
    BooksAPI.getAll().then((books) => {
      setbooklist(books);
    });
  }, []);

  // change book shelf
  const change_shelf_book = async(book,book_shelf) =>{
    await BooksAPI.update(book,book_shelf);
    const x = async ()=>{
      const books = await BooksAPI.getAll();
      setbooklist(books);
    }; x();
    // handle_book_search(search);
  };

  // search books
  const handlesearch = async(e)=>{
    const search = await (e.target.value);
    setsearch(search);
    handle_book_search(search);
  }


  // for the last comment in review here app.js the parent file and i have to state booklist and booklist_for_search and i send everyone to Booklist(main) and searchPage
  const handle_book_search = async(search)=>{
    const res = await BooksAPI.search(search);
    try {
      if(res && !res.error){
        setbooklist_for_search(res.map((books_search)=> {
          booklist?.forEach((book)=> {
            if(books_search.id === book.id) books_search.shelf = book.shelf ;
          })
          return books_search;
        }));
        if(res?.error){
          setbooklist_for_search([]);
        }
      }
      else{
        setbooklist_for_search([]);
      }
    }
    catch (error) {
      setbooklist_for_search([]);
    }
  }

  return (
      <div>
        <Routes>
          <Route  path = "/" 
            element={
              <>
                <ListBooks booklist={booklist} change_shelf_book={change_shelf_book}/>
              </>
            }>
          </Route>

          <Route  path = "/search" element={<Search booklist_for_search={booklist_for_search} change_shelf_book={change_shelf_book} 
          handlesearch={handlesearch} search={search} />}>
          </Route>
        </Routes>
      </div>
  );
}

export default App;
