import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "../css/Modal.css";

function EditProfileModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Profile
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div
          id="edit-user-container"
          className="edit-user d-flex justify-content-center flex-column align-items-center text-left"
        >
          <form
            className="edit-user-form"
            id="edit-user-form"
            action="/users/<%= user.id %>"
          >
            <h5 className="mb-1">Address</h5>
            <div className="input-group mb-3">
              <span
                className="input-group-text"
                for="edit-street"
                id="basic-addon1"
              >
                Street*
              </span>
              <input
                value={props.street}
                id="edit-street"
                name="street"
                type="text"
                className="form-control"
                placeholder="ex. : Kulas Light"
                aria-label="ex. : Kulas Light"
                aria-describedby="basic-addon1"
                required
              ></input>
            </div>
            <div className="invalid-feedback mb-2" id="invalid-street-edit">
              Invalid street name.
            </div>
            <div className="input-group mb-3">
              <span
                className="input-group-text"
                for="edit-suite"
                id="basic-addon1"
              >
                Suite*
              </span>
              <input
                value={props.suite}
                id="edit-suite"
                name="suite"
                type="text"
                className="form-control"
                placeholder="ex. : Apt. 556"
                aria-label="ex. : Apt. 556"
                aria-describedby="basic-addon1"
                required
              ></input>
            </div>
            <div className="invalid-feedback mb-2" id="invalid-suite-edit">
              Invalid suite format.
            </div>
            <div className="input-group mb-3">
              <span
                className="input-group-text"
                for="edit-city"
                id="basic-addon1"
              >
                City*
              </span>
              <input
                value={props.city}
                id="edit-city"
                name="city"
                type="text"
                className="form-control"
                placeholder="ex. : Gwenborough"
                aria-label="ex. : Gwenborough"
                aria-describedby="basic-addon1"
                required
              ></input>
            </div>
            <div className="invalid-feedback mb-2" id="invalid-city-edit">
              Invalid city name.
            </div>
            <div className="input-group mb-3">
              <span
                className="input-group-text"
                for="edit-zip"
                id="basic-addon1"
              >
                Zip code*
              </span>
              <input
                value={props.zipcode}
                id="edit-zip"
                name="zip"
                type="text"
                className="form-control"
                placeholder="ex. : 929987"
                aria-label="ex. : 929987"
                aria-describedby="basic-addon1"
                required
              ></input>
            </div>
            <div className="invalid-feedback mb-2" id="invalid-zip-edit">
              Invalid zip code format.
            </div>
            <h5 className="mb-1">Phone</h5>
            <div className="input-group mb-3">
              <span
                className="input-group-text"
                for="edit-phone"
                id="basic-addon1"
              >
                Phone number*
              </span>
              <input
                value={props.phone}
                id="edit-phone"
                name="phone"
                type="text"
                className="form-control"
                placeholder="ex. : 0712345678"
                aria-label="ex. : 0712345678"
                aria-describedby="basic-addon1"
              ></input>
            </div>
            <div className="invalid-feedback mb-2" id="invalid-phone-edit">
              Invalid phone number format.
            </div>
          </form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="add-new-buttons d-flex justify-content-between">
          <button
            type="submit"
            id="edit-phone"
            className="btn btn-danger text-center"
          >
            Save changes
          </button>
          <Button onClick={props.onHide}>Cancel</Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default EditProfileModal;
