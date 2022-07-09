import React,{useState} from 'react';
import "./App.css"
import DropdownList from "./Components/Dropdown/Dropdown"
import Header from "./Layouts/Header"
import {Categories} from "./api/categories"

function App() {
  const [selected,setSelected] = useState("Choose One");
  return (
    <div className='App'>
        <Header/>
        <div className='glass'>
          <DropdownList data={Categories} selected={selected} setSelected={setSelected}/>
        </div>
    </div>
  );
}

export default App;
