import React from 'react'
import { Image, Container,Row,Col } from 'react-bootstrap';
import { useState } from 'react';
import home from "./home.jpg"
import ContactUs from "./ContactUs"

import "../App.css"
const LandingPage = () => {


    return (
        <div>

        <Container fluid className="home">
            <Row className="row">
                <Col md="auto" className="col">
                    <Image src={home} fluid className="frontimage"/>
                </Col>
            </Row>
            </Container>
            <ContactUs/>
            
        </div>
        
    );
}

export default LandingPage;