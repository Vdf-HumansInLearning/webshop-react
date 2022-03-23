function Address({ title, handleChangeAddress, address }) {
  return (
    <div id="billing-address">
      <div className="row g-3 address-section">
        <h4>{title}</h4>

        <div className="col-md-4">
          <div className="input-group">
            <span className="input-group-text">Street</span>
            <input
              onChange={handleChangeAddress}
              value={address.street}
              name="street"
              type="text"
              className="form-control"
              aria-describedby="inputGroupPrepend1"
              required=""
            />
          </div>
          <div className="invalid-feedback mb-2" id="invalid-delivery-street">
            Invalid street format.
          </div>
        </div>
        <div className="col-md-4">
          <div className="input-group">
            <span className="input-group-text">City</span>
            <input
              onChange={handleChangeAddress}
              value={address.city}
              name="city"
              type="text"
              className="form-control"
              aria-describedby="inputGroupPrepend2"
              required=""
            />
          </div>
          <div className="invalid-feedback mb-2" id="invalid-delivery-city">
            Invalid city format.
          </div>
        </div>
        <div className="col-md-4">
          <div className="input-group">
            <span className="input-group-text" id="inputGroupPrepend3">
              Suite
            </span>
            <input
              onChange={handleChangeAddress}
              value={address.suite}
              name="suite"
              type="text"
              className="form-control"
              aria-describedby="inputGroupPrepend3"
              required=""
            />
          </div>
          <div className="invalid-feedback mb-2" id="invalid-delivery-suite">
            Invalid suite format.
          </div>
        </div>
        <div className="col-md-3">
          <div className="input-group">
            <span className="input-group-text" id="inputGroupPrepend4">
              Zip
            </span>
            <input
              onChange={handleChangeAddress}
              value={address.zipcode}
              name="zipcode"
              type="text"
              className="form-control"
              aria-describedby="inputGroupPrepend4"
              required=""
            />
          </div>
          <div className="invalid-feedback mb-2" id="invalid-delivery-zip">
            Invalid zip code format.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;
