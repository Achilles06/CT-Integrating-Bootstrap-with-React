import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './NotFound.css';
import notFoundImage from '../assets/not-found-image.jpg'; // Placeholder image

const NotFound = () => {
    return (
        <Container className="not-found-container text-center">
            <Row className="align-items-center">
                <Col md={6} className="not-found-text">
                    <h1 className="display-4 text-danger">404</h1>
                    <h2 className="text-dark">Page Not Found</h2>
                    <p className="text-muted">
                        Oops! The page you're looking for doesn't exist or has been moved.
                    </p>
                    <NavLink to="/" className="nav-link">
                        <Button variant="primary">Go Back to Home</Button>
                    </NavLink>
                </Col>
                <Col md={6}>
                    <Image src={notFoundImage} fluid alt="Page not found" className="not-found-image" />
                </Col>
            </Row>
        </Container>
    );
};

export default NotFound;
