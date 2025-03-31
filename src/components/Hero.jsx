import { Container, Row, Col } from "react-bootstrap";

const Hero = () => {
  return (
    <Container className="hero-container">
      <Row className="align-items-center">
        <Col
          lg={6}
          md={12}
          className="hero-text d-flex flex-column align-items-end text-end"
        >
          <div>
            <h6>JEWELLERY STORE APP SUITE</h6>
            <h2>Simplified Operations,</h2>
            <h2>Increased Profits.</h2>
            <p>
              AURUMM revolutionizes the way jewellery stores operate, offering
              seamless solutions for gold saving schemes, online sales
              platforms, and inventory management. Streamline operations,
              increase productivity, and double your revenue with our
              longstanding cutting-edge solutions!
            </p>
            <p>
              Welcome to a future of innovation, efficiency, and brilliance.
            </p>
            <p>Welcome to AURUMM.</p>
          </div>
        </Col>

        <Col lg={6} md={12} className="hero-image">
          <img
            src="https://aurumm.co/_next/static/media/new_ausale.20a8529c.svg"
            alt="Jewellery Software"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;