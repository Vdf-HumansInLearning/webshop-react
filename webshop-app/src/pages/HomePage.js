import Button from "react-bootstrap/esm/Button";
import { LinkContainer } from "react-router-bootstrap";
import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponent";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import '../css/HomePage.css';

function HomePage() {
    return (
        <>
            <NavbarComponent />
            <main className="main pt-5">
                <Row className="main-content d-flex justify-content-start align-items-center">
                    <Col xs={1}>
                    </Col>
                    <Col md={4} sm={8} xs={11}>
                        <h3 className="text-white">Discover our offers for mobile phones</h3>
                        <LinkContainer to="/phones"><Button variant="outline-light" className="mt-2">See more</Button></LinkContainer>
                    </Col>
                    <Col xs={7}></Col>
                </Row>
                <div className="homepage-footer">
                    <FooterComponent/>  
                </div>
            </main>
        </>
    );
}

export default HomePage;