import Container from "react-bootstrap/esm/Container";
import "../css/CartPage.css";
import { Link } from "react-router-dom";
import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponent";

function CartPage() {
  const cartItems = JSON.parse(localStorage.getItem("items"));

  return (
    <>
      <NavbarComponent />
      {cartItems ? (
        <Container className="mt-5 pt-5 text-center">
          <div className="section-title">
            <span className="section-number">1</span>
            <h3>Order Summary</h3>
          </div>

          <div className="order">
            <div className="p-2 item-container">
              <h4 className="item-container-product">Samsung Galaxy A13</h4>
              <div className="quantity-div">
                <p>Quantity</p>
                <div className="select-quantity">
                  <span>
                    <button className="quantity-btn minus-btn" disabled="">
                      <i className="fas fa-minus-circle mx-2"></i>
                    </button>
                  </span>
                  <p className="quantity">1</p>
                  <span>
                    <button className="quantity-btn plus-btn">
                      <i className="fas fa-plus-circle mx-2"></i>
                    </button>
                  </span>
                </div>
              </div>
              <div className="price-div">
                <p>Price</p>
                <p className="price">1 x 899 = 899 RON</p>
              </div>
              <div className="remove-div">
                <button
                  className="delete-item"
                  data-bs-toggle="modal"
                  data-bs-target="#confirm-delete"
                >
                  <i className="far fa-trash-alt"></i>
                </button>
              </div>
            </div>
            <div
              className="order-total d-flex justify-content-between p-2"
              id="order-total"
            >
              <h4>Total:</h4>
              <h4>899 RON</h4>
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
                    <span className="input-group-text" id="inputGroupPrepend1">
                      Street
                    </span>
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
                    <span className="input-group-text" id="inputGroupPrepend2">
                      City
                    </span>
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
      ) : (
        <Container className="mt-5 pt-5 text-center">
          <h4>Your cart is empty</h4>

          <Link to="/phones">Continue shopping</Link>
        </Container>
      )}

      <FooterComponent />
    </>
  );
}

export default CartPage;
