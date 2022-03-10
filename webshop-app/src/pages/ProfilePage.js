import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponent";
import EditProfileModal from "../components/EditProfileModal";
import { useState } from "react";
import { Button } from "react-bootstrap";

function ProfilePage(logged_in = true) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <NavbarComponent />
      <div
        class="container d-flex flex-column align-items-center mt-5 pt-5"
        id="container"
      >
        {logged_in === false ? (
          <>
            {" "}
            <h3 class="main-title">You are not logged in.</h3>
            <a href="/auth/login">Go to Login page</a>
          </>
        ) : (
          <>
            <h3 class="main-title">
              <u>Your Profile</u>
            </h3>
            <dl class="profile mt-3">
              <dt>
                <strong>Name: </strong>
              </dt>
              <dd>user name</dd>
              <dt>
                <strong>Email: </strong>
              </dt>
              <dd>user email</dd>
              {/* {user.address.street ? (
                <>
                  <dt>
                    <strong>Address: </strong>
                  </dt>
                  <dd>
                    {user.address.street + street}, {user.address.suite}
                    ,{user.address.zipcode}, {user.address.city}
                  </dd>
                </>
              ) : (
                <>
                  <dt>
                    <strong>Address: </strong>
                  </dt>
                  <dd>You didn't saved an address yet.</dd>
                </>
              )}
              {user.phone ? (
                <>
                  <dt>
                    <strong>Phone number: </strong>
                  </dt>
                  <dd>{user.phone}</dd>
                </>
              ) : (
                <>
                  <dt>
                    <strong>Phone number: </strong>
                  </dt>
                  <dd>You didn't saved a phone number yet.</dd>
                </>
              )} */}
            </dl>

            <Button variant="outline-danger" onClick={() => setModalShow(true)}>
              Edit Profile
            </Button>
          </>
        )}
      </div>
      <FooterComponent />
      <EditProfileModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default ProfilePage;
