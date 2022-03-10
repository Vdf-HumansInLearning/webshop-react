import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponent";
import EditProfileModal from "../components/EditProfileModal";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

function ProfilePage() {
  const [modalShow, setModalShow] = useState(false);
  const [user, setUser] = useState(null);

  let logged_in = false;
  let user_id = localStorage.getItem("user_id");

  if (user_id) {
    logged_in = true;
  }
  
  useEffect(() => {
    if (user_id && logged_in) {
      fetch("http://localhost:3001/users/" + user_id)
        .then((response) => response.json())
        .then((data) => {
          setUser(data)});
    }
  }, [])
  
  
  return (
    <>
      <NavbarComponent />
      <div
        className="container d-flex flex-column align-items-center mt-5 pt-5"
        id="container"
      >
        {logged_in && user ? (
          <>
            <h3 className="main-title">
              <u>Your Profile</u>
            </h3>
            <dl className="profile mt-3">
              <dt>
                <strong>Name: </strong>
              </dt>
              <dd>{user.name}</dd>
              <dt>
                <strong>Email: </strong>
              </dt>
              <dd>{user.email}</dd>
              {user.address.street ? (
                <>
                  <dt>
                    <strong>Address: </strong>
                  </dt>
                  <dd>
                    {user.address.street + "street"}, {user.address.suite}
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
              )}
            </dl>

            <Button variant="outline-danger" onClick={() => setModalShow(true)}>
              Edit Profile
            </Button>
          </>
        ) : (
          <>
            <h3 className="main-title">You are not logged in.</h3>
            <a href="/auth/login">Go to Login page</a>
          </>
        )}
      </div>
      <FooterComponent />
      <EditProfileModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default ProfilePage;
