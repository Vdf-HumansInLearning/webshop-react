import React from "react";
import { Button, Modal } from "react-bootstrap";

function DeletePhoneModal({ onHide, deletePhone, show}) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          style={{ fontSize: "20px" }}
        >
          Are you sure you want to delete this phone?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body></Modal.Body>
      <Modal.Footer style={{ justifyContent: "space-between" }}>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button
          variant="danger"
          onClick={() => {
            deletePhone();
            onHide();
          }}
        >
          Delete Phone
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeletePhoneModal;
