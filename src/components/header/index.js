import React from 'react'
import { Row, Col, Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <Row className="ml-0 mr-0 justify-content-md-center bg-dark">
            <Col xs={8}>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand as={NavLink} to="/">Navbar</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link exact as={NavLink} to="/">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/news">News</Nav.Link>
                        <Nav.Link as={NavLink} to="/profile">Profile</Nav.Link>
                        <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
                    </Nav>
                </Navbar>
            </Col>
        </Row>
    )
}