import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner">
      <Container className="banner-content">
        <h1>360° Software Solutions for</h1>
        <h1>
          Your <span className="highlight">JEWELLERY</span> Store
        </h1>
        <p>
          Take Your Jewellery Store To The Next Level With AURUMM - The Ultimate
          Software Suite
        </p>
        <Link to="/contact" className="no-underline">
          <Button className="banner-button">Schedule A Demo</Button>
        </Link>
      </Container>
    </div>
  );
};

export default Banner;