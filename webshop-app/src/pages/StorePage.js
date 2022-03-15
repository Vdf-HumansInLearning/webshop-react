import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponent";
import AddPhoneModal from "../components/AddPhoneModal";
import EditPhoneModal from "../components/EditPhoneModal";
import PhoneList from "../components/PhoneList";
import { Button } from "react-bootstrap";
import { useState } from "react";

import '../css/StorePage.css';

function StorePage() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <NavbarComponent />
      <PhoneList />
      <div className="d-flex justify-content-center mb-5 mt-5">
        <Button variant="danger" onClick={() => setModalShow(true)}>
            Add Phone
        </Button>
      </div>
      
      <AddPhoneModal show={modalShow} onHide={() => setModalShow(false)} />
      <FooterComponent />
    </>
  );
}

export default StorePage;
