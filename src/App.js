import React from 'react';
import "./App.css"
import SearchBar from "./Components/SearchBar/SearchBar"
import Header from "./Layouts/Header"
import {Halls} from "./api/halls"
import Dropdown from './Components/Dropdown/Dropdown';

function App() {
  return (
    <div className='App'>
        <Header/>
        <div className='glass'>
          <Dropdown/>
          <SearchBar placeholder="Where you want go la" data={Halls}/>
        </div>
      {/* <div className='Choices'>
        <Cards category={halls}/>
      </div> */}
    </div>
  );
}

export default App;
