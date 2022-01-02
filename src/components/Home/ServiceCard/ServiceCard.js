import React from "react";
import { Col } from "react-bootstrap";
import "./serviceCard.css";

const ServiceCard = ({props}) => {
    const {id, title, image , description} = props.services;

  return (
    <>
      <Col lg={4} md={6} sm={12}>
        <div className="box text-center">
          <div className="ser-img">
            <img className="services-img" src={image} alt="" />
          </div>
          <h3 className="services-title">{title}</h3>
          <p>{description}</p>
        </div>
      </Col>
    </>
  );
};

export default ServiceCard;
