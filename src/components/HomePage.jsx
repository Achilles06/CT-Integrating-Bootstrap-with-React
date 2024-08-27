import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import './HomePage.css';
import welcomeImage from '../assets/welcome-image.jpg'; // Path to the image

const HomePage = () => {
    return (
        <div className="homepage-container bordered">
            <Image src={welcomeImage} fluid className="welcome-image" alt="Welcome" />

            <h1>Welcome to Our Shop!</h1>
            <Button variant="primary" className="shop-now-btn shadow-sm">
                Shop Now
            </Button>

            {/* Add a card to display content */}
            <Card className="mt-5">
                <Card.Body>
                    <Card.Title>Featured Product</Card.Title>
                    <Card.Text>
                        Check out our latest products and promotions. Don't miss out on the best deals!
                    </Card.Text>
                    <Button variant="success">View Products</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default HomePage;
