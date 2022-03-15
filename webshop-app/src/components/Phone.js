import React from "react";

function Phone({
  id,
  name,
  brand,
  image,
  os,
  price,
  quantity,
  rating,
  discount,
  date,
}) {
  return (
    <div className="phone-card col-lg-3 col-md-4 col-sm-6 col-12 g-3">
      <div
        className="action-buttons d-flex justify-content-end"
        id={id}
      >
        <a href="/phones/<%= products[i].id %>/edit">
          <button className="edit-btn">Edit</button>
        </a>
        <button
          className="delete-btn"
          data-bs-toggle="modal"
          data-bs-target="#confirm-delete"
        >
          Delete
        </button>
      </div>
      <div className="phone-img d-flex justify-content-center align-items-center">
        <img src={"images/" + image} alt="Phone placeholder" />
      </div>
      <div className="phone-info">
        <h3 className="title">{brand}</h3>
        <h4 className="subtitle">{name}</h4>
        <p>from</p>
        {discount > 0 ? (
          <h5>
            Price : <span className="discounted">{price}</span>
            <span className="price">{price - discount}</span>RON
          </h5>
        ) : (
          <h5>
            Price : <span className="price">{price}</span>RON
          </h5>
        )}

        <a
          href={'/phones/' + id}
          className="phone-link mb-2"
        >
          <button className="btn btn-danger">See product details &gt;</button>
        </a>
        {quantity > 0 ? (
          <button className="add-to-cart text-center btn btn-danger mt-2">
            Add to cart
          </button>
        ) : (
          <button
            className="add-to-cart text-center btn btn-danger mt-2"
            disabled
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
}

export default Phone;
