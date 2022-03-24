import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";
import "../css/Modal.css";

function EditPhoneModal(props) {
  const [phoneToEdit, setPhoneToEdit] = useState({
    name: props.name,
    brand: props.brand,
    operating_system: props.os,
    price: props.price,
    discount: props.discount,
    quantity: props.quantity,
    availability_date: props.date,
    rating: props.rating,
    image: props.image,
  });

  const handleChangeEditPhone = (e) => {
    console.log(e);
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setPhoneToEdit({ ...phoneToEdit, [name]: value });
  };

  const editPhone = (e) => {
    e.preventDefault();
    console.log(phoneToEdit);
    fetch("http://localhost:3001/phones/" + props.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(phoneToEdit),
    }).then((data) => {
      if (data.status === 201) {
        console.log("phone edited");
      } else {
        console.log("error");
      }
    });
  };

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
          className="edit-phone d-flex justify-content-center flex-column align-items-center text-left"
        >
          <form
            onSubmit={(e) => editPhone(e)}
            className="edit-phone-form"
            id="edit-phone-form"
          >
            <div className="input-group mb-3">
              <span
                className="input-group-text"
                htmlFor="edit-brand"
                id="basic-addon1"
              >
                Brand*
              </span>
              <input
                id="edit-brand"
                name="brand"
                type="text"
                defaultValue={props.brand}
                onChange={handleChangeEditPhone}
                className="form-control"
                placeholder="ex. : Samsung"
                aria-label="ex. : Samsung"
                aria-describedby="basic-addon1"
                required
              ></input>
            </div>
            <div className="invalid-feedback mb-2" id="invalid-brand-edit">
              Invalid product brand.
            </div>
            <div className="input-group mb-3">
              <span
                className="input-group-text"
                htmlFor="edit-name"
                id="basic-addon1"
              >
                Name*
              </span>
              <input
                id="edit-name"
                name="name"
                type="text"
                defaultValue={props.name}
                onChange={handleChangeEditPhone}
                className="form-control"
                placeholder="ex. : Galaxy S21"
                aria-label="ex. : Galaxy S21"
                aria-describedby="basic-addon1"
                required
              ></input>
            </div>
            <div className="invalid-feedback mb-2" id="invalid-name-edit">
              Invalid product name.
            </div>
            <div className="input-group mb-3">
              <span
                className="input-group-text"
                htmlFor="edit-os"
                id="basic-addon1"
              >
                OS*
              </span>
              <input
                id="edit-os"
                name="operating_system"
                type="text"
                defaultValue={props.os}
                onChange={handleChangeEditPhone}
                className="form-control"
                placeholder="ex. : Android, iOS"
                aria-label="ex. : Android, iOS"
                aria-describedby="basic-addon1"
                required
              ></input>
            </div>
            <div className="invalid-feedback mb-2" id="invalid-os-edit">
              Invalid product operating system.
            </div>
            <div className="input-group mb-3">
              <span
                className="input-group-text"
                htmlFor="edit-price"
                id="basic-addon1"
              >
                Price*
              </span>
              <input
                id="edit-price"
                name="price"
                type="text"
                defaultValue={props.price}
                onChange={handleChangeEditPhone}
                className="form-control"
                placeholder="ex. : 899"
                aria-label="ex. : 899"
                aria-describedby="basic-addon1"
                required
              ></input>
            </div>
            <div className="invalid-feedback mb-2" id="invalid-price-edit">
              Invalid price format.
            </div>
            <div className="input-group mb-3">
              <span
                className="input-group-text"
                htmlFor="edit-discount"
                id="basic-addon1"
              >
                Discount
              </span>
              <input
                id="edit-discount"
                name="discount"
                type="text"
                defaultValue={props.discount}
                onChange={handleChangeEditPhone}
                className="form-control"
                placeholder="ex. : 250"
                aria-label="ex. : 250"
                aria-describedby="basic-addon1"
              ></input>
            </div>
            <div className="invalid-feedback mb-2" id="invalid-discount-edit">
              Invalid discount format.
            </div>
            <div className="input-group mb-3">
              <span
                className="input-group-text"
                htmlFor="edit-quantity"
                id="basic-addon1"
              >
                Quantity*
              </span>
              <input
                id="edit-quantity"
                name="quantity"
                type="text"
                defaultValue={props.quantity}
                onChange={handleChangeEditPhone}
                className="form-control"
                placeholder="ex. : 100"
                aria-label="ex. : 100"
                aria-describedby="basic-addon1"
                required
              ></input>
            </div>
            <div className="invalid-feedback mb-2" id="invalid-quantity-edit">
              Invalid quantity format.
            </div>
            <div className="input-group mb-3">
              <span
                className="input-group-text"
                htmlFor="edit-date"
                id="basic-addon1"
              >
                Availability date*
              </span>
              <input
                id="edit-date"
                type="text"
                defaultValue={props.date}
                onChange={handleChangeEditPhone}
                name="availability_date"
                className="form-control"
                placeholder="ex. : 2021-08-13"
                aria-label="ex. : 2021-08-13"
                aria-describedby="basic-addon1"
                required
              ></input>
            </div>
            <div className="invalid-feedback mb-2" id="invalid-date-edit">
              Invalid date format.
            </div>
            <div className="input-group mb-3">
              <span
                className="input-group-text"
                htmlFor="edit-rating"
                id="basic-addon1"
              >
                Rating
              </span>
              <input
                id="edit-rating"
                name="rating"
                type="text"
                defaultValue={props.rating}
                onChange={handleChangeEditPhone}
                className="form-control"
                placeholder="ex. : 4.5"
                aria-label="ex. : 4.5"
                aria-describedby="basic-addon1"
              ></input>
            </div>
            <div className="invalid-feedback mb-2" id="invalid-rating-edit">
              Invalid rating format.
            </div>
          </form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="add-new-buttons d-flex justify-content-between">
          <Button variant="danger" onClick={editPhone}>
            Save changes
          </Button>
          <Button onClick={props.onHide}>Cancel</Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default EditPhoneModal;
