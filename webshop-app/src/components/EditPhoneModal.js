import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "../css/Modal.css";

function EditPhoneModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Edit Phone</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div
          id="edit-phone-container"
          class="edit-phone d-flex justify-content-center flex-column align-items-center text-left"
        >
          <form class="edit-phone-form" id="edit-phone-form">
            <input type="hidden" defaultValue={""} id="edit-id" />
            <div class="input-group mb-3">
              <span class="input-group-text" for="edit-brand" id="basic-addon1">
                Brand*
              </span>
              <input
                id="edit-brand"
                name="brand"
                type="text"
                defaultValue={""}
                class="form-control"
                placeholder="ex. : Samsung"
                aria-label="ex. : Samsung"
                aria-describedby="basic-addon1"
                required
              ></input>
            </div>
            <div class="invalid-feedback mb-2" id="invalid-brand-edit">
              Invalid product brand.
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text" for="edit-name" id="basic-addon1">
                Name*
              </span>
              <input
                id="edit-name"
                name="name"
                type="text"
                defaultValue={""}
                class="form-control"
                placeholder="ex. : Galaxy S21"
                aria-label="ex. : Galaxy S21"
                aria-describedby="basic-addon1"
                required
              ></input>
            </div>
            <div class="invalid-feedback mb-2" id="invalid-name-edit">
              Invalid product name.
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text" for="edit-os" id="basic-addon1">
                OS*
              </span>
              <input
                id="edit-os"
                name="os"
                type="text"
                defaultValue={""}
                class="form-control"
                placeholder="ex. : Android, iOS"
                aria-label="ex. : Android, iOS"
                aria-describedby="basic-addon1"
                required
              ></input>
            </div>
            <div class="invalid-feedback mb-2" id="invalid-os-edit">
              Invalid product operating system.
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text" for="edit-price" id="basic-addon1">
                Price*
              </span>
              <input
                id="edit-price"
                name="price"
                type="text"
                defaultValue={""}
                class="form-control"
                placeholder="ex. : 899"
                aria-label="ex. : 899"
                aria-describedby="basic-addon1"
                required
              ></input>
            </div>
            <div class="invalid-feedback mb-2" id="invalid-price-edit">
              Invalid price format.
            </div>
            <div class="input-group mb-3">
              <span
                class="input-group-text"
                for="edit-discount"
                id="basic-addon1"
              >
                Discount
              </span>
              <input
                id="edit-discount"
                name="discount"
                type="text"
                defaultValue={""}
                class="form-control"
                placeholder="ex. : 250"
                aria-label="ex. : 250"
                aria-describedby="basic-addon1"
              ></input>
            </div>
            <div class="invalid-feedback mb-2" id="invalid-discount-edit">
              Invalid discount format.
            </div>
            <div class="input-group mb-3">
              <span
                class="input-group-text"
                for="edit-quantity"
                id="basic-addon1"
              >
                Quantity*
              </span>
              <input
                id="edit-quantity"
                name="quantity"
                type="text"
                defaultValue={""}
                class="form-control"
                placeholder="ex. : 100"
                aria-label="ex. : 100"
                aria-describedby="basic-addon1"
                required
              ></input>
            </div>
            <div class="invalid-feedback mb-2" id="invalid-quantity-edit">
              Invalid quantity format.
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text" for="edit-date" id="basic-addon1">
                Availability date*
              </span>
              <input
                id="edit-date"
                type="text"
                defaultValue={""}
                name="date"
                class="form-control"
                placeholder="ex. : 2021-08-13"
                aria-label="ex. : 2021-08-13"
                aria-describedby="basic-addon1"
                required
              ></input>
            </div>
            <div class="invalid-feedback mb-2" id="invalid-date-edit">
              Invalid date format.
            </div>
            <div class="input-group mb-3">
              <span
                class="input-group-text"
                for="edit-rating"
                id="basic-addon1"
              >
                Rating
              </span>
              <input
                id="edit-rating"
                name="rating"
                type="text"
                defaultValue={""}
                class="form-control"
                placeholder="ex. : 4.5"
                aria-label="ex. : 4.5"
                aria-describedby="basic-addon1"
              ></input>
            </div>
            <div class="invalid-feedback mb-2" id="invalid-rating-edit">
              Invalid rating format.
            </div>
          </form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="add-new-buttons d-flex justify-content-between">
          <button
            type="submit"
            id="edit-phone"
            class="btn btn-danger text-center"
          >
            Save changes
          </button>
          <Button onClick={props.onHide}>Cancel</Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default EditPhoneModal;
