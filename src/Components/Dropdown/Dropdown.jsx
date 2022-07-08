import React from "react";
import { DropdownButton } from "react-bootstrap";

const Dropdown = ()=>{
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default Dropdown