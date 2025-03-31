import { Container } from "react-bootstrap";

import client1 from "../assets/Client1.png";
import client2 from "../assets/Client2.png";
import client3 from "../assets/Client3.png";
import client4 from "../assets/Client4.png";
import client5 from "../assets/Client5.png";

const clientData = [
  { image: client1, name: "Sayar Jewellers" },
  { image: client2, name: "Shanthi Jewellery" },
  { image: client3, name: "Sri Kandan Thangamaligai" },
  { image: client4, name: "Swamy Jewellery" },
  { image: client5, name: "Thangalakshmi Jewellery" },
];

const ClientsSlider = () => {
  return (
    <Container className="clients-slider-container">
      <h4 className="feature-heading1">OUR CLIENTS</h4>
      <h2 className="clients-heading">Brands That Trust Us!</h2>
      <div className="clients-slider">
        <div className="clients-track">
          {[...clientData, ...clientData].map((client, index) => (
            <div key={index} className="client-card">
              <img
                src={client.image}
                alt={client.name}
                className="client-image"
              />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ClientsSlider;