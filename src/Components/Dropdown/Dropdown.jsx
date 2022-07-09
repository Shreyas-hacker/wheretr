import React, { useState } from "react";
import './Dropdown.css'
import SearchBar from '../SearchBar/SearchBar';
import {Halls} from '../../api/halls'
const DropdownList = ({data,selected,setSelected})=>{
    const [isActive, setIsActive] = useState(false);
    const handleChoose = (e)=>{
        setSelected(e.Cluster)
        setIsActive(false)
    }
    return (
        <div className="together">
            <div className="dropdown">
                <div className="dropdown-btn" onClick={()=>setIsActive(!isActive)}>{selected}
                    <span className="fa fa-caret-down"></span>
                </div>
                {isActive && (
                    <div className="dropdown-content">
                        {data.map((value)=>{
                            return (
                                <div onClick={()=>handleChoose(value)} className="dropdown-item">
                                    {value.Cluster}
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>
            <SearchBar placeholder="Where you want go la" data={Halls}/>
        </div>
    )
}

//asalaam may allah bless us with this drop down list
export default DropdownList