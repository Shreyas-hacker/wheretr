import React from "react";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'
import Card from './Card'

const Cards = (props)=>{
    return (
        <div>
            {props.category.map((cat)=>{
                return (
                    <div className="section">
                        <div className="title">
                            <h3>{cat.Cluster}</h3>
                            <div className="underline"></div>
                        </div>
                        <Container>
                            <Row xs="auto" xl={4}>
                                {cat.Location.map((location)=>{
                                return <Card key={location.id} category={location.loc}/>
                            })}
                            </Row>
                        </Container>
                    </div>
                )
            })}
        </div>
    )
}

export default Cards