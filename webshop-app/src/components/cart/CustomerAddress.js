import Address from "./Address";

function CustomerAddress({
  placeOrder,
  handleChangeAddress,
  billingAddress,
  deliveryAddress,
}) {
  return (
    <>
      {" "}
      <div className="section-title mt-5">
        <span className="section-number">2</span>
        <h3>Select Address</h3>
      </div>
      <form onSubmit={(e) => placeOrder(e)} className="p-2 address-form">
        <Address
          title="Delivery Address"
          handleChangeAddress={(e) => handleChangeAddress(e, "delivery")}
          address={deliveryAddress}
        />
        <Address
          title="Billing Address"
          handleChangeAddress={(e) => handleChangeAddress(e, "billing")}
          address={billingAddress}
        />
        <div className="d-flex justify-content-end mt-3">
          <button className="order-btn btn btn-outline-dark" type="submit">
            Place Order
          </button>
        </div>
      </form>{" "}
    </>
  );
}

export default CustomerAddress;
