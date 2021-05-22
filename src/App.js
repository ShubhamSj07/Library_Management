import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Categories from "./Categories";
import Catalog from "./Catalog.jsx";
//import { val } from './Categories';

import { BooksContext } from "./context/BooksContext";

//data
import data from "./data/books.json";

const App = () => {
  const [items, setItems] = useState(data);

  const filterItems = categoryItem => {
    const updatedItem = data.filter(item => {
      return categoryItem === item.category;
    });

    setItems(updatedItem);
    // setCount(val);
    //console.log("CAT "+cat)
  };

  return (
    <>
      <BooksContext.Provider value={{ items }}>
        <div className="App">
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          ></link>
          <Header />
          <Categories filterItems={filterItems} />
          <div className="container">
            <br />
            <div>
              <p id="category">POPULAR BOOKS</p>
              <hr />
              <br />
            </div>
            <div className="row" id="catalog">
              <Catalog />
            </div>
          </div>
        </div>
      </BooksContext.Provider>
    </>
  );
};

export default App;
