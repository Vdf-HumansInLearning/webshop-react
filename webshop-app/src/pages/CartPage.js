import Container from "react-bootstrap/esm/Container";
import "../css/CartPage.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
import OrderSummary from "../components/cart/OrderSummary";
import CustomerAddress from "../components/cart/CustomerAddress";
import { BASE_URL } from "../Constants";

function CartPage() {
  //---DECLARATIONS---
  //file with const declaration; import url address here
  const url = "http://localhost:3001/";

  const orderList = JSON.parse(localStorage.getItem("items"));
  const userId = localStorage.getItem("user_id");
  const isLoggedIn = userId ? true : false;

  const [cartItems, setCartItems] = useState([]);
  const [totalCartValue, setTotalCartValue] = useState(0);
  const [cartItemsNumber, setCartItemsNumber] = useState(0);

  const [currentUser, setCurrentUser] = useState({
    id: 1,
    name: "N/A",
    username: "N/A",
    email: "N/A",
    password: "N/A",
    role: "N/A",
    address: { street: "N/A", suite: "N/A", city: "N/A", zipcode: "000000" },
    phone: "000000000",
  });
  const [deliveryAddress, setDeliveryAddress] = useState({
    street: "",
    suite: "",
    city: "",
    zipcode: "",
  });
  const [billingAddress, setBillingAddress] = useState({
    street: "",
    suite: "",
    city: "",
    zipcode: "",
  });

  //---METHODS---

  const changeQuantity = (id, type) => {
    let isIncrease = type === "increase";
    let array = [...cartItems];
    const cartItemIndex = array.findIndex((item) => item.id === id);
    let condition = isIncrease
      ? array[cartItemIndex].quantity < 5
      : array[cartItemIndex].quantity > 1;
    let toastMessage = isIncrease
      ? "You have exceeded the available quantity for this product."
      : "You can remove items by clicking on the trash icon.";

    if (condition) {
      if(isIncrease) {
        setCartItemsNumber(cartItemsNumber + 1);
      } else {
        setCartItemsNumber(cartItemsNumber - 1);
      }
      array[cartItemIndex].quantity = isIncrease
        ? array[cartItemIndex].quantity + 1
        : array[cartItemIndex].quantity - 1;
      array[cartItemIndex].value =
        array[cartItemIndex].quantity * array[cartItemIndex].price;
      setCartItems(array);
      //set new cart value
      setTotalCartValue(totalCartValue - array[cartItemIndex].value);
      //set local storage with new array
      let orders = array.map((item) => arrayToLocalStorage(item));
      localStorage.setItem("items", JSON.stringify(orders));
    } else {
      //show toast
      // toastMessage
    }
  };

  const deleteCartItem = (idToDelete) => {
    let array = [...cartItems];
    let foundIndex = array.findIndex((item) => item.id === idToDelete);
    let quantity = array[foundIndex].quantity;
    if (foundIndex !== -1) {
      array.splice(foundIndex, 1);
      if(array.length > 0){
      const orders = array.map((item) => arrayToLocalStorage(item));
      localStorage.setItem("items", JSON.stringify(orders));
      } else {
        localStorage.removeItem("items");
      }
      setCartItems(array);
      setCartItemsNumber(cartItemsNumber - quantity);
    }
  };

  const arrayToLocalStorage = ({ name, price, quantity }) => ({
    name,
    price,
    quantity,
  });

  const handleChangeAddress = (e, type) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    if (type === "delivery") {
      setDeliveryAddress((previous) => {
        return { ...previous, [name]: value };
      });
    } else {
      setBillingAddress((previous) => {
        return { ...previous, [name]: value };
      });
    }
  };

  const placeOrder = (e) => {
    e.preventDefault();
    const orders = cartItems.map((item) => arrayToLocalStorage(item));

    let order = {
      data: {
        user: currentUser.id,
        delivery_address: { ...deliveryAddress },
        billing_address: { ...billingAddress },
        items: orders,
        total: totalCartValue,
      },
    };

    //validate addresses
    fetch(url + "orders", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    }).then((data) => {
      if (data.status === 200) {
        localStorage.removeItem("items");
        //show toast
        //order successful
      }
    });
  };

  const getUser = (id) => {
    fetch(BASE_URL + "users/" + id)
      .then((response) => response.json())
      .then((data) => {
        setCurrentUser(data);
        setBillingAddress(data.address);
        setDeliveryAddress(data.address);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    let sum = 0;
    cartItems.forEach((item) => {
      sum += item.value;
    });
    setTotalCartValue(sum);
  }, [isLoggedIn, cartItems]);

  useEffect(() => {
    if (orderList && isLoggedIn) {
      //set address fields
      getUser(userId);
      //add a value to each cartItem
      const orders = orderList.map((item) => ({
        ...item,
        value: item.price * item.quantity,
        id: item.id,
      }));
      setCartItems(orders);
    } else if (orderList) {
      const orders = orderList.map((item) => ({
        ...item,
        value: item.price * item.quantity,
        id: item.id,
      }));
      setCartItems(orders);
      let sum = 0;
      cartItems.forEach((item) => {
        sum += item.value;
      });
      setTotalCartValue(sum);
    }

    if(orderList) {
      let counter = 0;
      for(let i=0; i<orderList.length; i++){
        counter = counter + orderList[i].quantity;
      }
      setCartItemsNumber(counter);
    }

  }, []);

  //no items in cart and not logged in
  if (!(orderList)) {
    return (
      <>
        <NavbarComponent cartItemsNumber={cartItemsNumber}/>
        <Container className="mt-5 pt-5 text-center">
          <h4>Your cart is empty</h4>

          <Link to="/phones">Continue shopping</Link>
        </Container>
        <div className="cart-footer">
          <FooterComponent />
        </div>
      </>
    );
  }

  const orderSummary = (
    <OrderSummary
      cartItems={cartItems}
      totalCartValue={totalCartValue}
      changeQuantity={changeQuantity}
      deleteCartItem={deleteCartItem}
    />
  );

  //items in cart and not logged in
  if (orderList && !isLoggedIn) {
    return (
      <>
      <NavbarComponent cartItemsNumber={cartItemsNumber}/>
      <Container className="mt-5 pt-5 text-center">
        {orderSummary}
      </Container>
      <div className="cart-footer">
        <FooterComponent />
      </div>
    </>
    );
  }

  //items in cart and logged in
  const address = (
    <CustomerAddress
      placeOrder={placeOrder}
      handleChangeAddress={handleChangeAddress}
      billingAddress={billingAddress}
      deliveryAddress={deliveryAddress}
    />
  );

  return (
    <>
      <NavbarComponent cartItemsNumber={cartItemsNumber}/>
      <Container className="mt-5 pt-5 text-center">
        {orderSummary}
        {orderList && isLoggedIn && address}
      </Container>
      <div className="cart-footer">
        <FooterComponent />
      </div>
    </>
  );
}

export default CartPage;
