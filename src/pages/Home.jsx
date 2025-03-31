import UserNav from "../components/UserNav";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import AUCards from "../components/AUCards";
import FeatureCards from "../components/FeatureCards";
import ClientsSlider from "../components/ClientsSlider";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <UserNav />
      <Banner />
      <Hero />
      <AUCards />
      <FeatureCards />
      <ClientsSlider />
      <Footer />
    </div>
  );
};

export default Home;
