## Project Contents

```bash ______________________
├─ My Reads: A Book Lending App
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. 
├── public
│   ├── favicon.ico # React Icon.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. 
    ├── App.js # This is the root of the app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── book.js # Handle book component. 
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── bookshelf.js # Handle shelf component
    ├── home.js # Main page of the site
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles.
    ├── index.js # It is used for DOM rendering only.
    └── search.js # Handle search page components
```

# MyReads Project Description

  The project is a website like as a library which has 3 books shelves, each shelf has its specifically own books which sorted by how the user thinking and decide to the book. and can search about books and added it to his/her site library. The user can change book shelf by select the shelf from drop menu.


## Get Start

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`


## Backend Server

The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods will needed to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

    ### `getAll`

        Method Signature:

        ```js
        getAll()
        ```

        * Returns a Promise which resolves to a JSON object containing a collection of book objects.
        * This collection represents the books currently in the bookshelves in your app.

    ### `update`

        Method Signature:

        ```js
        update(book, shelf)
        ```

        * book: `<Object>` containing at minimum an `id` attribute
        * shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
        * Returns a Promise which resolves to a JSON object containing the response data of the POST request

    ### `search`

        Method Signature:

        ```js
        search(query)
        ```

        * query: `<String>`
        * Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
        * These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important About Search
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.




