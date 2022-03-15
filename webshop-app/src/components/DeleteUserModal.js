import React from "react";
import { Button, Modal } from "react-bootstrap"

function DeleteUserModal(props) {

    return (
        <Modal
            {...props}
            size="m"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter" style={{ fontSize: "20px" }}>
                    Are you sure you want to delete this user?
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>

            </Modal.Body>
            <Modal.Footer style={{ justifyContent: "space-between" }}>
                <Button variant="secondary" onClick={props.onHide}>Close</Button>
                <Button variant="danger" onClick={() => props.deleteUser()}>Delete user</Button>
            </Modal.Footer>
        </Modal>

    )
}

export default DeleteUserModal;