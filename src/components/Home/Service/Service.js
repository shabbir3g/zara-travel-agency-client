import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./service.css";

const Service = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch("/fakeData.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div className="bg-service">
      <Container className="pt-5 pb-4">
        <h2 className="services-head">Our Latest Services </h2>
        <Row xs={1} md={3} className="g-4">
          {service.map((service, index) => (
            <Col>
              <Card className="box text-center">
                <Card.Img
                  className="services-img"
                  variant="top"
                  src={service.image}
                />
                <Card.Body>
                  <Card.Title className="services-title">
                    {service.title}
                  </Card.Title>
                  <p> {service.description.slice(0, 85)}</p>
                 <div className="service-meta"> 
               
                 <Card.Text>
                      <h5>Cost: {service.cost}</h5>
                    </Card.Text>
                

                    <Link className="card-btn" to={`/order/${service.id}`}>
                      Order Now
                    </Link>
                 </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
       
      </Container>
    </div>
  );
};

export default Service;
