import { Form, Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../css/Modal.css";

function EditPhoneModal({ getPhones, onHide, ...props }) {
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
  const [validated, setValidated] = useState(false);

  const handleChangeEditPhone = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setPhoneToEdit({ ...phoneToEdit, [name]: value });
  };

  const editPhone = (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity()) {
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
          getPhones();
          onHide();
        } else {
          console.log("error");
        }
      });
    }

    setValidated(true);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Edit Phone</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div
          id="edit-phone-container"
          className="edit-phone d-flex justify-content-center flex-column align-items-center text-left"
        >
          <Form
            onSubmit={(e) => editPhone(e)}
            className="edit-phone-form"
            id="edit-phone-form"
            noValidate
            validated={validated}
          >
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="validationCustom01"
            >
              <Form.Label column sm="3">
                Brand*
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  type="text"
                  name="brand"
                  defaultValue={props.brand}
                  onChange={handleChangeEditPhone}
                  placeholder="ex. : Samsung"
                  aria-label="ex. : Samsung"
                  pattern="^[a-zA-Z]{1,30}$"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Invalid product brand.
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="validationCustom01"
            >
              <Form.Label column sm="3">
                Name*
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  name="name"
                  type="text"
                  defaultValue={props.name}
                  onChange={handleChangeEditPhone}
                  placeholder="ex. : Galaxy S21"
                  aria-label="ex. : Galaxy S21"
                  aria-describedby="basic-addon1"
                  pattern="(^[A-Za-z0-9]{1,16})([ ]{0,1})([A-Za-z0-9]{1,16})?([ ]{0,1})?([A-Za-z0-9]{1,16})"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Invalid product name.
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="validationCustom01"
            >
              <Form.Label column sm="3">
                Operating system*
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  name="operating_system"
                  type="text"
                  defaultValue={props.os}
                  onChange={handleChangeEditPhone}
                  placeholder="ex. : Android, iOS"
                  aria-label="ex. : Android, iOS"
                  aria-describedby="basic-addon1"
                  pattern="^[a-zA-Z]{1,30}$"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Invalid product operating system.
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="validationCustom01"
            >
              <Form.Label column sm="3">
                Price*
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  name="price"
                  type="text"
                  defaultValue={props.price}
                  onChange={handleChangeEditPhone}
                  placeholder="ex. : 899"
                  aria-label="ex. : 899"
                  aria-describedby="basic-addon1"
                  pattern="^\d+$"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Invalid price format.
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="validationCustom01"
            >
              <Form.Label column sm="3">
                Discount
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  name="discount"
                  type="text"
                  defaultValue={props.discount}
                  onChange={handleChangeEditPhone}
                  placeholder="ex. : 250"
                  aria-label="ex. : 250"
                  pattern="^\d+$"
                  aria-describedby="basic-addon1"
                />
                <Form.Control.Feedback type="invalid">
                  Invalid discount format.
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="validationCustom01"
            >
              <Form.Label column sm="3">
                Quantity*
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  name="quantity"
                  type="text"
                  defaultValue={props.quantity}
                  onChange={handleChangeEditPhone}
                  placeholder="ex. : 100"
                  aria-label="ex. : 100"
                  aria-describedby="basic-addon1"
                  pattern="^\d+$"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Invalid quantity format.
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="validationCustom01"
            >
              <Form.Label column sm="3">
                Availability date*
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  type="text"
                  defaultValue={props.date}
                  onChange={handleChangeEditPhone}
                  name="availability_date"
                  placeholder="ex. : 2021-08-13"
                  aria-label="ex. : 2021-08-13"
                  aria-describedby="basic-addon1"
                  pattern="^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Invalid date format.
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="validationCustom01"
            >
              <Form.Label column sm="3">
                Rating
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  name="rating"
                  type="text"
                  defaultValue={props.rating}
                  onChange={handleChangeEditPhone}
                  className="form-control"
                  placeholder="ex. : 4.5"
                  aria-label="ex. : 4.5"
                  pattern="^[0-5]"
                />
                <Form.Control.Feedback type="invalid">
                  Invalid rating format.
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
          </Form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="add-new-buttons d-flex justify-content-between">
          <Button variant="danger" onClick={editPhone}>
            Save changes
          </Button>
          <Button onClick={onHide}>Cancel</Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default EditPhoneModal;
