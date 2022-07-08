import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import React, { useState } from 'react';


const Cards = (props)=>{
  const [isHovering,setIsHovering] = useState(false);

  const handleMouseEnter = ()=>{
    setIsHovering(true);
  }
  const handelMouseLeave = ()=>{
    setIsHovering(false);
  }
  return (
      <>
        <Col>
          <Card
            bg={'dark'}
            key={"Dark"}
            text={'dark' === 'light' ? 'dark' : 'white'}
            style={{ width: '12rem',fontSize:"1.5rem" ,marginTop: "2rem", marginLeft:"3rem", boxShadow:isHovering ? " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)":""}}
            className="mb-2"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handelMouseLeave}
          >
          <Card.Body>
              <Card.Text>
                {props.category}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </>
  )
  }

export default Cards;
