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
      <Container fluid className="pt-5 pb-4">
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
                  <Card.Text className="mb-5">
                    <p> {service.description.slice(0, 90)}</p>
                    <h5 className="mt-3">Cost: {service.cost}</h5>
                  </Card.Text>

                  <Link className="card-btn" to="#">
                    Add Cart
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        {/* <Row xs={3}>
                    {
                            service?.map((service, index) => <ServiceCard
                            services={service}
                            key={index}
                            
                            ></ServiceCard>)
                    } */}

        {/* </Row> */}
      </Container>
    </div>
  );
};

export default Service;
