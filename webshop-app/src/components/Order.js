import React from "react";

export default function Order({
  id,
  name,
  email,
  phone,
  date,
  price,
  quantity,
}) {
  return (
    <>
      <ul className="list-group">
        <li
          className="list-group-item d-flex justify-content-between align-items-center"
          id={`item-${id}`}
        >
          <div className="ms-2 me-auto">
            <p className="name fw-bold">
              Order <span className="text-success">{id}</span>
            </p>
          </div>
          <button
            className="btn-collapse btn btn-outline-dark collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapse${id}`}
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            <i className="fas fa-chevron-circle-down"></i>
          </button>
        </li>
        <div className="collapse" id={`collapse${id}`}>
          {/* {" "} */}
          <div className="card card-body">
            <h6>
              Email:<span className="fw-light fst-italic">{email}</span>
              {/* //{" "} */}
            </h6>
            {/* //{" "} */}
            <h6>
              Phone: <span className="fw-light fst-italic">{phone}</span>
              {/* //{" "} */}
            </h6>
            {/* //{" "} */}
            <h6>
              Delivery Address:
              {/* //               <span className="fw-light fst-italic"><%= orders[i].delivery_address.street %> street, <%=
                  orders[i].delivery_address.suite %>, <%=
                  orders[i].delivery_address.zipcode %>, <%=
                  orders[i].delivery_address.city %></span
                > */}
            </h6>
            <h6>
              {/* Billing Address:
                <span className="fw-light fst-italic"
                  ><%= orders[i].billing_address.street %> street, <%=
                  orders[i].billing_address.suite %>, <%=
                  orders[i].billing_address.zipcode %>, <%=
                  orders[i].billing_address.city %></span
                > */}
            </h6>
            <h6>
              Ordered on:
              <span className="fw-light fst-italic">{date}</span>
            </h6>
            <h6>Order:</h6>
            {/* <% for(var j = 0; j < orders[i].order.length; j++) {%> */}
            <div className="d-flex justify-content-between">
              <div className="order-name">- {name}</div>
              <div className="order-name">Price:{price} RON</div>
              <div className="order-name">Qty: {quantity}</div>
            </div>
            <br />
            <h6>Total price: {price} RON</h6>
          </div>
        </div>
      </ul>
    </>
  );
}
