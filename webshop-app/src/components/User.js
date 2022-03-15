import React, { useState } from "react";
import DeleteUserModal from "./DeleteUserModal"

function User({
    id,
    name,
    username,
    email,
    role,
    address,
    phone,
}) {

    const [idToDelete, setIdToDelete] = useState();
    const [modalShow, setModalShow] = useState(false);

    const openModal = (id) => {
        console.log(id)
        setIdToDelete(id);
    }

    const deleteUser = () => {
        console.log(idToDelete)
        fetch('http://localhost:3001/users/' + idToDelete, {
            method: 'DELETE',
        })
    }

    return (
        <>
            <li className="list-group-item d-flex justify-content-between align-items-start" key={`item-${id}`}>
                <div className="ms-2 me-auto">
                    <p className="name fw-bold">{name}</p>
                    <p className="username fst-italic">#{username}</p>
                </div>
                <button className="btn-collapse btn btn-outline-dark collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${id}`} aria-expanded="false" aria-controls="collapseExample">
                    <i className="fas fa-chevron-circle-down"></i>
                </button>
                {role === "admin"
                    ? ""
                    : <button className="btn-delete btn btn-outline-danger" type="button" id={id} data-bs-toggle="modal"
                        onClick={() => { setModalShow(true); openModal(id) }}
                    >
                        <i className="fas fa-trash-alt"></i>
                    </button>}
            </li>
            <div className="collapse" id={`collapse${id}`}>
                <div className="card card-body">
                    <p>Email: <span className="fw-light fst-italic">{email}</span></p>
                    <p>Phone: <span className="fw-light fst-italic">{phone}</span></p>
                    <p>Address: <span className="fw-light fst-italic">{address.street} street, {address.suite}, {address.zipcode}, {address.city}</span></p>
                </div>
            </div>
            <DeleteUserModal
                deleteUser={deleteUser}
                onHide={() => setModalShow(false)} show={modalShow} />
        </>

    )
}

export default User;