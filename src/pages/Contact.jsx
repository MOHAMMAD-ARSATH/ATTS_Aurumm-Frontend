import React from "react";
import ContactForm from "../components/ContactForm";

import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "../components/Footer";
import CustomNavbar from "../components/UserNav";

const Contact = () => {
  const breadcrumbsPaths = [
    { label: "Home", link: "/" },
    { label: "Contact US" },
  ];

  return (
    <div>
      <CustomNavbar />
      <Breadcrumbs paths={breadcrumbsPaths} />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;