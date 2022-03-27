import React from "react";
import EditPhoneModal from "./EditPhoneModal";
import DeletePhoneModal from "./DeletePhoneModal";
import Button from "react-bootstrap/esm/Button";
import { LinkContainer } from "react-router-bootstrap";
import { useState } from "react";

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
  getPhones,
  isAdmin,
  cartItemsNumber,
  setCartItemsNumber
}) {
  const [editModalShow, setEditModalShow] = useState(false);
  const [deleteModalShow, setDeleteModalShow] = useState(false);


  const deletePhone = () => {
    console.log(id);
    fetch("http://localhost:3001/phones/" + id, {
      method: "DELETE",
    }).then((data) => {
      if (data.status === 200) {
        getPhones();
      }
    });
  };

  const handleAddToCart = (id) => {
    let cartItems = JSON.parse(localStorage.getItem("items"));
    if(cartItems){
      let count = 0;
      for (let i = 0; i < cartItems.length; i++) {
          if (cartItems[i].id === id) {
              cartItems[i].quantity += 1;
              count += 1;
          }
      }
      if (count < 1) {
          cartItems.push({ id: id, name: `${brand} ${name}`, price: price, quantity: 1 });
      }
      setCartItemsNumber(cartItemsNumber + 1);
      localStorage.setItem("items", JSON.stringify(cartItems));
    } else {
        const items = [{ id: id, name: `${brand} ${name}`, price: price, quantity: 1 }];
        localStorage.setItem("items", JSON.stringify(items));
        setCartItemsNumber(cartItemsNumber + 1);
    }
    
  }

  return (
    <>
      <DeletePhoneModal
        deletePhone={deletePhone}
        onHide={() => setDeleteModalShow(false)}
        show={deleteModalShow}
      />
      <EditPhoneModal
        id={id}
        brand={brand}
        name={name}
        os={os}
        price={price}
        discount={discount}
        quantity={quantity}
        date={date}
        rating={rating}
        image={image}
        show={editModalShow}
        getPhones={getPhones}
        onHide={() => setEditModalShow(false)}
      />
      <div className="phone-card col-lg-3 col-md-4 col-sm-6 col-12 g-3">
        {isAdmin && 
          <div className="action-buttons d-flex justify-content-end" id={id}>
            <button className="edit-btn" onClick={() => setEditModalShow(true)}>
              Edit
            </button>
            <button
              className="delete-btn"
              data-bs-toggle="modal"
              data-bs-target="#confirm-delete"
              onClick={() => setDeleteModalShow(true)}
            >
              Delete
            </button>
          </div>
        }  
        <div className="phone-img d-flex justify-content-center align-items-center">
          <img src={"images/" + image} alt="Phone placeholder" />
        </div>
        <div className="phone-info">
          <h3 className="title">{brand}</h3>
          <h4 className="subtitle">{name}</h4>
          <p>from</p>
          {discount > 0 ? (
            <h5>
              Price: 
              <span> </span> 
              <span className="discounted">{price}</span>
              <span className="price"> {price - discount}</span> RON
            </h5>
          ) : (
            <h5>
              Price: <span className="price">{price}</span> RON
            </h5>
          )}
          <LinkContainer to={"/phones/" + id}><Button variant="danger">See product details &gt;</Button></LinkContainer>
          {quantity > 0 ? (
            <button className="add-to-cart text-center btn btn-danger mt-2" onClick={() => handleAddToCart(id)}>
              Add to cart
            </button>
          ) : (
            <button
              className="add-to-cart text-center btn btn-danger mt-2"
              onClick={() => handleAddToCart(id)}
              disabled
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Phone;
