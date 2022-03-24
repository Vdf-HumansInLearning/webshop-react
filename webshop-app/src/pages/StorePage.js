import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponent";
import AddPhoneModal from "../components/AddPhoneModal";
import PhoneList from "../components/PhoneList";
import { Button } from "react-bootstrap";
import { useState } from "react";

import "../css/StorePage.css";

function StorePage() {
  const [addModalShow, setAddModalShow] = useState(false);

  return (
    <>
      <NavbarComponent />
      <PhoneList />
      <div className="d-flex justify-content-center mb-5 mt-5">
        <Button variant="danger" onClick={() => setAddModalShow(true)}>
          Add Phone
        </Button>
      </div>
      <AddPhoneModal
        show={addModalShow}
        onHide={() => setAddModalShow(false)}
      />
      <FooterComponent />
    </>
  );
}

export default StorePage;
