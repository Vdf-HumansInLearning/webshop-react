import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";
import "../css/Modal.css";

function AddPhoneModal(props) {
  const [phoneToAdd, setPhoneToAdd] = useState({
    name: "",
    brand: "",
    operating_system: "",
    price: "",
    discount: "",
    quantity: "",
    availability_date: "",
    rating: "",
    image: "toppng.com-samsung-phone-833x870.png",
  });

  const handleChangeAddPhone = (e) => {
    console.log(e);
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setPhoneToAdd({ ...phoneToAdd, [name]: value });
  };

  const addPhone = (e) => {
    e.preventDefault();
    console.log(phoneToAdd);
    fetch("http://localhost:3001/phones", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(phoneToAdd),
    }).then((data) => {
      if (data.status === 200) {
        console.log("phone added");
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
        <Modal.Title id="contained-modal-title-vcenter">Add Phone</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div
          id="new-phone-container"
          className="new-phone hide d-flex justify-content-center flex-column align-items-center text-left"
        >
          <form
            onSubmit={(e) => addPhone(e)}
            className="new-phone-form"
            id="new-phone-form"
          >
            <div className="input-group mb-3">
              <span
                className="input-group-text"
                htmlFor="add-brand"
                id="basic-addon1"
              >
                Brand*
              </span>
              <input
                id="add-brand"
                name="brand"
                type="text"
                className="form-control"
                placeholder="ex. : Samsung"
                aria-label="ex. : Samsung"
                aria-describedby="basic-addon1"
                onChange={handleChangeAddPhone}
                required
              ></input>
            </div>
            <div className="invalid-feedback mb-2" id="invalid-brand-add">
              Invalid product brand.
            </div>
            <div className="input-group mb-3">
              <span
                className="input-group-text"
                htmlFor="add-name"
                id="basic-addon1"
              >
                Name*
              </span>
              <input
                id="add-name"
                name="name"
                type="text"
                className="form-control"
                placeholder="ex. : Galaxy S21"
                aria-label="ex. : Galaxy S21"
                aria-describedby="basic-addon1"
                onChange={handleChangeAddPhone}
                required
              ></input>
            </div>
            <div className="invalid-feedback mb-2" id="invalid-name-add">
              Invalid product name.
            </div>
            <div className="input-group mb-3">
              <span
                className="input-group-text"
                htmlFor="add-os"
                id="basic-addon1"
              >
                OS*
              </span>
              <input
                id="add-os"
                name="operating_system"
                type="text"
                className="form-control"
                placeholder="ex. : Android, iOS"
                aria-label="ex. : Android, iOS"
                aria-describedby="basic-addon1"
                onChange={handleChangeAddPhone}
                required
              ></input>
            </div>
            <div className="invalid-feedback mb-2" id="invalid-os-add">
              Invalid product operating system.
            </div>
            <div className="input-group mb-3">
              <span
                className="input-group-text"
                htmlFor="add-price"
                id="basic-addon1"
              >
                Price*
              </span>
              <input
                id="add-price"
                name="price"
                type="text"
                className="form-control"
                placeholder="ex. : 899"
                aria-label="ex. : 899"
                aria-describedby="basic-addon1"
                onChange={handleChangeAddPhone}
                required
              ></input>
            </div>
            <div className="invalid-feedback mb-2" id="invalid-price-add">
              Invalid price format.
            </div>
            <div className="input-group mb-3">
              <span
                className="input-group-text"
                htmlFor="add-discount"
                id="basic-addon1"
              >
                Discount
              </span>
              <input
                id="add-discount"
                name="discount"
                type="text"
                className="form-control"
                placeholder="ex. : 250"
                aria-label="ex. : 250"
                aria-describedby="basic-addon1"
                onChange={handleChangeAddPhone}
                required
              ></input>
            </div>
            <div className="invalid-feedback mb-2" id="invalid-discount-add">
              Invalid discount format.
            </div>
            <div className="input-group mb-3">
              <span
                className="input-group-text"
                htmlFor="add-quantity"
                id="basic-addon1"
              >
                Quantity*
              </span>
              <input
                id="add-quantity"
                name="quantity"
                type="text"
                className="form-control"
                placeholder="ex. : 100"
                aria-label="ex. : 100"
                aria-describedby="basic-addon1"
                onChange={handleChangeAddPhone}
                required
              ></input>
            </div>
            <div className="invalid-feedback mb-2" id="invalid-quantity-add">
              Invalid quantity format.
            </div>
            <div className="input-group mb-3">
              <span
                className="input-group-text"
                htmlFor="add-date"
                id="basic-addon1"
              >
                Availability date*
              </span>
              <input
                id="add-date"
                type="text"
                name="availability_date"
                className="form-control"
                placeholder="ex. : 2021-08-13"
                aria-label="ex. : 2021-08-13"
                aria-describedby="basic-addon1"
                onChange={handleChangeAddPhone}
                required
              ></input>
            </div>
            <div className="invalid-feedback mb-2" id="invalid-date-add">
              Invalid date format.
            </div>
            <div className="input-group mb-3">
              <span
                className="input-group-text"
                htmlFor="add-rating"
                id="basic-addon1"
              >
                Rating
              </span>
              <input
                id="add-rating"
                name="rating"
                type="text"
                className="form-control"
                placeholder="ex. : 4.5"
                aria-label="ex. : 4.5"
                aria-describedby="basic-addon1"
                onChange={handleChangeAddPhone}
                required
              ></input>
            </div>
            <div className="invalid-feedback mb-2" id="invalid-rating-add">
              Invalid rating format.
            </div>
          </form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="add-new-buttons d-flex justify-content-between">
          <Button variant="danger" onClick={addPhone}>
            Add
          </Button>
          <Button onClick={props.onHide}>Cancel</Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default AddPhoneModal;
