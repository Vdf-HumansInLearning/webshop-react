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

  //if localStorage doesn't work, use this instead
  // const ordersInitial = [
  //   { name: "Samsung Galaxy a52s 5G", price: "1849", quantity: 1, value: 0 },
  //   { name: "Xiaomi Mi 11 Lite 5G", price: "1449", quantity: 1, value: 0 },
  // ];

  //---DECLARATIONS---

  const NEW_ADDRESS = "new";
  const EXISTING_ADDRESS = "existing";

  const url = "http://localhost:3001/";

  const ordersInitial = JSON.parse(localStorage.getItem("items"));
  const user_id = localStorage.getItem("user_id");

  const addressOptions = [
    { value: EXISTING_ADDRESS, text: "Existing Address" },
    { value: NEW_ADDRESS, text: "New Address" },
  ];

  const [cartItems, setCartItems] = useState([]);
  const [totalCartValue, setTotalCartValue] = useState(0);
  const [idToDelete, setIdToDelete] = useState(0);
  const [modalShow, setModalShow] = useState(false);
  const [addressTypeDelivery, setAddressTypeDelivery] =
    useState(EXISTING_ADDRESS);
  const [addressTypeBilling, setAddressTypeBilling] =
    useState(EXISTING_ADDRESS);
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
  const [deliveryAddress, setDeliveryAddress] = useState({
    street: "",
    suite: "",
    city: "",
    zipcode: "",
  });
  const [billingAddress, setBillingAddress] = useState({
    street: "",
    suite: "",
    city: "",
    zipcode: "",
  });

  //---METHODS---

  const increaseQuantity = (id) => {
    let array = [...cartItems];
    const cartItemIndex = array.findIndex((item) => item.id === id);
    if (array[cartItemIndex].quantity < 5) {
      array[cartItemIndex].quantity = array[cartItemIndex].quantity + 1;
      array[cartItemIndex].value =
        array[cartItemIndex].quantity * array[cartItemIndex].price;
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

  const showDeleteModal = (id) => {
    setModalShow(true);
    setIdToDelete(id);
  };

  const deleteCartItem = () => {
    let array = [...cartItems];
    let foundIndex = array.findIndex((item) => item.id === idToDelete);
    if (foundIndex) {
      array.splice(foundIndex, 1);
      const orders = array.map((item) => arrayToLocalStorage(item));
      localStorage.setItem("items", JSON.stringify(orders));
      setCartItems(array);
      setIdToDelete(null);
      setModalShow(false);
    }
  };

  const arrayToLocalStorage = ({ name, price, quantity }) => ({
    name,
    price,
    quantity,
  });

  const getUser = (id) => {
    fetch(url + "users/" + id)
      .then((response) => response.json())
      .then((data) => {
        setCurrentUser(data);
        setBillingAddress(data.address);
        setDeliveryAddress(data.address);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleChangDeliveryAddressType = (e) => {
    const selectedValue = e.target.value;
    setAddressTypeDelivery(selectedValue);
    if (selectedValue === EXISTING_ADDRESS)
      setDeliveryAddress({ ...currentUser.address });
    else setDeliveryAddress({ street: "", suite: "", city: "", zipcode: "" });
  };

  const handleChangBillingAddressType = (e) => {
    const selectedValue = e.target.value;

    setAddressTypeBilling(selectedValue);
    if (selectedValue === EXISTING_ADDRESS)
      setBillingAddress({ ...currentUser.address });
    else setBillingAddress({ street: "", suite: "", city: "", zipcode: "" });
  };

  const handleChangeDelivery = (e) => {
    console.log(e);
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setDeliveryAddress((previous) => {
      return { ...previous, [name]: value };
    });
  };

  const handleChangeBilling = (e) => {
    console.log(e);
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setBillingAddress((previous) => {
      return { ...previous, [name]: value };
    });
    console.log(billingAddress);
  };

  const placeOrder = (e) => {
    e.preventDefault();

    const orders = cartItems.map((item) => arrayToLocalStorage(item));

    let order = {
      data: {
        user: currentUser.id,
        delivery_address: { ...deliveryAddress },
        billing_address: { ...billingAddress },
        items: orders,
        total: totalCartValue,
      },
    };
    console.log(order);

    //validate addresses

    fetch(url + "orders", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    }).then((data) => {
      if (data.status === 200) {
        localStorage.removeItem("items");
        console.log("order successfull");
        //show toast
        //order successful
      }
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
    if (ordersInitial && user_id) {
      //set address fields
      getUser(user_id);
      const orders = ordersInitial.map((item, index) => ({
        ...item,
        value: item.price * item.quantity,
        id: index,
      }));
      setCartItems(orders);
    } else if (ordersInitial) {
      const orders = ordersInitial.map((item, index) => ({
        ...item,
        value: item.price * item.quantity,
        id: index,
      }));
      setCartItems(orders);
      let sum = 0;
      cartItems.forEach((item) => {
        sum += item.value;
      });
      setTotalCartValue(sum);
    }
  }, []);

  let container;
  //items in cart and logged in
  if (ordersInitial && user_id) {
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

        <DeleteItemModal
          deleteCartItem={deleteCartItem}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        <div className="invalid bg-danger mt-5 d-none text-center">
          <p className="text-white p-3">
            An error occurred! Please check the addresses you entered.
          </p>
        </div>
        <div className="section-title mt-5">
          <span className="section-number">2</span>
          <h3>Select Address</h3>
        </div>
        <form onSubmit={(e) => placeOrder(e)} className="p-2 address-form">
          <div className="mb-3">
            <div className="row g-3 address-section">
              <h4>Delivery Address</h4>
              <div className="col-12">
                <label htmlFor="delivery-address-dropdown">
                  Choose an address:
                </label>
                <select
                  onChange={handleChangDeliveryAddressType}
                  id="delivery-address-dropdown"
                >
                  {addressOptions.map((item) => {
                    return (
                      <option key={item.value} value={item.value}>
                        {item.text}{" "}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="col-md-4">
                <div className="input-group">
                  <span className="input-group-text" id="inputGroupPrepend1">
                    Street
                  </span>
                  <input
                    onChange={handleChangeDelivery}
                    value={deliveryAddress.street}
                    name="street"
                    type="text"
                    className="form-control"
                    id="inputStreetBilling"
                    aria-describedby="inputGroupPrepend1"
                    required=""
                    readOnly={addressTypeDelivery === EXISTING_ADDRESS}
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
                    onChange={handleChangeDelivery}
                    value={deliveryAddress.city}
                    name="city"
                    type="text"
                    className="form-control"
                    id="inputCityBilling"
                    aria-describedby="inputGroupPrepend2"
                    required=""
                    readOnly={addressTypeDelivery === EXISTING_ADDRESS}
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
                    onChange={handleChangeDelivery}
                    value={deliveryAddress.suite}
                    name="suite"
                    type="text"
                    className="form-control"
                    id="inputSuiteBilling"
                    aria-describedby="inputGroupPrepend3"
                    required=""
                    readOnly={addressTypeDelivery === EXISTING_ADDRESS}
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
                    onChange={handleChangeDelivery}
                    value={deliveryAddress.zipcode}
                    name="zipcode"
                    type="text"
                    className="form-control"
                    id="inputZipBilling"
                    aria-describedby="inputGroupPrepend4"
                    required=""
                    readOnly={addressTypeDelivery === EXISTING_ADDRESS}
                  />
                </div>
                <div className="invalid-feedback mb-2">
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
                <select
                  onChange={handleChangBillingAddressType}
                  id="billing-address-dropdown"
                >
                  {addressOptions.map((item) => {
                    return (
                      <option key={item.value} value={item.value}>
                        {item.text}{" "}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="col-md-4">
                <div className="input-group">
                  <span className="input-group-text">Street</span>
                  <input
                    onChange={handleChangeBilling}
                    value={billingAddress.street}
                    name="street"
                    type="text"
                    className="form-control"
                    aria-describedby="inputGroupPrepend1"
                    required=""
                    readOnly={addressTypeBilling === EXISTING_ADDRESS}
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
                    onChange={handleChangeBilling}
                    value={billingAddress.city}
                    name="city"
                    type="text"
                    className="form-control"
                    aria-describedby="inputGroupPrepend2"
                    required=""
                    readOnly={addressTypeBilling === EXISTING_ADDRESS}
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
                    onChange={handleChangeBilling}
                    value={billingAddress.suite}
                    name="suite"
                    type="text"
                    className="form-control"
                    aria-describedby="inputGroupPrepend3"
                    required=""
                    readOnly={addressTypeBilling === EXISTING_ADDRESS}
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
                    onChange={handleChangeBilling}
                    value={billingAddress.zipcode}
                    name="zipcode"
                    type="text"
                    className="form-control"
                    aria-describedby="inputGroupPrepend4"
                    required=""
                    readOnly={addressTypeBilling === EXISTING_ADDRESS}
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
          <div className="d-flex justify-content-end mt-3">
            <button className="order-btn btn btn-outline-dark" type="submit">
              Place Order
            </button>
          </div>
        </form>
      </Container>
    );
  } else if (ordersInitial) {
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

        <DeleteItemModal
          deleteCartItem={deleteCartItem}
          show={modalShow}
          onHide={() => setModalShow(false)}
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
