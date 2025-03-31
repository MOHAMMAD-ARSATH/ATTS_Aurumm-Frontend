import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

const ContactForm = () => {
  const API_URL = process.env.REACT_APP_API_URL;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "+91 ",
    budget: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const formatBudget = (value) => {
    return value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const validate = () => {
    let newErrors = {};

    if (!/^[a-zA-Z\s]{10,}$/.test(formData.name)) {
      newErrors.name =
        "Name must be at least 4 characters and contain only letters.";
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!/^\+91\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be in +91XXXXXXXXXX format.";
    }

    if (!formData.budget.match(/^\d{1,3}(,\d{3})*$/)) {
      newErrors.budget = "Enter a valid budget amount (e.g., 10,000).";
    }

    if (formData.message.length < 4) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name === "budget") {
      value = formatBudget(value);
    }

    if (name === "phone") {
      if (!value.startsWith("+91")) value = "+91";
      value = value.replace(/[^\d+]/g, "").slice(0, 13);
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post(`${API_URL}/api/contacts`, formData);

        if (response.status === 201) {
          toast.success("✅ Form submitted successfully!", {
            position: "top-center",
            autoClose: 3000,
          });
          setFormData({
            name: "",
            email: "",
            phone: "+91",
            budget: "",
            message: "",
          });
        } else {
          toast.error("⚠️ Submission failed. Please try again.", {
            position: "top-center",
            autoClose: 3000,
          });
        }
      } catch (error) {
        toast.error("❌ Error submitting form. Please try again.", {
          position: "top-center",
          autoClose: 3000,
        });
      }
    }
  };

  return (
    <Container className="contact-container">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />

      <h2 className="contact-heading">How Can We Help You?</h2>
      <hr className="contact-divider" />

      <Row className="mt-4 d-flex justify-content-between align-items-start">
        <Col md={5} className="contact-left">
          <h3>Start Today!</h3>
          <p>Ready to take the leap? Come say hi, and we'll set things up!</p>

          <h5>Email</h5>
          <p>
            <a href="mailto:arsathmd11@gmail.com">arsathmd11@gmail.com</a>
          </p>

          <h5>Socials</h5>
          <p>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </p>
          <p>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </p>
        </Col>

        {/* Right Section - Form */}
        <Col md={6} className="contact-form-container">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email">
              <Form.Label className="contact-form-label">
                Email Address
              </Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="contact-form-input"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <small className="text-danger">{errors.email}</small>
              )}
            </Form.Group>

            <Form.Group controlId="name" className="mt-3">
              <Form.Label className="contact-form-label">Full Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="contact-form-input"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <small className="text-danger">{errors.name}</small>
              )}
            </Form.Group>

            <Form.Group controlId="phone" className="mt-3">
              <Form.Label className="contact-form-label">
                Phone Number
              </Form.Label>
              <Form.Control
                type="text"
                name="phone"
                placeholder="Phone Number"
                required
                className="contact-form-input"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && (
                <small className="text-danger">{errors.phone}</small>
              )}
            </Form.Group>

            {/* <Form.Group controlId="product" className="mt-3">
            <Form.Label className="contact-form-label">Preferred Product</Form.Label>
            <Form.Select required className="contact-form-input">
              <option>--Select project type--</option>
              <option>Web Development</option>
              <option>App Development</option>
              <option>Software Solutions</option>
            </Form.Select>
          </Form.Group>  */}

            <Form.Group controlId="budget" className="mt-3">
              <Form.Label className="contact-form-label">Budget</Form.Label>
              <Form.Control
                type="text"
                name="budget"
                placeholder="Enter your budget"
                className="contact-form-input"
                value={formData.budget}
                onChange={handleChange}
              />
              {errors.budget && (
                <small className="text-danger">{errors.budget}</small>
              )}
            </Form.Group>

            <Form.Group controlId="message" className="mt-3">
              <Form.Label className="contact-form-label">Message</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                rows={4}
                placeholder="Type your message"
                className="contact-form-input"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && (
                <small className="text-danger">{errors.message}</small>
              )}
            </Form.Group>

            <Button type="submit" className="contact-form-button">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;