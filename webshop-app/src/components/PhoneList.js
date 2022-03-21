import { useState, useEffect } from "react";
import axios from "axios";
import Phone from "./Phone";
import Filters from "./Filters";

function PhoneList() {
  const [phones, setPhones] = useState([]);
  const [filterValues, setFilterValues] = useState(null);
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
    axios
      .get("http://localhost:3001/phones", { params: filters })
      .then(function (response) {
        setPhones(response.data.products);
        setFilterValues(response.data.filters);
      });
  }, [filters]);

  useEffect(() => {
    axios.get("http://localhost:3001/phones").then(function (response) {
      setPhones(response.data.products);
    });
  }, [phones]);

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

  return (
    <>
      <Filters
        filterValues={filterValues}
        filters={filters}
        setFilters={setFilters}
        handleChange={handleChange}
        handleReset={handleReset}
      />
      <div className="container mt-3 mb-3">
        <div className="row" id="phone-row">
          {phones.map((item) => (
            <Phone
              key={item.id}
              id={item.id}
              date={item.availability_date}
              discount={item.discount}
              name={item.name}
              image={item.image}
              brand={item.brand}
              os={item.operating_system}
              price={item.price}
              quantity={item.quantity}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default PhoneList;
