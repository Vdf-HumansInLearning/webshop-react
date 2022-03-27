import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponent";
import AddPhoneModal from "../components/AddPhoneModal";
import PhoneList from "../components/PhoneList";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

import "../css/StorePage.css";

function StorePage() {
  const [addModalShow, setAddModalShow] = useState(false);
  const [phones, setPhones] = useState([]);
  const [filterValues, setFilterValues] = useState(null);
  const [cartItemsNumber, setCartItemsNumber] = useState(0);
  const [filters, setFilters] = useState({
    brand: [],
    price_range: "",
    os: [],
    minimum_rating: "",
    stock_yes: null,
    search: "",
    sort: "none",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const isChecked = event.target.checked;
    if (name === "price_range") {
      setFilters({ ...filters, [name]: event.target.value });
    } else if (name === "brand" || name === "os") {
      if (isChecked) {
        setFilters({
          ...filters,
          [name]: [...filters[name], event.target.value],
        });
      } else {
        let index = filters[name].indexOf(event.target.value);
        filters[name].splice(index, 1);
        setFilters({ ...filters, [name]: filters[name] });
      }
    } else if (name === "stock_yes") {
      if (isChecked) {
        setFilters({ ...filters, [name]: event.target.value });
      } else {
        setFilters({ ...filters, stock_yes: null });
      }
    }
  };

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

  useEffect(() => {
    getPhones();
  }, [filters]);

  const handleReset = () => {
    setFilters({
      ...filters,
      brand: [],
      price_range: "",
      os: [],
      minimum_rating: "",
      stock_yes: null,
    });
  };

  const getPhones = () => {
    axios
    .get("http://localhost:3001/phones", { params: filters })
    .then(function (response) {
      setPhones(response.data.products);
      setFilterValues(response.data.filters);
    });
  }

  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    localStorage.getItem("user_role") && localStorage.getItem("user_role") === 'admin' ? setIsAdmin(true) : setIsAdmin(false);
  },[]);

  return (
    <>
      <NavbarComponent isAdmin={isAdmin} setIsAdmin={setIsAdmin} cartItemsNumber={cartItemsNumber}/>
      <PhoneList cartItemsNumber={cartItemsNumber} setCartItemsNumber={setCartItemsNumber} isAdmin={isAdmin} filterValues={filterValues} filters={filters} phones={phones} setFilters={setFilters} handleChange={handleChange} handleReset={handleReset} getPhones={getPhones}/>
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
        getPhones={getPhones}
      />
      <FooterComponent />
    </>
  );
}

export default StorePage;
