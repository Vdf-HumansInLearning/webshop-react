import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponent";
import { useState, useEffect } from "react";
import UserList from "../components/UserList"
function UsersPage() {
    const [cartItemsNumber, setCartItemsNumber] = useState(0);

    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem("items"));
        let counter = 0;
        if(cartItems) {
          for(let i=0; i<cartItems.length; i++){
            counter = counter + cartItems[i].quantity;
          }
          setCartItemsNumber(counter);
        }
    }, []);

      
    return (
        <>
            <NavbarComponent cartItemsNumber={cartItemsNumber}/>
            <UserList />
            <FooterComponent />
        </>
    );
}

export default UsersPage;