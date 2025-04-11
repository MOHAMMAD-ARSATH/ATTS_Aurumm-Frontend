import React, { useEffect, useState, useRef } from "react";
import { Table, Card, Tab, Tabs, Pagination, Spinner } from "react-bootstrap";
import axios from "axios";
import moment from "moment";

const ContactTable = () => {
  const API_URL = process.env.REACT_APP_API_URL;

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;
  const tableContainerRef = useRef(null);
  const [isScrollingActive, setIsScrollingActive] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_URL}/api/contacts`);
      if (response.status === 200) {
        const newData = response.data.map((contact, index) => ({
          ...contact,
          sno: index + 1,
        }));
        setData(newData);
      } else {
        alert("Error fetching contacts. Please try again.");
      }
    } catch (error) {
      alert("Error fetching contacts. Please try again.");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const checkScroll = () => {
      if (tableContainerRef.current) {
        setIsScrollingActive(
          tableContainerRef.current.scrollHeight >
            tableContainerRef.current.clientHeight ||
            tableContainerRef.current.scrollWidth >
              tableContainerRef.current.clientWidth
        );
      }
    };
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [data]);

  const totalPages = Math.ceil(data.length / rowsPerPage);
  const currentData = data.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="contact-table-wrapper">
      <Card className="contact-card">
        <Card.Body>
          <Tabs
            defaultActiveKey="contacts"
            transition={false}
            id="contact-tabs"
            className="mb-3"
          >
            <Tab eventKey="contacts" title="Contact Details">
              {loading ? (
                <div className="text-center my-4">
                  <Spinner animation="border" variant="primary" size="lg" />
                  <h6 className="mt-2">Loading data... Please Wait</h6>
                </div>
              ) : (
                <div className="table-container" ref={tableContainerRef}>
                  <Table
                    striped
                    bordered
                    hover
                    responsive
                    className="contact-table"
                  >
                    <thead>
                      <tr>
                        <th style={{ width: "60px" }}>S.No</th>
                        <th style={{ width: "180px" }}>Name</th>
                        <th style={{ width: "250px" }}>Email</th>
                        <th style={{ width: "180px" }}>Phone Number</th>
                        <th style={{ width: "150px" }}>Budget Amount</th>
                        <th className="message-column">Message</th>
                        <th style={{ width: "150px" }}>Message At</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentData.length > 0 ? (
                        currentData.map((contact) => (
                          <tr key={contact._id}>
                            <td>{contact.sno}</td>
                            <td>{contact.name}</td>
                            <td>{contact.email}</td>
                            <td>{contact.phone}</td>
                            <td>{contact.budget}</td>
                            <td className="message-cell">
                              {contact.message || "No message provided"}
                            </td>
                            <td>
                              {moment(contact.createdAt).format(
                                "DD/MM/YYYY HH:mm"
                              )}
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="7" className="text-center">
                            No contacts found.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </Table>
                </div>
              )}

              {totalPages > 1 && !loading && (
                <Pagination className="justify-content-center">
                  {[...Array(totalPages)].map((_, index) => (
                    <Pagination.Item
                      key={index + 1}
                      active={index + 1 === currentPage}
                      onClick={() => handlePageChange(index + 1)}
                    >
                      {index + 1}
                    </Pagination.Item>
                  ))}
                </Pagination>
              )}
            </Tab>
          </Tabs>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ContactTable;
