import React,{useState} from 'react';
import SearchIcon from "@mui/icons-material/Search"
import CloseIcon from "@mui/icons-material/Close"

import "./SearchBar.css"

const SearchBar = ({placeholder,data})=>{
    const [filteredData,setFilteredData] = useState([]);
    const [wordEntered,setWordEntered] = useState("");

    const handleFilter = (event)=>{
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value)=>{
            return value.loc.toLowerCase().includes(searchWord.toLowerCase())
        });

        if(searchWord===""){
            setFilteredData([])
        }else{
            setFilteredData(newFilter)
        }
    }
    const clearInput = ()=>{
        setFilteredData([]);
        setWordEntered("");
    }

    return(
        <div className='search'>
            <div className='searchInputs'>
                <input type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter}/>
                <div className='searchIcon'>
                    {filteredData.length===0 ? (
                        <SearchIcon/>
                    ) : (
                        <CloseIcon id="clearBtn" onClick={clearInput}/>
                    )}
                </div>
            </div>
            <div>
                {filteredData.length!==0 && (
                    <div className='dataResult'>
                        {filteredData.slice(0,15).map((value,key)=>{
                            return(
                                <div className='dataItem' target="_blank">
                                    <p>{value.loc}</p>
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>
        </div>
    )
}

export default SearchBar