import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponent";

import '../css/PhoneDetails.css';

function DetailsPage() {
  const [phone, setPhone] = useState(null);
  useEffect(() => {
    const afterLastSlash = window.location.pathname.substring(
      window.location.pathname.lastIndexOf("/") + 1
    );
    axios
      .get("http://localhost:3001/phones/" + afterLastSlash)
      .then(function (response) {
        setPhone(response.data);
      });
  }, []);

  // function getRating(rating) {
  //   let elements = ["Rating: "];

  //   for (let i = 1; i <= 5; i++) {
  //     Math.trunc(rating) >= i
  //       ? elements.push(
  //           React.createElement("span", { className: "fa fa-star checked" })
  //         )
  //       : // <span className="fa fa-star checked"></span>
  //         elements.push(
  //           React.createElement("span", { className: "fa fa-star unchecked" })
  //         );
  //     // <span className="fa fa-star unchecked"></span>
  //   }

  //   rating > 0
  //     ? elements.push(React.createElement("span", rating))
  //     : elements.push(React.createElement("span", "(-)"));

  //   let starRating = React.createElement("h5", elements);
  //   return starRating;
  // }

  return (
    <>
      <NavbarComponent />
      {phone ? (
        <div className="container pt-5" id="container">
          <div className="title mt-3">
            <h4 className="title details-title" id="brand">
              {phone.brand}{" "}
              <span className="subtitle text-danger" id="name">
                {phone.name}
              </span>
            </h4>
          </div>
          <div className="container container-details mt-3">
            <div className="row">
              <div className="col-sm-6 col-12" id="phone-img">
                <img
                  className="phone-details-img"
                  src={"/images/" + phone.image}
                  alt="Phone placeholder"
                ></img>
              </div>
              <div
                className="details col-sm-6 col-12 align-self-center"
                id="phone-details"
              >
                {phone.discount > 0 ? (
                  <h5>
                    Price : <span className="discounted">{phone.price}</span>{" "}
                    <span id="price">{phone.price - phone.discount}</span> RON
                  </h5>
                ) : (
                  <h5>
                    Price : <span id="price">{phone.price}</span> RON
                  </h5>
                )}
                <div id="rating">
                  {/* <h5>
                   Rating :{}
                   {phone.rating > 0 ? (
                     <span> (phone.rating)</span>
                   ) : (
                     <span> (-)</span>
                   )}
                </h5> */}
                </div>
                <h5>
                  Operating system :{" "}
                  <span className="detail-value">{phone.operating_system}</span>
                </h5>
                <h5>
                  Available from date :{" "}
                  <span className="detail-value">
                    {phone.availability_date}
                  </span>
                </h5>
                <h5>
                  In stock :
                  {phone.quantity > 0 ? (
                    <span className="detail-value"> YES</span>
                  ) : (
                    <span className="detail-value"> NO</span>
                  )}
                </h5>
                {phone.quantity > 0 ? (
                  <button
                    id="add-to-cart"
                    className="text-center btn btn-outline-danger mt-3"
                  >
                    Add to cart
                  </button>
                ) : (
                  <button
                    id="add-to-cart"
                    className="text-center btn btn-outline-danger mt-3"
                    disabled
                  >
                    Add to cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className="details-footer">
       <FooterComponent />
      </div>
    </>
  );
}

export default DetailsPage;
