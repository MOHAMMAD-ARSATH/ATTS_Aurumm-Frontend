import React, { useEffect, useState } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";

import StarFeature from "../assets/StarFeature.png";

const featureData = [
  {
    logo: "https://aurumm.co/_next/static/media/icon_4.62d8bce5.svg",
    name: "All-Round Assistance",
    description:
      "Crafted for excellence, AURUMM is a premium end-to-end software suite that is designed for jewellery stores of all sizes.",
  },
  {
    logo: "https://aurumm.co/_next/static/media/icon_1.5e6099f9.svg",
    name: "Relationship Management",
    description:
      "Stay tuned with your customers and vendors to keep their data safe and sound - with AURUMM, anything is possible!",
  },
  {
    logo: "https://aurumm.co/_next/static/media/icon_2.a07dbe9f.svg",
    name: "Technical Support",
    description:
      "Our dedicated team of professionals are available anytime throughout the year to resolve all your queries!",
  },
  {
    logo: "https://aurumm.co/_next/static/media/icon_3.0b2e7924.svg",
    name: "Stay Ahead",
    description:
      "We’re always keeping up with the latest trends and updating our platforms - so you’ll always have the edge over your competitors!",
  },
];

const stats = [
  { label: "Clients", value: 50, suffix: "+ " },
  { label: "Downloads", value: 10, suffix: "K + " },
  { label: "Revenue Increase", value: 72, suffix: "% " },
];

const FeatureCards = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prevCounts) =>
        prevCounts.map((count, index) =>
          count < stats[index].value ? count + 1 : stats[index].value
        )
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="feature">
      <Container className="feature-container">
        <h4 className="feature-heading1">WE'RE HERE TO HELP</h4>
        <h2 className="feature-heading2">
          This is The Future of Jewellery Store Management
        </h2>
        <Row className="justify-content-center">
          {featureData.map((feature, index) => (
            <Col key={index} xs={12} md={6} lg={3} className="mb-4">
              <Card className="feature-card">
                <Card.Body>
                  <img
                    src={feature.logo}
                    alt={feature.name}
                    className="feature-logo"
                  />
                  <Card.Title className="feature-title">
                    {feature.name}
                  </Card.Title>
                  <Card.Text className="feature-description">
                    {feature.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="justify-content-center mt-4">
          <Col xs={12} md={8} lg={6} className="feature-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-box">
                <span className="stat-number">
                  {counts[index]}
                  {stat.suffix}
                  <sup>
                    <img src={StarFeature} alt="Star Degree" className="stat-degree" />
                  </sup>
                </span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FeatureCards;