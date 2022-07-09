import React from 'react';
import "./App.css"
import SearchBar from "./Components/SearchBar/SearchBar"
import DropdownList from "./Components/Dropdown/Dropdown"
import Header from "./Layouts/Header"
import {Halls} from "./api/halls"
import {Categories} from "./api/categories"

function App() {
  return (
    <div className='App'>
        <Header/>
        <div className='glass'>
          <DropdownList data={Categories}/>
          <SearchBar placeholder="Where you want go la" data={Halls}/>
        </div>
    </div>
  );
}

export default App;
