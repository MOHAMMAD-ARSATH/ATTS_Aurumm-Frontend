import React from "react";
import { Breadcrumb, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import BannerBg from "../assets/BannerBg.png";

const Breadcrumbs = ({ paths }) => {
  if (!paths || paths.length === 0) {
    return (
      <Container className="mt-5">
        <Breadcrumb style={{ "--bs-breadcrumb-divider": "'>'" }}>
          <Breadcrumb.Item>
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
      </Container>
    );
  }

  const activePath = paths[paths.length - 1];

  return (
    <div
      style={{
        background: `linear-gradient(to bottom, rgba(97, 163, 117, 0.8), rgba(216, 183, 112, 0.8)), 
        url('${BannerBg}') no-repeat center center`,
        // backgroundSize: "cover",
        backgroundBlendMode: "overlay",
        backgroundSize: "100% 140%",
        color: "black",
        height: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "end",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        fontSize: "22px",
      }}
    >
      <Container>
        <h1 className="mb-2">{activePath.label}</h1>
        <Breadcrumb style={{ "--bs-breadcrumb-divider": "'>'" }}>
          {paths.map((path, index) => (
            <Breadcrumb.Item key={index} active={index === paths.length - 1}>
              {index === paths.length - 1 ? (
                path.label
              ) : (
                <Link to={path.link} className="breadcrumb-path">
                  {path.label}
                </Link>
              )}
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>
      </Container>
    </div>
  );
};

export default Breadcrumbs;