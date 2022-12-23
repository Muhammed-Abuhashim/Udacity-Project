# Udacity-Project
MyReads: A Book Tracking App : MyReads is a bookshelf application that allows us to add, 
select and categorize books we have read, are currently reading, or want to read.

This is the final assessment project for Udacity's React Fundamentals course.

To get started developing right away:

install all project dependencies with npm install
start the development server with cd my-app
and then with npm start

# What You're Getting
```
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. 
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for the app.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles.
    ├── index.js # It is used for DOM rendering only.
    └── components # they are children connected with each other and their parent app.js.
            ├── book_shelf.js # it puts every book on its own shelf
            ├── books.js # It contains books and their details of where they belong to which shelf, their name and author
            ├── list_book.js # It contains books and puts each on its own shelf
            └── search.js # It searches for each book and places it on a shelf determined by the user
```


