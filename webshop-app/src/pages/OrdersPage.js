import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponent";
import Order from "../components/Order";
import "../css/Orders.css";
import React from "react";
import { useState, useEffect } from "react";

function OrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/orders")
      .then((response) => response.json())
      .then((data) => setOrders(data));
  }, []);

  console.log(orders);
  return (
    <>
      <NavbarComponent />
      <main className="main-main">
        {orders.map((order) => (
          <Order
            key={order.id}
            id={order.id}
            email={order.email}
            name={order.name}
            phone={order.name}
            date={order.date}
            price={order.order[0].price}
            quantity={order.order[0].quantity}
            deliveryAddress={order.delivery_address}
          />
        ))}
      </main>
      <FooterComponent />
    </>
  );
}

export default OrdersPage;
