import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponent";
import AddPhoneModal from "../components/AddPhoneModal";
import PhoneList from "../components/PhoneList";
import { Button } from "react-bootstrap";
import { useState } from "react";

import "../css/StorePage.css";

function StorePage() {
  const [addModalShow, setAddModalShow] = useState(false);

  let isAdmin = false;
  
  localStorage.getItem("user_role") && localStorage.getItem("user_role") === 'admin' ? isAdmin = true : isAdmin = false;

  return (
    <>
      <NavbarComponent />
      <PhoneList />
      { isAdmin &&
        <div className="d-flex justify-content-center mb-5 mt-5">
        <Button variant="danger" onClick={() => setAddModalShow(true)}>
          Add Phone
        </Button>
        </div>
      } 
      <AddPhoneModal
        show={addModalShow}
        onHide={() => setAddModalShow(false)}
      />
      <FooterComponent />
    </>
  );
}

export default StorePage;
