import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./order.css";

const Order = () => {
  let { id } = useParams();
  
  const [order, setOrder] = useState([]);

  useEffect(() => {
    fetch("/fakeData.json")
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [order]);
  
  const orderDetail = order.filter((order) => order.id === parseInt(id));
  const singleOrder = id ? order.find((i) => i.id === id) : 0;

  // add cart
  const [count, setCount] = useState(1);
  const [selected, setSelected] = useState("Choose");

  // onClick function going here
  const inCrease = () => {
    return count < 20 ? setCount(count + 1) : null;
  };
  const deCrease = () => {
    return count > 1 ? setCount(count - 1) : null;
  };

  //selected on changed function
  const handleSelect = (event) => {
    return setSelected(event.target.value);
  };

  if (!orderDetail) {
    return <h1>your given is not valid</h1>;
  }

  return (
    <div className="container-fluid" style={{backgroundColor:"#dddddd"}}>
      <div className="row  ">
        <div className="col-lg-6 col-md-12 col-sm-12 mt-3">
          {orderDetail ? (
            orderDetail.map((service) => (
              <div key={service.id} className=" mt-4 mb-4 ">
                <div className=" m-4">
                  <img src={service.image} alt="" />
                </div>
                <div className=" align-items-center">
                 
                 
                </div>
              </div>
            ))
          ) : (
            <p>Data Not found</p>
          )}
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 mt-5 mb-5 ">
          <div className="order-details-container">
            <div className="order-details">

              <p className="mt-4">
                - Availability:
                <span style={{ color: "#03AA67" }}> In Stock</span>
              </p>

              <div>
                {orderDetail ? (
                  orderDetail.map((service) => (
                    <div key={service.id} className=" mt-4 mb-4 ">
                         <h4 className="text-info fw-bolder">{service?.title}</h4>
                        <p>Price Per Person: ${service?.cost * count}</p>
                    </div>
                   
                  ))
                ) : (
                  <p>Data Not found</p>
                )}
              </div>
            
              <hr />
              <br />
            
              {/* select option  */}
            <div className="d-flex ">

              <label for="cars">
               
              </label>
              <div class="custom-select me-5">
               <h4>Package :</h4>
                <select
                  value={selected}
                  // id="cars"
                  onChange={(event) => {
                    handleSelect(event);
                  }}
                  
                >
                  <option value="Choose">Travel Type</option>
                  <option value="city">City Tour</option>
                  <option value="couple">Couple Tour</option>
                  <option value="adventure">Adventure Tour</option>
                  <option value="vacation">Vacation Tour</option>
                  <option value="group">Group Tour</option>
                </select>
              </div>
              {/* select option  */}
              <br />
              {/* order now */}
              <div className="order-number mt-5">
                <div className="increase-decrease">
                  <p className="increase-order" onClick={deCrease}>
                    -
                  </p>
                  <p>{count}</p>
                  <p className="increase-order" onClick={inCrease}>
                    +
                  </p>
                </div> <br />

                          
                  {selected === "Choose" ? (
                    <button className="order-button-deActive" disabled>
                      {" "}
                      Add-Cart
                    </button>
                  ) : (
                    // <h2>Click Here</h2>
                    <Link className="order-button" active to={`/addCart/${id}`}>
                      Add-Cart
                    </Link>
              
                  )}
              
              </div>
            </div>  
              {/* order now */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
