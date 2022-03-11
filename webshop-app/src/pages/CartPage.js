import Container from "react-bootstrap/esm/Container";
import "../css/CartPage.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartItem from "../components/cart/CartItem";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
import DeleteItemModal from "../components/cart/DeleteItemModal";

function CartPage() {
  //when you first get it, add a totalCartItem value quantity * price for each item

  const ordersInitial = [
    { name: "Samsung Galaxy a52s 5G", price: "1849", quantity: 1, value: 0 },
    { name: "Xiaomi Mi 11 Lite 5G", price: "1449", quantity: 1, value: 0 },
  ];
  // const ordersInitial = JSON.parse(localStorage.getItem("items"));
  const orders = ordersInitial.map((item, index) => ({
    ...item,
    value: item.price * item.quantity,
    id: index,
  }));
  const user_id = localStorage.getItem("user_id");
  console.log(user_id);

  //call to users API
  //localhost/users/id

  const [cartItems, setCartItems] = useState(orders);

  const [totalCartValue, setTotalCartValue] = useState(0);
  const [isDeleteModal, setIsDeleteModal] = useState(false);

  const [idToDelete, setIdToDelete] = useState(0);

  const [currentUser, setCurrentUser] = useState({
    id: 1,
    name: "N/A",
    username: "N/A",
    email: "N/A",
    password: "N/A",
    role: "N/A",
    address: { street: "N/A", suite: "N/A", city: "N/A", zipcode: "000000" },
    phone: "000000000",
  });

  const increaseQuantity = (id) => {
    let array = [...cartItems];
    const cartItemIndex = array.findIndex((item) => item.id === id);
    if (array[cartItemIndex].quantity < 5) {
      console.log("increase");
      array[cartItemIndex].quantity = array[cartItemIndex].quantity + 1;
      array[cartItemIndex].value =
        array[cartItemIndex].quantity * array[cartItemIndex].price;
      console.log(array);
      setCartItems(array);
      //set new cart value
      setTotalCartValue(totalCartValue + array[cartItemIndex].value);
      //set local storage with new array
      let orders = array.map((item) => arrayToLocalStorage(item));
      localStorage.setItem("items", JSON.stringify(orders));
    } else {
      //show toast
      //You have exceeded the available quantity for this product.
    }
  };

  const decreaseQuantity = (id) => {
    console.log("decrease");

    let array = [...cartItems];
    const cartItemIndex = array.findIndex((item) => item.id === id);
    if (array[cartItemIndex].quantity > 1) {
      array[cartItemIndex].quantity = array[cartItemIndex].quantity - 1;
      array[cartItemIndex].value =
        array[cartItemIndex].quantity * array[cartItemIndex].price;
      setCartItems(array);
      //set new cart value
      setTotalCartValue(totalCartValue - array[cartItemIndex].value);
      //set local storage with new array
      let orders = array.map((item) => arrayToLocalStorage(item));
      localStorage.setItem("items", JSON.stringify(orders));
    } else {
      //show toast
      // You can remove items by clicking on the trash icon
    }
  };

  const deleteCartItem = () => {
    console.log(idToDelete);
    //API call
    //set local storage with new array
  };

  const showDeleteModal = (id) => {
    setIsDeleteModal(true);
    setIdToDelete(id);
  };
  const hideDeleteModal = () => {
    setIsDeleteModal(false);
  };

  const arrayToLocalStorage = ({ name, price, quantity }) => ({
    name,
    price,
    quantity,
  });

  const getUser = (id) => {
    console.log(id);
    fetch("http://localhost:3001/users/" + id)
      .then((response) => response.json())
      .then((data) => {
        setCurrentUser(data);
        console.log(currentUser);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    let sum = 0;
    cartItems.forEach((item) => {
      sum += item.value;
    });
    setTotalCartValue(sum);
  }, [user_id, cartItems]);

  useEffect(() => {
    //might need to change and leave only cartItems && user_id
    if (cartItems && user_id) {
      getUser(user_id);
    } else if (cartItems) {
      let sum = 0;
      cartItems.forEach((item) => {
        sum += item.value;
      });
      setTotalCartValue(sum);
    }
  }, []);

  let deleteModal;
  if (isDeleteModal) {
    deleteModal = (
      <DeleteItemModal
        hideDeleteModal={hideDeleteModal}
        deleteCartItem={deleteCartItem}
      />
    );
  }

  let container;
  //items in cart and logged in
  if (cartItems && user_id) {
    container = (
      <Container className="mt-5 pt-5 text-center">
        <div className="section-title">
          <span className="section-number">1</span>
          <h3>Order Summary</h3>
        </div>

        <div className="order">
          {cartItems.map((order) => {
            return (
              <CartItem
                key={order.name}
                cartItem={order}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                showDeleteModal={showDeleteModal}
              />
            );
          })}

          <div
            className="order-total d-flex justify-content-between p-2"
            id="order-total"
          >
            <h4>Total:</h4>
            <h4>{totalCartValue} RON</h4>
          </div>
        </div>

        <div className="modal" role="dialog">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  Are you sure you want to delete this item?
                </h5>
                <button
                  className="btn-close"
                  type="button"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body"></div>
              <div className="modal-footer d-flex justify-content-between">
                <button
                  className="btn btn-secondary"
                  type="button"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  id="delete-item"
                  type="button"
                  className="btn btn-danger"
                >
                  Delete item
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="invalid bg-danger mt-5 d-none text-center">
          <p className="text-white p-3">
            An error occurred! Please check the addresses you entered.
          </p>
        </div>
        <div className="section-title">
          <span className="section-number">2</span>
          <h3>Select Address</h3>
        </div>
        <form className="p-2 address-form" id="address-form">
          <div className="mb-3" id="delivery-address">
            <div className="row g-3 address-section">
              <h4>Delivery Address</h4>
              <div className="col-12">
                <label htmlFor="delivery-address-dropdown">
                  Choose an address:
                </label>
                <select id="delivery-address-dropdown">
                  <option value="existing">Existing address</option>
                  <option value="new">New address</option>
                </select>
              </div>
              <div className="col-md-4">
                <div className="input-group">
                  <span className="input-group-text">Street</span>
                  <input
                    type="text"
                    className="form-control"
                    id="inputStreetDelivery"
                    value="Kulas Light"
                    aria-describedby="inputGroupPrepend1"
                    required=""
                  />
                </div>
                <div
                  className="invalid-feedback mb-2"
                  id="invalid-delivery-street"
                >
                  Invalid street format.
                </div>
              </div>
              <div className="col-md-4">
                <div className="input-group">
                  <span className="input-group-text">City</span>
                  <input
                    type="text"
                    className="form-control"
                    id="inputCityDelivery"
                    value="Gwenborough"
                    aria-describedby="inputGroupPrepend2"
                    required=""
                  />
                </div>
                <div
                  className="invalid-feedback mb-2"
                  id="invalid-delivery-city"
                >
                  Invalid city format.
                </div>
              </div>
              <div className="col-md-4">
                <div className="input-group">
                  <span className="input-group-text" id="inputGroupPrepend3">
                    Suite
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="inputSuiteDelivery"
                    value="Apt. 556"
                    aria-describedby="inputGroupPrepend3"
                    required=""
                  />
                </div>
                <div
                  className="invalid-feedback mb-2"
                  id="invalid-delivery-suite"
                >
                  Invalid suite format.
                </div>
              </div>
              <div className="col-md-3">
                <div className="input-group">
                  <span className="input-group-text" id="inputGroupPrepend4">
                    Zip
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="inputZipDelivery"
                    value="929985"
                    aria-describedby="inputGroupPrepend4"
                    required=""
                  />
                </div>
                <div
                  className="invalid-feedback mb-2"
                  id="invalid-delivery-zip"
                >
                  Invalid zip code format.
                </div>
              </div>
            </div>
          </div>
          <div id="billing-address">
            <div className="row g-3 address-section">
              <h4>Billing Address</h4>
              <div className="col-12">
                <label htmlFor="billing-address-dropdown">
                  Choose an address:
                </label>
                <select id="billing-address-dropdown">
                  <option value="existing">Existing address</option>
                  <option value="new">New address</option>
                </select>
              </div>
              <div className="col-md-4">
                <div className="input-group">
                  <span className="input-group-text" id="inputGroupPrepend1">
                    Street
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="inputStreetBilling"
                    value="Kulas Light"
                    aria-describedby="inputGroupPrepend1"
                    required=""
                  />
                </div>
                <div
                  className="invalid-feedback mb-2"
                  id="invalid-billing-street"
                >
                  Invalid street format.
                </div>
              </div>
              <div className="col-md-4">
                <div className="input-group">
                  <span className="input-group-text" id="inputGroupPrepend2">
                    City
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="inputCityBilling"
                    value="Gwenborough"
                    aria-describedby="inputGroupPrepend2"
                    required=""
                  />
                </div>
                <div
                  className="invalid-feedback mb-2"
                  id="invalid-billing-city"
                >
                  Invalid city format.
                </div>
              </div>
              <div className="col-md-4">
                <div className="input-group">
                  <span className="input-group-text" id="inputGroupPrepend3">
                    Suite
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="inputSuiteBilling"
                    value="Apt. 556"
                    aria-describedby="inputGroupPrepend3"
                    required=""
                  />
                </div>
                <div
                  className="invalid-feedback mb-2"
                  id="invalid-billing-suite"
                >
                  Invalid suite format.
                </div>
              </div>
              <div className="col-md-3">
                <div className="input-group">
                  <span className="input-group-text" id="inputGroupPrepend4">
                    Zip
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="inputZipBilling"
                    value="929985"
                    aria-describedby="inputGroupPrepend4"
                    required=""
                  />
                </div>
                <div className="invalid-feedback mb-2">
                  Invalid zip code format.
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end mt-3">
            <button className="order-btn btn btn-outline-dark" type="submit">
              Place Order
            </button>
          </div>
        </form>
      </Container>
    );
  } else if (cartItems) {
    //items in cart but not logged in
    container = (
      <Container className="mt-5 pt-5 text-center">
        <div className="section-title">
          <span className="section-number">1</span>
          <h3>Order Summary</h3>
        </div>

        <div className="order">
          {cartItems.map((order) => {
            return (
              <CartItem
                key={order.name}
                cartItem={order}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                showDeleteModal={showDeleteModal}
              />
            );
          })}
          <div
            className="order-total d-flex justify-content-between p-2"
            id="order-total"
          >
            <h4>Total:</h4>
            <h4>{totalCartValue} RON</h4>
          </div>
        </div>

        <h4 className="mt-5">Log in to continue.</h4>
        <Link to="/login">Login</Link>

        {deleteModal}
        <DeleteItemModal
          hideDeleteModal={hideDeleteModal}
          deleteCartItem={deleteCartItem}
        />
      </Container>
    );
  } else {
    //no items in cart and not logged in
    container = (
      <Container className="mt-5 pt-5 text-center">
        <h4>Your cart is empty</h4>

        <Link to="/phones">Continue shopping</Link>
      </Container>
    );
  }
  return (
    <>
      <NavbarComponent />
      {container}
      <FooterComponent />
    </>
  );
}

export default CartPage;
