import React, { useState } from "react";

const DropdownList = ({data})=>{
    const [open,setOpen] = useState(false);
    const [selection,setSelection] = useState([]);

    return (
        <div className="dropdown">
            <button className="dropdown-content">Dropdown</button>
            <div id="myDropdown" className="dropdown-content">
                
            </div>
        </div>
    )
}

export default DropdownList