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
  const [bfsearch,setbfsearch] = useState([]);

  //useEffect to handle to loading books
  useEffect(()=>{
    const x = async ()=>{
      const books = await BooksAPI.getAll();
      setbooklist(books);
    }; x();
  },[]);

  // change book shelf
  const change_shelf_book = async(book,book_shelf) =>{
    await BooksAPI.update(book,book_shelf);
    const x = async ()=>{
      const books = await BooksAPI.getAll();
      setbooklist(books);
    }; x();
    handle_book_search(search);
  };

  // search books
  const handlesearch = async(e)=>{
    const search = await (e.target.value);
    setsearch(search);
    handle_book_search(search);
  }

  const handle_book_search = async(search)=>{
    const res = await BooksAPI.search(search);
    try {
      if(res && !res.error){
        setbfsearch(res.map((books_search)=> {
          booklist?.forEach((book)=> {
            if(books_search.id === book.id) books_search.shelf = book.shelf ;
          })
          return books_search;
        }));
        if(res?.error){
          setbfsearch([]);
        }
      }
      else{
        setbfsearch([]);
      }
    }
    catch (error) {
      setbfsearch([]);
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

          <Route  path = "/search" element={<Search handlesearch={handlesearch} 
            search={search} bfsearch={bfsearch} change_shelf_book={change_shelf_book} />}>
          </Route>
        </Routes>
      </div>
  );
}

export default App;
