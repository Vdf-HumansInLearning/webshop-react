import { Form, Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../css/Modal.css";
import { BASE_URL } from "../../Constants";

function AddPhoneModal({ getPhones, ...props }) {
  const [phoneToAdd, setPhoneToAdd] = useState({
    name: "",
    brand: "",
    operating_system: "",
    price: "",
    discount: "",
    quantity: "",
    availability_date: "",
    rating: "",
    image: "",
  });
  const [validated, setValidated] = useState(false);

  const handleChangeAddPhone = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    if (name === "brand") {
      setPhoneToAdd({ ...phoneToAdd, image: setImage(value), [name]: value });
    } else setPhoneToAdd({ ...phoneToAdd, [name]: value });
  };

  const setImage = (brand) => {
    let img_path = "";
    switch (brand) {
      case "Samsung":
        img_path += "toppng.com-samsung-phone-833x870.png";
        break;
      case "Apple":
        img_path += "toppng.com-iphone-550x620.png";
        break;
      case "Motorola":
        img_path +=
          "toppng.com-motorola-moto-x-gen-2-tempered-glass-by-cellhelmet-motorola-moto-x2-310x585.png";
        break;
      case "Google":
        img_path += "toppng.com-google-pixel-1-white-600x600.png";
        break;
      case "Xiaomi":
        img_path += "toppng.com-xiaomi-smartphone-710x710.png";
        break;
      case "Huawei":
        img_path += "toppng.com-huawei-p8-1200x900.png";
        break;
      default:
        img_path += "toppng.com-samsung-phone-833x870.png";
    }
    return img_path;
  };

  const addPhone = (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity()) {
      fetch(`${BASE_URL}/phones`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(phoneToAdd),
      }).then((data) => {
        if (data.status === 200) {
          getPhones();
          props.onHide();
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
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add Phone</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div
          id="new-phone-container"
          className="new-phone hide d-flex justify-content-center flex-column align-items-center text-left"
        >
          <Form
            onSubmit={(e) => addPhone(e)}
            className="new-phone-form"
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
                  onChange={handleChangeAddPhone}
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
                  onChange={handleChangeAddPhone}
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
                  onChange={handleChangeAddPhone}
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
                  onChange={handleChangeAddPhone}
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
                  onChange={handleChangeAddPhone}
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
                  onChange={handleChangeAddPhone}
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
                  onChange={handleChangeAddPhone}
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
                  onChange={handleChangeAddPhone}
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
