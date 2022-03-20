import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponent";
import Order from "../components/Order";
import "../css/Orders.css";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function OrdersPage() {
  const [orders, setOrders] = useState([]);

  let loggedIn = false;
  let idUser = localStorage.getItem("user_id");

  if (idUser) {
    loggedIn = true;
  }

  useEffect(() => {
    fetch(`http://localhost:3001/orders/user/${idUser}`)
      .then((response) => response.json())
      .then((data) => setOrders(data));
  }, []);

  console.log(orders);
  return (
    <>
      <NavbarComponent />
      {loggedIn && orders.length > 0 ? (
        <main className="order-main">
          {orders.map((order) => (
            <Order
              key={order.id}
              order={order}
              id={order.id}
              email={order.email}
              name={order.name}
              phone={order.name}
              date={order.date}
              total={order.total}
              deliveryAddress={order.delivery_address}
            />
          ))}
        </main>
      ) : loggedIn && orders.length === 0 ? (
        <div className="text-center mt-5">
          <h3>You don't have any orders yet</h3>
          <Link to="/">Go back to Home page</Link>
        </div>
      ) : (
        <div className="text-center mt-5">
          <h3>You're not allowed on this page</h3>
          <Link to="/">Go back to Home page</Link>
        </div>
      )}
      <FooterComponent />
    </>
  );
}

export default OrdersPage;
