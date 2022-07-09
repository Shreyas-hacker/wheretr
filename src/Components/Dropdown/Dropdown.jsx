import React, { useState } from "react";

const DropdownList = ({data})=>{
    const [open,setOpen] = useState(false);
    const [selection,setSelection] = useState([]);

    return (
        <div className="dropdown">
            <div className="dropdown-btn">Choose One</div>
            <div className="dropdown-content">
                {data.map((value)=>{
                    return (
                        <div className="dropdown-item">
                            {value.Cluster}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

//asalaam may allah bless us with this drop down list
export default DropdownList