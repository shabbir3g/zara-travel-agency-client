import React from "react";
import "./cart.css";

const Cart = () => {
  return (
    <div>
      <div className="order-container">
        <div className="order-main-container">
          <p className="title">Billing details</p>
          <form
            onSubmit={() => {
              alert("form submission!");
            }}
          >
            {/* name division */}
            <div className="first-last-name">
              <div className="name-input">
                <label for="first-name">First Name</label>
                <input
                  type="text"
                  id="first-name"
                  placeholder="First Name"
                  required
                  min="3"
                  max="15"
                />
              </div>
              <div style={{ width: "10%" }}></div>
              <div className="name-input">
                <label for="Last-name">Last Name</label>
                <input
                  type="text"
                  id="Last-name"
                  placeholder="Last Name"
                  required
                  min="3"
                  max="15"
                />
              </div>
            </div>
            {/* name division */}

            <div>
              <p className="country-name">
                Country
                <span style={{ color: "red", fontSize: "25px" }}> *</span>
              </p>
              <p className="country-region">Bangladesh</p>
            </div>
            <div className="company-name">
              <label for="Street-name">
                Street address
                <span style={{ color: "red", fontSize: "25px" }}> *</span>
              </label>
              <input
                required
                type="text"
                id="Street-name"
                placeholder="House number and street number *"
                max="30"
              />
              <input
                type="text"
                placeholder="Apartment, suite, unit, etc. (optional)"
                max="30"
              />
            </div>
            <div className="company-name">
              <label for="town-name">
                Town / City
                <span style={{ color: "red", fontSize: "25px" }}> *</span>
              </label>
              <input
                required
                type="text"
                id="town-name"
                placeholder="Town / City name"
                max="20"
              />
            </div>
            <div className="company-name">
              <label for="district-name">
                District
                <span style={{ color: "red", fontSize: "25px" }}> *</span>
              </label>
              <select id="district-name">
                <option value="select district">Select a district</option>
                <option value="Dhaka ">Dhaka </option>
                <option value="Barguna ">Barguna </option>
                <option value="Barisal ">Barisal </option>
                <option value="Bhola ">Bhola </option>
                <option value="Jhalokati ">Jhalokati </option>
                <option value="Patuakhali ">Patuakhali </option>
                <option value="Pirojpur ">Pirojpur </option>
                <option value="Bandarban ">Bandarban </option>
                <option value="Satkhira ">Satkhira </option>
                <option value="Sirajganj ">Sirajganj </option>
                <option value="Dinajpur ">Dinajpur </option>
                <option value="Gaibandha ">Gaibandha </option>
                <option value="Kurigram ">Kurigram </option>
                <option value="Brahmanbaria District">Brahmanbaria</option>
              </select>
            </div>
            <div className="company-name">
              <label for="Postcode / ZIP (optional)">
                Postcode / ZIP (optional)
              </label>
              <input
                type="text"
                id="Postcode / ZIP (optional)"
                placeholder="Company name"
                max="10"
              />
            </div>
            <div className="company-name">
              <label for="Billing Mobile Number *">
                Billing Mobile Number
                <span style={{ color: "red", fontSize: "25px" }}> *</span>
              </label>
              <input
                type="text"
                id="Billing Mobile Number *"
                placeholder="Billing Mobile Number"
                required
              />
            </div>
            <div className="company-name">
              <label for="Billing Email">
                Billing Email
                <span style={{ color: "red", fontSize: "25px" }}> *</span>
              </label>
              <input
                type="email"
                id="Billing Email"
                placeholder="Billing Email"
                required
              />
            </div>
           
            <br />
            <div className="place-order-button">
            
             <button className="place-button">
                  Payment Here</button>
           
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cart;
