import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ServiceCard from '../ServiceCard/ServiceCard';
import "./service.css"

const Service = () => {
  const [service, setService] = useState([])

  useEffect(()=>{
      fetch('/fakeData.json')
      .then(res=>res.json())
      .then(data=>setService(data))
  },[])
    return (
        <div className="bg-service">    
               
                 <Container className="pt-5 pb-4">
                    <h2 className='services-head'>Our Services</h2>
                    <Row>
                    {
                            service?.map((service, index) => <ServiceCard
                            services={service}
                            key={index}
                            
                            ></ServiceCard>)
                    }
               
                       
                    </Row>
                </Container>
            </div> 
    );
};

export default Service;