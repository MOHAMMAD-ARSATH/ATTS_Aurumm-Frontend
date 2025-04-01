import { Card, Button } from "react-bootstrap";

import CardGreenBg from "../assets/CardGreenBg.png";
import CardOrangeBg from "../assets/CardOrangeBg.png";
import CardBlueBg from "../assets/CardBlueBg.png";

const cardData = [
  {
    id: "au-pay",
    productName: "AU PAY",
    description: "An Exclusive Gold Savings Scheme Payment App",
    content:
      "Make gold scheme payments simple and easy for your customers with AU Pay - the ultimate jewellery finance partner.",
    bgImage: CardGreenBg,
    btnColor: "#28a745", 
    bgColor: "rgba(40, 167, 69, 0.15)", 
  },
  {
    id: "au-sales",
    productName: "AU SALES",
    description: "All-Round Inventory Management Assistant",
    content:
      "If you're looking for a holistic store management solution, then AU Sales is the only app you need!",
    bgImage: CardOrangeBg,
    btnColor: "#f0ad4e",
    bgColor: "rgba(240, 173, 78, 0.15)"
  },
  {
    id: "au-shop",
    productName: "AU SHOP",
    description: "Give Your Fine Jewellery A Sleek Online Platform!",
    content:
      "Are you ready to give your customers the ultimate online jewellery shopping experience? Discover AU Shop and let's begin!",
    bgImage: CardBlueBg,
    btnColor: "#007bff", 
    bgColor: "rgba(0, 123, 255, 0.15)", 
  },
];

const AUCards = () => {
  return (
    <div className="au-cards-section" id="au-cards">
      <h4 className="card-heading1">FEATURED APPS</h4>
      <h2 className="card-heading2">AURUMM for Your Jewellery Business</h2>

      <div className="au-cards-container">
        {cardData.map((card, index) => (
          <Card
            key={index}
            id={card.id} 
            className={`au-card ${card.id}`}
            style={{ backgroundColor: card.bgColor }}
          >
            <div className="au-card-header">
              <img
                src="https://aurumm.co/_next/static/media/symbol.2d89ec5c.svg"
                alt="icon"
                className="au-card-logo"
              />
              <Card.Title className="au-card-title">
                {card.productName}
              </Card.Title>
            </div>
            <hr style={{ backgroundColor: card.btnColor }} />
            <Card.Body className="au-card-content">
              <Card.Text className="au-card-text">{card.description}</Card.Text>
              <div className="au-card-extra">{card.content}</div>
            </Card.Body>
            <div className="au-card-footer">
              <Button
                className="au-get-started-btn"
                style={{ backgroundColor: card.btnColor }}
              >
                Get Started <span className="au-button-icon">→</span>
              </Button>
            </div>
            <img src={card.bgImage} alt="bg" className="au-card-bg" />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AUCards;