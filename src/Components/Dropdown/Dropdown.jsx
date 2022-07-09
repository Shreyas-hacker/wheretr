import React, { useState } from "react";
import './Dropdown.css'
import SearchBar from '../SearchBar/SearchBar';
import {Merging} from '../../api/merging'
const DropdownList = ({data,selected,setSelected})=>{
    const [isActive, setIsActive] = useState(false);
    const handleChoose = (e)=>{
        setSelected(e.Cluster)
        setIsActive(false)
    }
    const getData = (Data)=>{
        for(const element of Data){
            if(element.name===selected){
                return element.data
            }
        }
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
                                <div key={value.id} onClick={()=>handleChoose(value)} className="dropdown-item">
                                    {value.Cluster}
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>
            <SearchBar placeholder="Where you want go la" data={getData(Merging)}/>
        </div>
    )
}

//asalaam may allah bless us with this drop down list
export default DropdownList