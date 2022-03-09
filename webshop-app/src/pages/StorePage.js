import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponent";
import AddPhoneModal from "../components/AddPhoneModal";
import EditPhoneModal from "../components/EditPhoneModal";
import { Button } from "react-bootstrap";
import { useState } from "react";

function StorePage() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <NavbarComponent />
      <div>Store Page</div>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Add Phone
      </Button>
      <AddPhoneModal show={modalShow} onHide={() => setModalShow(false)} />
      <FooterComponent />
    </>
  );
}

export default StorePage;
